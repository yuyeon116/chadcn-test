"use client";

import SortingButton from "@/components/ui/notice/SortingButton";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <SortingButton
          buttonText="Status"
          isSorted={column.getIsSorted()}
          toggleSorting={column.toggleSorting}
          clearSorting={column.clearSorting}
        />
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <SortingButton
          buttonText="Email"
          isSorted={column.getIsSorted()}
          toggleSorting={column.toggleSorting}
          clearSorting={column.clearSorting}
        />
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <SortingButton
          buttonText="Amount"
          clearSorting={column.clearSorting}
          toggleSorting={column.toggleSorting}
          isSorted={column.getIsSorted()}
        />
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("amount")}</div>
    ),
  },
];
