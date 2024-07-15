import { AppShell, Box, Burger, Grid, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { ActionToggle } from "../ActionToggle";

function MainLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: 60 }} footer={{ height: 60 }} padding='md'>
      <AppShell.Header>
        <Group h='100%' px='md' align='center' justify='space-between' w='100%'>
          <Group
            align='center'
            justify='center'
            gap='md'
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Payroll Assessment
          </Group>
          <Group align='center' justify='center' gap='md'>
            <ActionToggle />
          </Group>
        </Group>
      </AppShell.Header>

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
