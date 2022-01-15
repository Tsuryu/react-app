import { CSSProperties, ReactElement } from "react";

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IProductCardProps extends IProduct {
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: IOnChangeShoppingCartItem) => void;
  value?: number;
}

export interface IProductContext {
  counter: number;
  increaseBy: (value: number) => void;
  id: string;
  title: string;
  img?: string;
}

export interface IOnChangeShoppingCartItem {
  count: number;
  product: IProduct;
}

export interface IShoppingCartItem extends IProductCardProps {
  count: number;
}
