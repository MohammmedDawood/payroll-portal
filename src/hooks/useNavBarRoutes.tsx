import { useMemo } from "react";
import { useIntl } from "react-intl";

// Clients Module
import DashboardPage from "pages/clients/dashboard";
import EmployeesPage from "pages/clients/employees/employees";
import SalariesPage from "pages/clients/salaries/salaries";
import TransactionsPage from "pages/clients/transactions";
import {
  IconCashBanknote,
  IconGauge,
  IconTransfer,
  IconUsers,
} from "@tabler/icons-react";

export interface INavBarRoute<T = any> {
  id: string;
  label: string;
  description: string;
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

export function useNavBarRoutes() {
  const { formatMessage } = useIntl();

  const NAVBARROUTES: INavBarRoute[] = useMemo(() => {
    const navbarroutes: INavBarRoute[] = [
      // Clients Module
      {
        id: "dashboard",
        label: "Dashboard",
        description: "Welcone page",
        component: <DashboardPage />,
        path: "/client/dashboard",
        privileges: true,
        iconSideNav: <IconGauge size='1rem' stroke={1.5} />,
        to: () => "/client/dashboard",
        fullTitle: () => [{ name: formatMessage({ id: "dashboard" }) }],
        title: () => formatMessage({ id: "dashboard" }),
        sidebarTitle: () => formatMessage({ id: "dashboard" }),
      },
      {
        id: "employees",
        label: "Employees",
        description: "Manage your employees",
        component: <EmployeesPage />,
        path: "/client/employees",
        privileges: true,
        iconSideNav: <IconUsers size='1rem' stroke={1.5} />,
        to: () => "/client/employees",
        fullTitle: () => [{ name: formatMessage({ id: "employees" }) }],
        title: () => formatMessage({ id: "employees" }),
        sidebarTitle: () => formatMessage({ id: "employees" }),
      },
      {
        id: "salaries",
        label: "Salaries",
        description: "Manage salaries",
        component: <SalariesPage />,
        path: "/client/salaries",
        privileges: true,
        iconSideNav: <IconCashBanknote size='1rem' stroke={1.5} />,
        to: () => "/client/salaries",
        fullTitle: () => [{ name: formatMessage({ id: "salaries" }) }],
        title: () => formatMessage({ id: "salaries" }),
        sidebarTitle: () => formatMessage({ id: "salaries" }),
      },
      {
        id: "transactions",
        label: "Transactions",
        description: "View transactions history",
        component: <TransactionsPage />,
        path: "/client/transactions",
        privileges: true,
        iconSideNav: <IconTransfer size='1rem' stroke={1.5} />,
        to: () => "/client/transactions",
        fullTitle: () => [{ name: formatMessage({ id: "transactions" }) }],
        title: () => formatMessage({ id: "transactions" }),
        sidebarTitle: () => formatMessage({ id: "transactions" }),
      },
    ];
    return navbarroutes;
  }, [formatMessage]);

  return { NAVBARROUTES };
}
