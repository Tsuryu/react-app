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
    // opcion 1:
    // const newState = {
    //   ...shoppingCart,
    //   [product.id]: { ...product, count },
    // };
    // if (count === 0) {
    //   delete newState[product.id];
    // }
    // setShoppingCart(newState);

    // opcion 2:
    // const addOrUpdate = (state: { [key: string]: IShoppingCartItem }) => ({
    //   ...state,
    //   [product.id]: { ...product, count },
    // });

    // const remove = (state: { [key: string]: IShoppingCartItem }) =>
    //   Object.fromEntries(
    //     Object.entries(state).filter(([key, value]) =>
    //       key === product.id ? null : [key, value]
    //     )
    //   );

    // setShoppingCart((state) =>
    //   count > 0 ? addOrUpdate(state) : remove(state)
    // );

    // opcion 3:
    // setShoppingCart((state) => {
    //   if (count === 0) {
    //     const { [product.id]: toDelete, ...rest } = state;
    //     return rest;
    //   }

    //   return {
    //     ...state,
    //     [product.id]: { ...product, count },
    //   };
    // });

    // opcion manejando el estado aqui mismo
    setShoppingCart((state) => {
      const productInCart: IShoppingCartItem = state[product.id] || {
        ...product,
        count: 0,
      };
      productInCart.count += count;

      if (Math.max(productInCart.count, 0) > 0) {
        return {
          ...state,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = state;
      return rest;
    });
  };

  return { shoppingCart, onProductCountChange };
};
