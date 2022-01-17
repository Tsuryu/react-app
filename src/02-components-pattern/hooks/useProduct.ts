import { useCallback, useEffect, useRef, useState } from "react";
import {
  IOnChangeShoppingCartItem,
  IProduct,
  IProductCardInitialValues,
} from "../interfaces/interfaces";

export interface UseProduct {
  counter: number;
  increaseBy: (value: number) => void;
  maxCount?: number;
  isMaxReached: boolean;
  reset: () => void;
}

export interface IUseProduct {
  product: IProduct;
  onChange?: (args: IOnChangeShoppingCartItem) => void;
  value?: number;
  initialValues?: IProductCardInitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: IUseProduct): UseProduct => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = useCallback(
    (value: number) => {
      const newValue = Math.max(counter + value, 0);
      if ((initialValues?.maxCount || 0) < counter + value) return;
      setCounter(newValue);
      onChange?.({ product, count: newValue });
    },
    [counter, initialValues?.maxCount, onChange, product]
  );

  const reset = () => setCounter(initialValues?.count || value);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    isMaxReached: initialValues?.maxCount === counter,
    reset,
  };
};
