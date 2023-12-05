import styles from "./progressBar.module.css";

interface PropTypes {
  progress: number;
  getBgColor: (val: number) => "weak" | "moderate" | "strong";
}

function ProgressBar(props: PropTypes) {
  const { progress, getBgColor } = props;
  const bg = getBgColor(progress);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.progress} ${styles[bg]}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
