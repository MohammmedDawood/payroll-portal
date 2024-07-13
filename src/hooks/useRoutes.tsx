import { useMemo } from "react";
import { useIntl } from "react-intl";

// Auth Module
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";

// Clients Module
import DashboardPage from "../pages/clients/dashboard";
import EmployeesPage from "../pages/clients/employees";
import SalariesPage from "../pages/clients/salaries";

export interface IRoute<T = any> {
  component: JSX.Element;
  path: string;
  icon?: JSX.Element;
  iconSideNav?: JSX.Element;
  privileges: true;
  to: (props?: T) => string;
  fullTitle: (props?: T) => { name: string; link?: string }[];
  title: () => string;
  sidebarTitle?: () => string;
}

export interface IRoutes {
  // Auth Module
  login: IRoute;
  signup: IRoute;

  // Clients Module
  dashboard: IRoute;
  employees: IRoute;
  salaries: IRoute;
}

export function useRoutes() {
  const { formatMessage } = useIntl();

  const ROUTES: IRoutes = useMemo(() => {
    const routes: IRoutes = {
      // Auth Module
      login: {
        component: <LoginPage />,
        path: "/auth/login",
        privileges: true,
        to: () => "/auth/login",
        fullTitle: () => [{ name: formatMessage({ id: "login" }) }],
        title: () => formatMessage({ id: "login" }),
        sidebarTitle: () => formatMessage({ id: "login" }),
      },
      signup: {
        component: <RegisterPage />,
        path: "/auth/signup",
        privileges: true,
        to: () => "/auth/signup",
        fullTitle: () => [{ name: formatMessage({ id: "signup" }) }],
        title: () => formatMessage({ id: "signup" }),
        sidebarTitle: () => formatMessage({ id: "signup" }),
      },

      // Clients Module
      dashboard: {
        component: <DashboardPage />,
        path: "/client/dashboard",
        privileges: true,
        to: () => "/client/dashboard",
        fullTitle: () => [{ name: formatMessage({ id: "dashboard" }) }],
        title: () => formatMessage({ id: "dashboard" }),
        sidebarTitle: () => formatMessage({ id: "dashboard" }),
      },
      employees: {
        component: <EmployeesPage />,
        path: "/client/employees",
        privileges: true,
        to: () => "/client/employees",
        fullTitle: () => [{ name: formatMessage({ id: "employees" }) }],
        title: () => formatMessage({ id: "employees" }),
        sidebarTitle: () => formatMessage({ id: "employees" }),
      },
      salaries: {
        component: <SalariesPage />,
        path: "/client/salaries",
        privileges: true,
        to: () => "/client/salaries",
        fullTitle: () => [{ name: formatMessage({ id: "salaries" }) }],
        title: () => formatMessage({ id: "salaries" }),
        sidebarTitle: () => formatMessage({ id: "salaries" }),
      },
    };
    return routes;
  }, [formatMessage]);

  return { ROUTES };
}
