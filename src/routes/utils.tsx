import { NavLink, Route } from "react-router-dom";
import { IRoute } from "./routes";

export const getNavigationElements = (
  routes: IRoute[]
): { navItems: JSX.Element[]; pathItems: JSX.Element[] } => {
  const navItems: JSX.Element[] = [];
  const pathItems: JSX.Element[] = [];

  routes.forEach(({ to, name, path, Component }) => {
    navItems.push(
      <li key={to}>
        <NavLink
          to={to}
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          {name}
        </NavLink>
      </li>
    );
    pathItems.push(<Route path={path} element={<Component />} key={to} />);
  });

  return { navItems, pathItems };
};
