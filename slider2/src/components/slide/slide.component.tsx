import styles from "./slide.module.css";

type Props = {
  imgSrc: string;
  left: number;
};

const Slide = ({ imgSrc, left }: Props) => {
  return (
    <div className={styles.slide} style={{ left: `${left}%` }}>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default Slide;
