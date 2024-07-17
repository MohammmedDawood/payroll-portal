// •	In the "Salaries" section, users can process salaries for their employees.
// •	A salary table displays a list of employees and their corresponding salary details.
// •	Users must specify the salary month and year for each employee salary processing.
// •	Employees without specified month and year details will be excluded from the session.
// •	The salary processing table shows the total salary amount to be paid for each employee.
// •	Users cannot modify the basic salary and allowances columns in the salary processing table and their values are according to what the employee record has.
// •	Users can adjust the additions and deductions columns in the salary table, affecting the total amount of the salary paid.
// •	During salary processing, users can flag salary payments as end-of-service (gratuity) payments if applicable.

import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCurrencyDollar } from "@tabler/icons-react";
import Table from "components/table";
import { ISalary, SalaryList } from "data";
import { MonthPickerInput } from "@mantine/dates";
import { SalariesWrapper } from "./styles";
import Header from "./components/sectionHeader";

function Salaries() {
  return (
    <SalariesWrapper>
      <Header />
      <Table
        records={SalaryList as ISalary[]}
        highlightOnHover
        columns={[
          {
            title: "Period",
            accessor: "period",
            render: (record) => {
              // Add input field to allow users to select the month
              return (
                <MonthPickerInput
                  placeholder='Month'
                  size='md'
                  value={record.period ?? null}
                  onChange={(value) => console.log(value)}
                />
              );
            },
          },
          {
            title: "Staff ID",
            accessor: "staff_id",
            render: (record) => <span>{record.staff_id}</span>,
          },
          {
            title: "Name",
            accessor: "name",
            render: (record) => <span>{record.name}</span>,
          },
          {
            title: "Basic Salary",
            accessor: "basic_salary",
            render: (record) => <span>{record.basic_salary}</span>,
          },
          {
            title: "Salary Allowance",
            accessor: "salary_allowance",
            render: (record) => <span>{record.salary_allowance}</span>,
          },
          {
            title: "Additions",
            accessor: "additions",
            render: (record) => {
              // Add input field to allow users to adjust the addition amount
              const form = useForm({
                initialValues: {
                  additions: record.additions,
                },
              });
              return (
                <form>
                  <TextInput
                    value={0}
                    leftSectionPointerEvents='none'
                    leftSection={<IconCurrencyDollar />}
                    key={form.key("additions")}
                    size='md'
                    {...form.getInputProps("additions")}
                    classNames={{ root: "input-root" }}
                  />
                </form>
              );
            },
          },
          {
            title: "Deductions",
            accessor: "deductions",
            render: (record) => {
              // Add input field to allow users to adjust the deduction amount
              const form = useForm({
                initialValues: {
                  deductions: record.deductions,
                },
              });
              return (
                <form>
                  <TextInput
                    value={0}
                    leftSectionPointerEvents='none'
                    leftSection={<IconCurrencyDollar />}
                    key={form.key("deductions")}
                    size='md'
                    {...form.getInputProps("deductions")}
                    classNames={{ root: "input-root" }}
                  />
                </form>
              );
            },
          },
          {
            title: "Total",
            accessor: "total",
            render: (record) => <span>{record.total}</span>,
          },
          {
            title: "End of Service (gratuity)",
            accessor: "end_of_service",
            render: (record) => (
              <span>{record.end_of_service ? "Yes" : "No"}</span>
            ),
          },
        ]}
        totalRecords={SalaryList.length}
        recordsPerPage={10}
        page={1}
        noRecordsIcon={<></>}
        noRecordsText=' '
        onPageChange={(p) => console.log(p)}
        recordsPerPageOptions={[10, 20, 30]}
      />
    </SalariesWrapper>
  );
}

export default Salaries;
