import { BarChart, DonutChart } from "@mantine/charts";
import { Card, Grid, Group, Badge, Avatar, Text, Button } from "@mantine/core";
import { IconWallet } from "@tabler/icons-react";
import { useRoutes } from "hooks/useRoutes";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { DashboardWrapper } from "./styles";

export const data = [
  { month: "January", WPS: 1200, Allownces: 900, Non_WPS: 200 },
  { month: "February", WPS: 1900, Allownces: 1200, Non_WPS: 400 },
  { month: "March", WPS: 400, Allownces: 1000, Non_WPS: 200 },
  { month: "April", WPS: 1000, Allownces: 200, Non_WPS: 800 },
  { month: "May", WPS: 800, Allownces: 1400, Non_WPS: 1200 },
  { month: "June", WPS: 750, Allownces: 600, Non_WPS: 1000 },
];
export const gaugeData = [
  { name: "USA", value: 400, color: "indigo.6" },
  { name: "India", value: 300, color: "yellow.6" },
  { name: "Japan", value: 100, color: "teal.6" },
  { name: "Other", value: 200, color: "gray.6" },
];

function Dashboard() {
  const navigate = useNavigate();
  const { ROUTES } = useRoutes();
  const { formatMessage } = useIntl();

  return (
    <DashboardWrapper>
      <Grid>
        <Grid.Col
          span={{
            base: 12,
            md: 3,
            sm: 12,
          }}
        >
          <Card shadow='sm' padding='xs' radius='md' withBorder>
            <Group justify='space-between' my='md' mb='xs'>
              <Group justify='center' align='center' w={"100%"}>
                <Badge>
                  {formatMessage({
                    id: "available_balance",
                  })}
                </Badge>
              </Group>
              <Group justify='space-between' mb='xs'>
                <Avatar radius='md'>
                  <IconWallet size='1.5rem' />
                </Avatar>
                <Text size='xl' fw={700}>
                  {" "}
                  516.000 AED
                </Text>
              </Group>
              <Group justify='center' align='center' w={"100%"}>
                <Button
                  variant='outline'
                  size='xs'
                  radius='md'
                  onClick={() => {
                    console.log("view_transactions_history");
                    navigate(ROUTES.transactions.to());
                  }}
                >
                  {formatMessage({
                    id: "view_transactions_history",
                  })}
                </Button>
              </Group>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col
          span={{
            base: 12,
            md: 9,
            sm: 12,
          }}
          className='containerCenter'
        >
          <Card shadow='sm' padding='xs' radius='md' withBorder>
            <Grid>
              <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                <DonutChart data={gaugeData} startAngle={180} endAngle={0} />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                <DonutChart data={gaugeData} startAngle={180} endAngle={0} />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                <DonutChart data={gaugeData} startAngle={180} endAngle={0} />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                <DonutChart data={gaugeData} startAngle={180} endAngle={0} />
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
      </Grid>

      <Grid.Col span={12}>
        <Card shadow='sm' padding='xs' radius='md' withBorder>
          <BarChart
            h={300}
            data={data}
            dataKey='month'
            withLegend
            series={[
              { name: "WPS", color: "violet.6" },
              { name: "Allownces", color: "blue.6" },
              { name: "Non_WPS", color: "teal.6" },
            ]}
          />
        </Card>
      </Grid.Col>
    </DashboardWrapper>
  );
}

export default Dashboard;
