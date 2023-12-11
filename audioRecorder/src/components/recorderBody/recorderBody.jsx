import styles from "./recorderBody.module.css";

function RecorderBody({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default RecorderBody;
