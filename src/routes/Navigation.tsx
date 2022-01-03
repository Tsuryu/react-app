import { Suspense } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
import { getNavigationElements } from "./utils";

export const Navigation = () => {
  const { navItems, pathItems } = getNavigationElements(routes);

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
