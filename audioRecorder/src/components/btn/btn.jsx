import styles from "./btn.module.css";

function Btn({ children, clickHandler }) {
  return (
    <button className={styles.btn} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Btn;
