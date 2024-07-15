import { ActionIcon, Group, Tooltip } from "@mantine/core";
import Table from "../../../components/table";
import { IconEdit, IconEye } from "@tabler/icons-react";
import { useIntl } from "react-intl";
import { EmployeesWrapper } from "./styles";
import Header from "./components/sectionHeader";

function Employees() {
  const EmployeesList = [
    {
      id: 1,
      staff_id: "STF-001",
      joining_date: "17-05-2024",
      name: "John Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: "Admin",
      basic_salary: "$17,500",
      salary_allowance: "$2,000",
      status: "Active",
    },
    {
      id: 2,
      staff_id: "STF-001",
      joining_date: "17-05-2024",
      name: "Jane Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: "Employee",
      basic_salary: "$17,500",
      salary_allowance: "$2,000",
      status: "Inactive",
    },
    {
      id: 3,
      staff_id: "STF-001",
      joining_date: "17-05-2024",
      name: "Jane Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: "Employee",
      basic_salary: "$17,500",
      salary_allowance: "$2,000",
      status: "Inactive",
    },
    {
      id: 4,
      staff_id: "STF-001",
      joining_date: "17-05-2024",
      name: "Jane Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: "Employee",
      basic_salary: "$17,500",
      salary_allowance: "$2,000",
      status: "Inactive",
    },
    {
      id: 5,
      staff_id: "STF-001",
      joining_date: "17-05-2024",
      name: "Jane Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: "Employee",
      basic_salary: "$17,500",
      salary_allowance: "$2,000",
      status: "Inactive",
    },
    {
      id: 6,
      staff_id: "STF-001",
      joining_date: "17-05-2024",
      name: "Jane Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: "Employee",
      basic_salary: "$17,500",
      salary_allowance: "$2,000",
      status: "Inactive",
    },
    {
      id: 7,
      staff_id: "STF-001",
      joining_date: "17-05-2024",
      name: "Jane Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: "Employee",
      basic_salary: "$17,500",
      salary_allowance: "$2,000",
      status: "Inactive",
    },
    {
      id: 8,
      staff_id: "STF-001",
      joining_date: "17-05-2024",
      name: "Jane Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: "Employee",
      basic_salary: "$17,500",
      salary_allowance: "$2,000",
      status: "Inactive",
    },
    {
      id: 9,
      staff_id: "STF-001",
      joining_date: "17-05-2024",
      name: "Jane Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: "Employee",
      basic_salary: "$17,500",
      salary_allowance: "$2,000",
      status: "Inactive",
    },
    {
      id: 10,
      staff_id: "STF-001",
      joining_date: "17-05-2024",
      name: "Jane Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: "Employee",
      basic_salary: "$17,500",
      salary_allowance: "$2,000",
      status: "Inactive",
    },
  ];

  const { formatMessage } = useIntl();

  return (
    <EmployeesWrapper>
      <Header />
      <Table
        records={
          EmployeesList as {
            id: number;
            staff_id: string;
            joining_date: string;
            name: string;
            email: string;
            phone: string;
            role: string;
            basic_salary: string;
            salary_allowance: string;
            status: string;
          }[]
        }
        highlightOnHover
        columns={[
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
            title: "Joining Date",
            accessor: "joining_date",
            render: (record) => <span>{record.joining_date}</span>,
          },
          {
            title: "Email",
            accessor: "email",
            render: (record) => <span>{record.email}</span>,
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
            accessor: "actions",
            title: "Actions",
            render: (record) => (
              <Group>
                {
                  <Tooltip label={formatMessage({ id: "edit" })}>
                    <ActionIcon
                      className='ActionIcon'
                      onClick={() => {
                        console.log("edit", record);
                      }}
                    >
                      <IconEdit />
                    </ActionIcon>
                  </Tooltip>
                }
                {
                  <Tooltip label={formatMessage({ id: "view" })}>
                    <ActionIcon
                      className='ActionIcon'
                      onClick={() => {
                        console.log("view");
                      }}
                    >
                      <IconEye />
                    </ActionIcon>
                  </Tooltip>
                }
              </Group>
            ),
          },
        ]}
        totalRecords={EmployeesList.length}
        recordsPerPage={10}
        page={1}
        noRecordsIcon={<></>}
        noRecordsText=' '
        onPageChange={(p) => console.log(p)}
        recordsPerPageOptions={[10, 20, 30]}
      />
    </EmployeesWrapper>
  );
}

export default Employees;
