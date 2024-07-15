import {
  DataTable,
  DataTableColumn,
  DataTableProps,
  DataTableSortStatus,
} from "mantine-datatable";
import { ReactNode, useMemo } from "react";
import { useIntl } from "react-intl";
import { TableWrapper } from "./styles";

type TProps = {
  textSelectionDisabled?: boolean;
  withBorder?: boolean;
  page?: number;
  noRecordsText?: ReactNode;
  className?: string;
  paginationColor?: string;
  height?: number | string;
  customModule?: JSX.Element;
};

export default function Table<
  T extends object & { isRecordActionsHidden?: boolean }
>({
  columns,
  borderRadius = "16px",
  verticalSpacing = "md",
  withBorder = true,
  sortStatus,
  selectedRecords,
  customLoader,
  emptyState,
  totalRecords = 10,
  page,
  recordsPerPage,
  recordsPerPageOptions,
  onPageChange,
  onRecordsPerPageChange,
  height = "75vh",
  noRecordsText,
  className,
  paginationColor,
  customModule,
  textSelectionDisabled = true,
  ...rest
}: TProps &
  Omit<DataTableProps<T>, "withBorder" | "noRecordsText" | "groups">) {
  const { formatMessage } = useIntl();
  const tableColumns: DataTableColumn<T>[] = useMemo(() => {
    if (!columns) return [] as DataTableColumn<T>[];
    return columns.map((column) => ({
      ...column,
      title:
        typeof column.title === "string" ? <>{column.title}</> : column.title,
    })) as DataTableColumn<T>[];
  }, [columns]);

  return (
    <TableWrapper>
      {customModule && <>{customModule}</>}
      <DataTable
        {...rest}
        withTableBorder
        shadow='xl'
        withColumnBorders
        horizontalSpacing='xs'
        verticalAlign='center'
        striped
        columns={tableColumns}
        textSelectionDisabled={textSelectionDisabled}
        highlightOnHover
        height={height}
        borderRadius={customModule ? borderRadius : "16px"}
        verticalSpacing={verticalSpacing}
        page={page as number}
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage as number}
        onPageChange={onPageChange as (page: number) => void}
        paginationText={() => null}
        recordsPerPageOptions={recordsPerPageOptions as number[]}
        onRecordsPerPageChange={
          onRecordsPerPageChange as (recordsPerPage: number) => void
        }
        sortStatus={sortStatus as DataTableSortStatus}
        selectedRecords={selectedRecords as T[]}
        customLoader={customLoader as undefined}
        emptyState={emptyState as undefined}
        noRecordsText={
          noRecordsText
            ? (noRecordsText as string)
            : formatMessage({ id: "no_data" })
        }
      />
    </TableWrapper>
  );
}
