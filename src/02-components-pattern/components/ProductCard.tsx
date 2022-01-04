import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { IProductCardProps, IProductContext } from "../interfaces/interfaces";

export const ProductContext = createContext({} as IProductContext);
const { Provider } = ProductContext;

export const ProductCard = ({
  id,
  title,
  img,
  children,
}: IProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, title, img, id }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
