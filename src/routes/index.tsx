import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/errors/NotFound";
import LayoutUnauthorised from "../Layout/LayoutUnauthorised";
import MainLayoutAuthorised from "../Layout/MainLayoutAuthorised";
import ProtectedRoute from "../modules/auth/ProtectedRoute";
import { useRoutes } from "../hooks/useRoutes";

const Layout: React.FC = () => {
  const { ROUTES } = useRoutes();
  // const navigate = useNavigate();
  //TODO: Enhance Routes
  return (
    <Routes>
      <Route
        element={<Navigate to={ROUTES.dashboard.to()} replace />}
        path='/'
      />

      {/* Authorized Layout Routes */}
      <Route element={<MainLayoutAuthorised />}>
        <Route
          path={ROUTES.dashboard.path}
          element={
            <ProtectedRoute>{ROUTES.dashboard.component}</ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.employees.path}
          element={
            <ProtectedRoute>{ROUTES.employees.component}</ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.salaries.path}
          element={<ProtectedRoute>{ROUTES.salaries.component}</ProtectedRoute>}
        />
      </Route>

      {/* Unauthorised Layout Routes */}
      <Route element={<LayoutUnauthorised />}>
        <Route path={ROUTES.login.path} element={ROUTES.login.component} />
        <Route path={ROUTES.signup.path} element={ROUTES.signup.component} />
      </Route>

      {/* Catch-All Route for Not Found Page */}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default Layout;
