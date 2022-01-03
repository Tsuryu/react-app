import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { IRoute } from "../../routes/routes";
import { getNavigationElements } from "../../routes/utils";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const routes: IRoute[] = [
  {
    to: "lazy1",
    path: "lazy1",
    Component: LazyPage1,
    name: "Lazy 1",
  },
  {
    to: "lazy2",
    path: "lazy2",
    Component: LazyPage2,
    name: "Lazy 2",
  },
  {
    to: "lazy3",
    path: "lazy3",
    Component: LazyPage3,
    name: "Lazy 3",
  },
];

export const LazyLayout = () => {
  const { navItems, pathItems } = getNavigationElements(routes);
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>{navItems}</ul>

      <Routes>
        {pathItems}
        {/* <Route path="*" element={<div>NOT FOUND</div>} /> */}
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
