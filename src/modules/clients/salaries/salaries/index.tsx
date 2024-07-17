import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCurrencyDollar } from "@tabler/icons-react";
import Table from "components/table";
import { ISalary, SalaryList } from "data";
import { MonthPickerInput } from "@mantine/dates";
import { SalariesWrapper } from "./styles";
import Header from "./components/sectionHeader";
import { useIntl } from "react-intl";

function Salaries() {
  const { formatMessage } = useIntl();
  return (
    <SalariesWrapper>
      <Header />
      <Table
        records={SalaryList as ISalary[]}
        highlightOnHover
        columns={[
          {
            title: formatMessage({ id: "salary_period" }),
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
            title: formatMessage({ id: "staff_id" }),
            accessor: "staff_id",
            render: (record) => <span>{record.staff_id}</span>,
          },
          {
            title: formatMessage({ id: "name" }),
            accessor: "name",
            render: (record) => <span>{record.name}</span>,
          },
          {
            title: formatMessage({ id: "basic_salary" }),
            accessor: "basic_salary",
            render: (record) => <span>{record.basic_salary}</span>,
          },
          {
            title: formatMessage({ id: "salary_allowance" }),
            accessor: "salary_allowance",
            render: (record) => <span>{record.salary_allowance}</span>,
          },
          {
            title: formatMessage({ id: "salary_additions" }),
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
            title: formatMessage({ id: "salary_deductions" }),
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
            title: formatMessage({ id: "total_salary" }),
            accessor: "total",
            render: (record) => <span>{record.total}</span>,
          },
          {
            title: formatMessage({ id: "end_of_service_(gratuity)" }),
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
