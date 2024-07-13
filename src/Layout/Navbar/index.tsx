import { Box, NavLink } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { useNavBarRoutes } from "../../hooks/useNavBarRoutes";

export default function Navbar() {
  //use params to get the active index
  const { NAVBARROUTES } = useNavBarRoutes();
  console.log(NAVBARROUTES);

  const { pathname } = useLocation();
  console.log(pathname);

  // function isLinkActive(paths: string | string[]): boolean {
  //   if (Array.isArray(paths)) {
  //     return paths.some((path) => isLinkActive(path));
  //   }
  //   return matchPath(paths, pathname) !== null ? true : false;
  // }

  const items = NAVBARROUTES.map((item) => (
    <NavLink
      // href='#required-for-focus'
      // key={item.label}
      // active={index === active}
      // label={item.label}
      // description={item.description}
      // leftSection={<item.icon size='1rem' stroke={1.5} />}
      // onClick={() => setActive(index)}
      href={item.to()}
      key={item.id}
      active={pathname === item.path}
      label={item.label}
      description={item.description}
      leftSection={item.iconSideNav}
    />
  ));

  return <Box>{items}</Box>;
}
