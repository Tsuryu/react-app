import { CSSProperties, ReactElement } from "react";

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IProductCardProps extends IProduct {
  children?:
    | ReactElement
    | ReactElement[]
    | ((props: IProductCardChildrenProps) => JSX.Element);
  className?: string;
  style?: CSSProperties;
  onChange?: (args: IOnChangeShoppingCartItem) => void;
  value?: number;
  initialValues?: IProductCardInitialValues;
}

export interface IProductContext {
  counter: number;
  increaseBy: (value: number) => void;
  id: string;
  title: string;
  img?: string;
  maxCount?: number;
}

export interface IOnChangeShoppingCartItem {
  count: number;
  product: IProduct;
}

export interface IShoppingCartItem extends IProductCardProps {
  count: number;
}

export interface IProductCardInitialValues {
  count?: number;
  maxCount?: number;
}

export interface IProductCardChildrenProps {
  count: number;
  isMaxReached: boolean;
  maxCount?: number;
  product: IProduct;
  increaseBy: (value: number) => void;
  reset: () => void;
}
