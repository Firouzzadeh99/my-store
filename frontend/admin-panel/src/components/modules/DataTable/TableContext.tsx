import React, { createContext, useState, useContext } from "react";

import {
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  ExpandedState,
} from "@tanstack/react-table";

interface TableContextType {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  rowPerPage: number;
  setRowPerPage: React.Dispatch<React.SetStateAction<number>>;
  sorting: SortingState;
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
  columnFilters: ColumnFiltersState;
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
  columnVisibility: VisibilityState;
  setColumnVisibility: React.Dispatch<React.SetStateAction<VisibilityState>>;
  expanded: ExpandedState;
  setExpanded: React.Dispatch<React.SetStateAction<ExpandedState>>;
}

const TableContext = createContext<TableContextType | undefined>(undefined);

function TableProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowPerPage, setRowPerPage] = useState<number>(15);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [expanded, setExpanded] = useState<ExpandedState>({});

  return (
    <TableContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        rowPerPage,
        setRowPerPage,
        sorting,
        setSorting,
        columnFilters,
        setColumnFilters,
        columnVisibility,
        setColumnVisibility,
        expanded,
        setExpanded,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider");
  }
  return context;
};

export default TableProvider;
