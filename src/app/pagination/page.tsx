import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NoticeListTable from "../../components/ui/pagination/NoticeListTable";

export default async function Home() {
  const queryClient = new QueryClient();

  // 페이지 생성 시 prefetch 실행
  await queryClient.prefetchQuery({
    queryKey: ["initialData"],
    queryFn: async () => {
      const response = await fetch("http://date.jsontest.com", {
        cache: "no-store", // 임시로 fetch 사용 중이므로 cache: "no-store" 설정 추가. Next.js의 정적 렌더링때문에 처음 페이지를 만들 때 받아온 데이터를 계속해서 사용하는 문제 발생해서.
      });
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
