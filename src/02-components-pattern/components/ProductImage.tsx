import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  const { img: contextImage } = useContext(ProductContext);

  const imgToShow = img ? img : contextImage ? contextImage : noImage;

  return <img src={imgToShow} alt="Product" className={styles.productImg} />;
};
