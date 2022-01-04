import { ReactElement } from "react";

export interface IProductCardProps {
  id: string;
  title: string;
  img?: string;
  children?: ReactElement | ReactElement[];
}

export interface IProductContext {
  counter: number;
  increaseBy: (value: number) => void;
  id: string;
  title: string;
  img?: string;
}
