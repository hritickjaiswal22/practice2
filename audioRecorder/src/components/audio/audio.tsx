import React from "react";

import styles from "./audio.module.css";

function Audio({ src }) {
  return (
    <div className={styles["audio-container"]}>
      <audio className={styles["audio"]} controls={true} src={src} />
    </div>
  );
}

export default Audio;
