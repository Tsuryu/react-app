import { lazy, LazyExoticComponent } from "react";
import { Page4 } from "../01-lazyload/pages/Page4";

type JSXComponent = () => JSX.Element;

export interface IRoute {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: IRoute[] = [
  {
    to: "/lazyload",
    path: "lazyload/*",
    Component: LazyLayout,
    name: "Lazy layout",
  },
  {
    to: "/page4",
    path: "page4",
    Component: Page4,
    name: "Page 4 - no lazy",
  },
];
