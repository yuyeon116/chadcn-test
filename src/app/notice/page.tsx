"use client";
import { Button } from "@/components/ui/button";
import { columns, Payment } from "@/shared/ui/Columns";
import { DataTable } from "@/shared/ui/DataTable";
import { RowSelectionState } from "@tanstack/react-table";
import { useState } from "react";

export default function DemoPage() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 400,
      status: "pending",
      email: "728ed52f@example.com",
    },
    {
      id: "728ed23ff",
      amount: 200,
      status: "pending",
      email: "728ed23ff@example.com",
    },
    {
      id: "34fsf23",
      amount: 500,
      status: "success",
      email: "34fsf23@example.com",
    },
    {
      id: "sdf23qfsa",
      amount: 100,
      status: "failed",
      email: "sdf23qfsa@example.com",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={data}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
      <Button variant="outline" onClick={() => console.log(rowSelection)}>
        선택
      </Button>
    </div>
  );
}
