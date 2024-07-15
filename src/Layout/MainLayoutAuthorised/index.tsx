import { ActionIcon, AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { ActionToggle } from "../ActionToggle";

function MainLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='md' align='center' justify='space-between' w='100%'>
          <Group
            align='center'
            justify='center'
            gap='md'
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom='sm'
              size='sm'
            />
            Payroll Assessment
          </Group>
          <Group align='center' justify='center' gap='md'>
            <ActionToggle />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md'>
        <Navbar opened={opened} toggle={toggle} />
      </AppShell.Navbar>
      <AppShell.Main>
        {/* Render the main content area */}
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer p='md'>
        {/* // copyright and author  */}
        <Group align='center' justify='center' h='100%'>
          <span>© 2024 Mohammed Dawood</span>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
}

export default MainLayout;
