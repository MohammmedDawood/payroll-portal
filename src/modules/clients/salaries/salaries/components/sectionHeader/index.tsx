import { Button, Grid } from "@mantine/core";
import { IconProgressCheck } from "@tabler/icons-react";
import { useIntl } from "react-intl";
import { HeaderWrapper } from "./styles";
import { useRoutes } from "hooks/useRoutes";
import SectionName from "components/sectionName";

function Header() {
  const { formatMessage } = useIntl();
  const { ROUTES } = useRoutes();

  return (
    <HeaderWrapper>
      <Grid gutter='24px'>
        <Grid.Col span={3}>
          <SectionName
            icon={ROUTES.salaries.icon}
            title={ROUTES.salaries.title()}
          />
        </Grid.Col>
        <Grid.Col
          span={9}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div className='containerButtons'>
            <Button
              variant='filled'
              rightSection={<IconProgressCheck />}
              radius={"xl"}
              onClick={() => console.log("proceed_salaries_payment")}
            >
              {formatMessage({ id: "proceed_salaries_payment" })}
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </HeaderWrapper>
  );
}

export default Header;
