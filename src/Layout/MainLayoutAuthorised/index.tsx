import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

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
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          Payroll Assessment
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

// import React from "react";
// import { Outlet } from "react-router-dom";
// import { Container, Grid } from "@mantine/core";
// import { Sidebar } from "../Sidebar"; // Import the Sidebar component

// const MainLayout: React.FC = () => {
//   return (
//     <Container fluid>
//       <Grid>
//         <Grid.Col span={3} style={{ padding: 0 }}>
//           <Sidebar /> {/* Render Sidebar on the left */}
//         </Grid.Col>
//         <Grid.Col span={9} style={{ padding: "1rem" }}>
//           {/* Render the main content area */}
//           <Outlet />
//         </Grid.Col>
//       </Grid>
//     </Container>
//   );
// };

export default MainLayout;
