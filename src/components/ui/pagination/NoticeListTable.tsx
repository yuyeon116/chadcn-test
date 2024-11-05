"use client";
import { TData } from "@/types/data-type";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function NoticeListTable() {
  const queryClient = useQueryClient();

  // Prefetched 데이터 사용
  const { data: initialData, isLoading: isInitialLoading } = useQuery<TData>({
    queryKey: ["initialData"],
    queryFn: async () => {
      const response = await fetch("http://date.jsontest.com/");
      return response.json();
    },
    initialData: () => {
      if (typeof window === "undefined") return undefined;
      return queryClient.getQueryData(["initialData"]);
    },
  });

  // CSR로 추가 데이터 로딩
  const { data: additionalData, isLoading: isAdditionalLoading } =
    useQuery<TData>({
      queryKey: ["additionalData"],
      queryFn: async () => {
        const response = await fetch("http://date.jsontest.com/");
        return response.json();
      },
      // Prefetch된 데이터 로딩 후에만 추가 데이터 요청
      enabled: !isInitialLoading,
    });

  if (isInitialLoading) return <div>Loading initial data...</div>;

  return (
    <div>
      {/* Render initial data */}
      {initialData && (
        <>
          <h1>{initialData.date}</h1>
          <p>{initialData.time}</p>
          <p>{initialData.milliseconds_since_epoch}</p>
        </>
      )}
      <hr />
      {/* Render additional data (CSR) */}
      {isAdditionalLoading ? (
        <div>Loading additional data...</div>
      ) : (
        <div>
          <h1>{additionalData?.date}</h1>
          <p>{additionalData?.time}</p>
          <p>{additionalData?.milliseconds_since_epoch}</p>
        </div>
      )}
    </div>
  );
}
