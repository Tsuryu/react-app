import { CSSProperties, useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface IProductImage {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = "", className, style }: IProductImage) => {
  const { img: contextImage } = useContext(ProductContext);

  const imgToShow = img ? img : contextImage ? contextImage : noImage;

  return (
    <img
      src={imgToShow}
      alt="Product"
      style={style}
      className={`${styles.productImg} ${className}`}
    />
  );
};
