import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface IProductTitle {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: IProductTitle) => {
  const { title: contextTitle } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : contextTitle}
    </span>
  );
};
