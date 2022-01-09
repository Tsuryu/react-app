import { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductButtons = ({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
