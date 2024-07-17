import { TransactiionsWrapper } from "./styles";
import Table from "components/table";
import { ITransaction, TransactionList } from "data";
import Header from "./components/sectionHeader";

function Transactions() {
  return (
    <TransactiionsWrapper>
      <Header />
      <Table
        records={TransactionList as ITransaction[]}
        highlightOnHover
        columns={[
          {
            title: "Transaction ID",
            accessor: "transaction_id",
            render: (record) => <span>{record.transaction_id}</span>,
          },
          {
            title: "Staff ID",
            accessor: "staff_id",
            render: (record) => <span>{record.staff_id}</span>,
          },
          {
            title: "Transaction Date",
            accessor: "transaction_date",
            render: (record) => <span>{record.date}</span>,
          },
          {
            title: "Amount",
            accessor: "amount",
            render: (record) => <span>{record.amount}</span>,
          },
          {
            title: "Status",
            accessor: "status",
            render: (record) => <span>{record.status}</span>,
          },
          {
            title: "Reference",
            accessor: "reference",
            render: (record) => <span>{record.reference}</span>,
          },
          {
            title: "Transaction Type",
            accessor: "transaction_type",
            render: (record) => <span>{record.type}</span>,
          },
        ]}
        totalRecords={TransactionList.length}
        recordsPerPage={10}
        page={1}
        noRecordsIcon={<></>}
        noRecordsText=' '
        onPageChange={(p) => console.log(p)}
        recordsPerPageOptions={[10, 20, 30]}
      />
    </TransactiionsWrapper>
  );
}

export default Transactions;
