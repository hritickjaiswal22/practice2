import "./style.css";
import Small from "../../../public/min.jpg";
import Big from "../../../public/big.jpg";
import { useEffect, useState } from "react";

function LazyImage() {
  const [imgSrc, setImgSrc] = useState(Small);

  useEffect(() => {
    const image = new Image();
    image.src = Big;

    image.onload = () => {
      setImgSrc(Big);
    };
  }, []);

  return (
    <div className="imageBox">
      <img src={imgSrc} alt="" />
    </div>
  );
}

export default LazyImage;
