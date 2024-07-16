import { ActionIcon, Button, Group, Tooltip } from "@mantine/core";
import Table from "../../../../components/table";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { useIntl } from "react-intl";
import { EmployeesWrapper } from "./styles";
import Header from "./components/sectionHeader";
import { useState } from "react";
import AlertPopup from "components/alertPopup";
import { toast } from "react-toastify";

export interface IEmployee {
  id: number;
  staff_id: string;
  joining_date: string;
  name: string;
  email: string;
  phone: string;
  role: string[];
  basic_salary: string;
  salary_allowance: string;
  status: string;
}

function Employees() {
  const EmployeesList: IEmployee[] = [
    {
      id: 1,
      staff_id: "STF-001",
      joining_date: "17-05-2024",
      name: "John Doe",
      email: "jon@gmail.com",
      phone: "08012345678",
      role: ["Admin"],
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
      role: ["Employee"],
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
      role: ["Employee"],
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
      role: ["Employee"],
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
      role: ["Employee"],
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
      role: ["Employee"],
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
      role: ["Employee"],
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
      role: ["Employee"],
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
      role: ["Employee"],
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
      role: ["Employee"],
      basic_salary: "$17,500",
      salary_allowance: "$2,000",
      status: "Inactive",
    },
  ];

  const { formatMessage } = useIntl();
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);

  const deleteRecords = async () => {
    console.log("deleteRecords");
    toast.success(formatMessage({ id: "employee/s_deleted_successfully" }));
    setShowDeleteAlert(false);
  };

  return (
    <EmployeesWrapper>
      <AlertPopup
        onClose={() => setShowDeleteAlert(!showDeleteAlert)}
        opened={showDeleteAlert}
        title={formatMessage({ id: "delete" })}
        description={formatMessage({
          id: "are_you_sure_you_want_to_delete_these_employee/s",
        })}
        Footer={
          <>
            <Button
              variant='filled'
              radius={"lg"}
              size='xl'
              onClick={() => {
                setShowDeleteAlert(false);
                deleteRecords();
              }}
            >
              {formatMessage({ id: "yes" })}
            </Button>

            <Button
              variant='outline'
              radius={"lg"}
              size='xl'
              onClick={() => {
                setShowDeleteAlert(false);
              }}
            >
              {formatMessage({ id: "no" })}
            </Button>
          </>
        }
      />
      <Header />
      <Table
        records={EmployeesList as IEmployee[]}
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
                  <Tooltip label={formatMessage({ id: "view" })}>
                    <ActionIcon
                      className='ActionIcon'
                      onClick={() => {
                        console.log("view");
                      }}
                      variant='transparent'
                    >
                      <IconEye />
                    </ActionIcon>
                  </Tooltip>
                }
                {
                  <Tooltip label={formatMessage({ id: "edit" })}>
                    <ActionIcon
                      className='ActionIcon'
                      onClick={() => {
                        console.log("edit", record);
                      }}
                      variant='transparent'
                    >
                      <IconEdit />
                    </ActionIcon>
                  </Tooltip>
                }
                {
                  <Tooltip label={formatMessage({ id: "delete" })}>
                    <ActionIcon
                      className='ActionIcon'
                      onClick={() => {
                        setShowDeleteAlert(true);
                      }}
                      variant='transparent'
                    >
                      <IconTrash />
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
