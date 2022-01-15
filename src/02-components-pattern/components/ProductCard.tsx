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
  className,
  style,
  value,
  onChange,
}: IProductCardProps) => {
  const product = {
    id,
    title,
    img,
  };
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, increaseBy, title, img, id }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
