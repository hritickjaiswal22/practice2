import React from "react";

import styles from "./autoProgress.module.css";

function AutoProgress() {
  return (
    <div className={styles["container"]}>
      <div className={styles["progress"]}></div>
    </div>
  );
}

export default AutoProgress;
