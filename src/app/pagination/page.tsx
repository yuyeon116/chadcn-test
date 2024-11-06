import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NoticeListTable from "../../components/ui/pagination/NoticeListTable";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["initialData"],
    queryFn: async () => {
      const response = await fetch("http://date.jsontest.com/");
      return response.json();
    },
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <NoticeListTable />
    </HydrationBoundary>
  );
}
