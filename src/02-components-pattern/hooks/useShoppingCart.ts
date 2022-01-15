import { useState } from "react";
import { IProduct } from "../interfaces/interfaces";
import {
  IOnChangeShoppingCartItem,
  IShoppingCartItem,
} from "../interfaces/interfaces";

export interface IUseShoppingCart {
  shoppingCart: { [key: string]: IShoppingCartItem };
  onProductCountChange: ({
    product,
    count,
  }: {
    product: IProduct;
    count: number;
  }) => void;
}

export const useShoppingCart = (): IUseShoppingCart => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: IShoppingCartItem;
  }>({});

  const onProductCountChange = ({
    product,
    count,
  }: IOnChangeShoppingCartItem) => {
    setShoppingCart((state) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = state;
        return rest;
      }

      return {
        ...state,
        [product.id]: { ...product, count },
      };
    });
  };

  return { shoppingCart, onProductCountChange };
};
