import { ActionIcon, Button, Group, Tooltip } from "@mantine/core";
import Table from "components/table";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { useIntl } from "react-intl";
import { EmployeesWrapper } from "./styles";
import Header from "./components/sectionHeader";
import { useState } from "react";
import AlertPopup from "components/alertPopup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRoutes } from "hooks/useRoutes";
import { EmployeesList, IEmployee } from "data";

function Employees() {
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);
  const navigate = useNavigate();
  const { ROUTES } = useRoutes();
  const { formatMessage } = useIntl();

  /* --------------------------------- functions --------------------------------- */
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
            title: formatMessage({ id: "joining_date" }),
            accessor: "joining_date",
            render: (record) => <span>{record.joining_date}</span>,
          },
          {
            title: formatMessage({ id: "email" }),
            accessor: "email",
            render: (record) => <span>{record.email}</span>,
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
            accessor: "actions",
            title: formatMessage({ id: "actions" }),
            render: (record) => (
              <Group>
                {
                  <Tooltip label={formatMessage({ id: "view" })}>
                    <ActionIcon
                      className='ActionIcon'
                      onClick={() => {
                        navigate(
                          ROUTES.viewEmployee.to({
                            employeeId: record.staff_id,
                          })
                        );
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
                        navigate(
                          ROUTES.editEmployee.to({
                            employeeId: record.staff_id,
                          })
                        );
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
