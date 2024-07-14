import Table from "../../../components/table";

function Employees() {
  return (
    <>
      <Table
        columns={[
          {
            title: "Name",
            accessor: "name",
            render: (record) => <span>{record.name}</span>,
          },
          {
            title: "Email",
            accessor: "email",
            render: (record) => <span>{record.email}</span>,
          },
          {
            title: "Phone",
            accessor: "phone",
            render: (record) => <span>{record.phone}</span>,
          },
          {
            title: "Role",
            accessor: "role",
            render: (record) => <span>{record.role}</span>,
          },
          {
            title: "Status",
            accessor: "status",
            render: (record) => <span>{record.status}</span>,
          },
        ]}
        records={[
          {
            name: "John Doe",
            email: "",
            phone: "08012345678",
            role: "Admin",
            status: "Active",
          },
          {
            name: "Jane Doe",
            email: "",
            phone: "08012345678",
            role: "Employee",
            status: "Inactive",
          },
        ]}
        totalRecords={2}
        recordsPerPage={10}
        page={1}
        onPageChange={() => {}}
        onRecordsPerPageChange={() => {}}
        noRecordsText='No   records found '
      />
    </>
  );
}

export default Employees;
