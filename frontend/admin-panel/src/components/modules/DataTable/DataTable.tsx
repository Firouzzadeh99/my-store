import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomPagination from "./Pagination";
 
 
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table className="table-auto" dir="rtl">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="text-right px-4 py-2"
                > 
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center h-[250px]">
                در حال بارگذاری...
              </TableCell>
            </TableRow>
          ) : data.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="text-right px-4 py-4"
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center h-[250px]">
                هیچ داده‌ای یافت نشد.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="p-4 text-sm">
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          onNext={() => onPageChange(currentPage + 1)}
          onPrevious={() => onPageChange(currentPage - 1)}
        />
      </div>
    </div>
  );
}