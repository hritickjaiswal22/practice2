import React, { useEffect, useRef, useState } from "react";

import styles from "./slider.module.css";
import Slide from "../slide";

type Props = {
  images: string[];
};

const Slider = ({ images }: Props) => {
  const [lefts, setLefts] = useState<Array<number>>([]);
  const count = useRef(0);

  function initialPosition() {
    const temp = [];

    for (let i = 0; i < images.length; i++) {
      temp.push(i * 100);
    }

    setLefts(temp);
  }

  useEffect(() => {
    initialPosition();
  }, [images]);

  function slideOver(sign: 1 | -1) {
    const temp = [...lefts];

    return temp.map((left) => left + sign * 100);
  }

  function nextSlide() {
    count.current++;

    if (count.current >= images.length) {
      initialPosition();
      count.current = 0;
    } else setLefts(slideOver(-1));
  }

  function prevSlide() {
    count.current--;

    if (count.current < 0) {
      const temp = [];
      for (let i = images.length - 1; i >= 0; i--) {
        temp.push(-1 * i * 100);
      }
      count.current = images.length - 1;
      setLefts(temp);
    } else setLefts(slideOver(1));
  }

  return (
    <>
      <main className={styles.container}>
        {images.map((image, i) => (
          <Slide imgSrc={image} key={i} left={lefts[i]} />
        ))}
      </main>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
    </>
  );
};

export default Slider;
