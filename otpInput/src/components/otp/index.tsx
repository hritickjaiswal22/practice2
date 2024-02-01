import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

function OtpInput({
  setActiveInput,
  n,
}: {
  setActiveInput: React.Dispatch<React.SetStateAction<number>>;
  n: number;
}) {
  function keydownHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      setValue("");

      setActiveInput((prev) => {
        if (prev !== 0) {
          return prev - 1;
        }

        return prev;
      });

      return;
    }

    const asci = e.key.charCodeAt(0);

    if (asci >= 48 && asci <= 57) {
      setValue(e.key);

      setActiveInput((prev) => {
        if (prev !== n - 1) {
          return prev + 1;
        }

        return prev;
      });
    }
  }

  const [value, setValue] = useState("");

  return (
    <input
      className={styles.otpInput}
      maxLength={1}
      onKeyDown={keydownHandler}
      value={value}
    />
  );
}

function OtpForm({ n }: { n: number }) {
  const [activeInput, setActiveInput] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (containerRef.current) {
        (
          containerRef.current.children[activeInput] as HTMLInputElement
        ).focus();
      }
    }
  }, [activeInput]);

  useEffect(() => {
    if (activeInput === n - 1) {
      setCanSubmit(true);
    }
  }, [activeInput]);

  return (
    <form>
      <div className={styles.container} ref={containerRef}>
        {Array(n)
          .fill(0)
          .map((_, i) => (
            <OtpInput setActiveInput={setActiveInput} n={n} key={i} />
          ))}
      </div>
      <button disabled={!canSubmit} type="submit">
        Submit
      </button>
    </form>
  );
}

export default OtpForm;
