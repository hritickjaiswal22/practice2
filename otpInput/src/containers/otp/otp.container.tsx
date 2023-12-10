import React, { useRef, useEffect, useState } from "react";

import OtpInputComponent from "../../components/otpInput";

const useActiveElement = () => {
  const [active, setActive] = useState(document.activeElement);

  const handleFocusIn = (e) => {
    setActive(document.activeElement);
  };

  useEffect(() => {
    document.addEventListener("focusin", handleFocusIn);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, []);

  return active;
};

function OtpContainer() {
  const formRef = useRef(null);
  const focusedElement = useActiveElement();
  const [inputs, setInputs] = useState(Array(6).fill(""));
  const [btnDisabled, setBtnDisabled] = useState(true);

  function isValidInput(arr: Array<string>) {
    return arr.every((char) => {
      const asci = char.charCodeAt(0);

      if (asci >= 48 && asci <= 57) return true;
      return false;
    });
  }

  function pasteHandler(str: string) {
    if (str.length === 6) {
      const truth = isValidInput(str.split(""));

      if (truth) {
        setInputs(str.split(""));
      }
    }
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formArr = e.target;
    console.log(formRef.current.children);
  }

  function otpInputChangeHandler(val: number, index: number) {
    if (val >= 0 && val <= 9) {
      const temp = [...inputs];
      temp[index] = String(val);

      setInputs(temp);
    }
  }

  function moveLeft() {
    console.log(focusedElement);
  }

  function moveRight() {
    console.log(focusedElement);
  }

  function keyPressHandler(e) {
    const { key } = e;

    switch (key) {
      case "ArrowRight":
        moveLeft();
        break;

      case "ArrowLeft":
        moveRight();
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    const handlePasteAnywhere = (event) => {
      pasteHandler(event.clipboardData.getData("text"));
    };

    window.addEventListener("paste", handlePasteAnywhere);

    return () => {
      window.removeEventListener("paste", handlePasteAnywhere);
    };
  }, []);

  useEffect(() => {
    if (isValidInput(inputs)) {
      setBtnDisabled(false);
    } else setBtnDisabled(true);
  }, [inputs]);

  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
  }, []);

  return (
    <form ref={formRef} onSubmit={submitHandler}>
      {inputs.map((input, i) => (
        <OtpInputComponent
          index={i}
          value={input}
          key={i}
          changeHandler={otpInputChangeHandler}
        />
      ))}

      <button disabled={btnDisabled} type="submit">
        Submit
      </button>
    </form>
  );
}

export default OtpContainer;
