import React, { ReactNode, useEffect, useState } from "react";

import styles from "./passwordChecker.module.css";

interface PropTypes {
  getStrength: (str: string) => number;
  children: ReactNode;
}

function PasswordChecker(props: PropTypes) {
  const { getStrength, children } = props;
  const [value, setValue] = useState("");
  const [, setStrength] = useState(0);

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  useEffect(() => {
    setStrength(getStrength(value));
  }, [value]);

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        min={6}
        max={32}
        onChange={changeHandler}
      />
      {children}
    </div>
  );
}

export default PasswordChecker;
