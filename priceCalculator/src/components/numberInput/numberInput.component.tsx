import styles from "./numberInput.module.css";

export interface NumberInputPropsTypes {
  value: number;
  changeHandler: (id: number, val: number) => void;
  id: number;
}

function NumberInputComponent({
  changeHandler,
  id,
  value,
}: NumberInputPropsTypes) {
  return (
    <input
      className={styles["input"]}
      onChange={(e) => changeHandler(id, Number(e.target.value))}
      value={value}
      min={0}
      type="number"
    />
  );
}

export default NumberInputComponent;
