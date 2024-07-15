import { ActionIcon, Grid, Group, Menu, Tooltip } from "@mantine/core";
import { IconEdit, IconEye, IconPlus } from "@tabler/icons-react";
import { useIntl } from "react-intl";
import { HeaderWrapper } from "./styles";
import { useRoutes } from "../../../../../hooks/useRoutes";
import { useNavigate } from "react-router-dom";
import SectionName from "../../../../../components/sectionName";
import CustomButton from "../../../../../components/customButton";

function Header() {
  const { formatMessage } = useIntl();
  const { ROUTES } = useRoutes();
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Grid gutter='24px'>
        <Grid.Col span={3}>
          <SectionName
            icon={ROUTES.employees.icon}
            title={ROUTES.employees.title()}
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
            <CustomButton
              withBG
              label={formatMessage({ id: "add_employee" })}
              customPadding='8px 24px'
              withIcone
              customIcon={<IconPlus />}
            />
          </div>
        </Grid.Col>
      </Grid>
    </HeaderWrapper>
  );
}

export default Header;
