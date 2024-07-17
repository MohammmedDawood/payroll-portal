import { useForm } from "@mantine/form";
import {
  NumberInput,
  TextInput,
  Button,
  Grid,
  MultiSelect,
  Group,
  Box,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconCurrencyDollar } from "@tabler/icons-react";
import { useIntl } from "react-intl";
import { useRoutes } from "hooks/useRoutes";
import { useNavigate } from "react-router-dom";

function ViewEmployee() {
  /* ----------------------------- Intl Provider ---------------------------- */
  const { formatMessage } = useIntl();
  /* ----------------------------- Hooks ---------------------------- */
  const navigate = useNavigate();
  const { ROUTES } = useRoutes();

  // use useForm hook to create form with initial values and validation functions
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      id: 1,
      staff_id: "STF-001",
      joining_date: new Date(),
      name: "John Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: ["Admin"],
      basic_salary: 17500,
      salary_allowance: 2000,
      status: "Active",
    },
  });

  return (
    <>
      <Box p='auto' m='lg'>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              mt='sm'
              label='Staff ID'
              placeholder='Staff ID'
              key={form.key("staff_id")}
              size='md'
              disabled
              {...form.getInputProps("staff_id")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <DateInput
              defaultValue={new Date()}
              mt='sm'
              label='Joining Date'
              placeholder='Joining Date'
              key={form.key("joining_date")}
              size='md'
              disabled
              {...form.getInputProps("joining_date")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              mt='sm'
              label='Name'
              placeholder='Name'
              key={form.key("name")}
              size='md'
              disabled
              {...form.getInputProps("name")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              mt='sm'
              label='Email'
              placeholder='Email'
              key={form.key("email")}
              size='md'
              disabled
              {...form.getInputProps("email")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <TextInput
              mt='sm'
              label='Phone'
              placeholder='Phone'
              key={form.key("phone")}
              size='md'
              disabled
              {...form.getInputProps("phone")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MultiSelect
              mt='sm'
              label='Role'
              placeholder='Role'
              key={form.key("role")}
              size='md'
              disabled
              {...form.getInputProps("role")}
              data={["Manager", "Admin", "Employee", "Engineer", "HR"]}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <NumberInput
              mt='sm'
              label='Basic Salary'
              placeholder='Basic Salary'
              min={0}
              max={999999}
              size='md'
              disabled
              key={form.key("basic_salary")}
              leftSection={<IconCurrencyDollar />}
              {...form.getInputProps("basic_salary")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <NumberInput
              mt='sm'
              label='Salary Allowance'
              placeholder='Salary Allowance'
              min={0}
              max={999999}
              size='md'
              disabled
              key={form.key("salary_allowance")}
              leftSection={<IconCurrencyDollar />}
              {...form.getInputProps("salary_allowance")}
            />
          </Grid.Col>
          <Group justify='flex-end' mt='md'>
            <Button
              type='button'
              mt='xl'
              size='md'
              variant='filled'
              radius='md'
              onClick={() => navigate(ROUTES.editEmployee.to())}
            >
              {formatMessage({ id: "edit" })}
            </Button>
          </Group>
        </Grid>
      </Box>
    </>
  );
}

export default ViewEmployee;
