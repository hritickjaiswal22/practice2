import React, { ReactNode } from "react";

import styles from "./price.module.css";

interface PriceComponentPropTypes {
  children: ReactNode;
}

function PriceComponent(props: PriceComponentPropTypes) {
  const { children } = props;

  return <div className={styles["price-container"]}>{children}</div>;
}

export default PriceComponent;
