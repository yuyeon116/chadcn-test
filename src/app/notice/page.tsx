import { columns, Payment } from "@/shared/ui/columns";
import { DataTable } from "@/shared/ui/DataTable";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
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
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
