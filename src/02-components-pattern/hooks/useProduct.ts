import { useCallback, useEffect, useRef, useState } from "react";
import { IOnChangeShoppingCartItem, IProduct } from "../interfaces/interfaces";

export interface UseProduct {
  counter: number;
  increaseBy: (value: number) => void;
}

export interface IUseProduct {
  product: IProduct;
  onChange?: (args: IOnChangeShoppingCartItem) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: IUseProduct): UseProduct => {
  const [counter, setCounter] = useState<number>(value);
  const isControlled = useRef(!!onChange);

  const increaseBy = useCallback(
    (value: number) => {
      if (isControlled.current) {
        return onChange!({ count: value, product });
      }
      const newValue = Math.max(counter + value, 0);
      setCounter(newValue);
      onChange?.({ product, count: newValue });
    },
    [counter, onChange, product]
  );

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
