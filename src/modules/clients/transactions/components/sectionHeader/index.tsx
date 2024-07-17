import { Grid } from "@mantine/core";
import { HeaderWrapper } from "./styles";
import { useRoutes } from "hooks/useRoutes";
import SectionName from "components/sectionName";

function Header() {
  const { ROUTES } = useRoutes();

  return (
    <HeaderWrapper>
      <Grid gutter='24px'>
        <Grid.Col span={3}>
          <SectionName
            icon={ROUTES.transactions.icon}
            title={ROUTES.transactions.title()}
          />
        </Grid.Col>
        <Grid.Col
          span={9}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        ></Grid.Col>
      </Grid>
    </HeaderWrapper>
  );
}

export default Header;
