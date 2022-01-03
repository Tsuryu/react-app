import { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
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

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React app" />
            <ul>{navItems}</ul>
          </nav>
          <Routes>
            {pathItems}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
