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
  initialValues,
}: IProductCardProps) => {
  const product = {
    id,
    title,
    img,
  };
  const { counter, increaseBy, maxCount, isMaxReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        title,
        img,
        id,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children instanceof Function
          ? children({
              count: counter,
              isMaxReached,
              maxCount: initialValues?.maxCount,
              product: {
                id,
                title,
                img,
              },
              increaseBy,
              reset,
            })
          : children}
      </div>
    </Provider>
  );
};
