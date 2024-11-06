"use client";
import { useEffect, useState } from "react";
import { TData } from "@/types/data-type";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function NoticeListTable() {
  // 1. current QueryClient instance 가져오기
  const queryClient = useQueryClient();

  const [pageNumber, setPageNumber] = useState<number | undefined>(undefined);

  // 초기 데이터 로딩
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
    staleTime: 5000,
    placeholderData: (previous) => previous,
  });

  const [data, setData] = useState(initialData);

  // 페이지 번호에 따라 추가 데이터 로딩
  const { data: additionalData, isSuccess } = useQuery<TData>({
    queryKey: ["pageData", pageNumber],
    queryFn: async () => {
      const response = await fetch(
        `http://date.jsontest.com/?page=${pageNumber}`
      );
      return response.json();
    },
    enabled: !!pageNumber,
    staleTime: 5000,
    placeholderData: (previous) => previous,
  });

  const handlePageChange = (page: number) => {
    setPageNumber(page);
  };

  useEffect(() => {
    if (isSuccess) setData(additionalData);
  }, [additionalData, isSuccess]);

  if (isInitialLoading) return <div>Loading initial data...</div>;

  return (
    <div>
      <h1>{data?.date}</h1>
      <p>{data?.milliseconds_since_epoch}</p>
      <p>{data?.time}</p>
      <hr />
      <div>
        {/* Pagination buttons */}
        <button onClick={() => handlePageChange(1)}>1페이지</button>
        <button onClick={() => handlePageChange(2)}>2페이지</button>
        <button onClick={() => handlePageChange(3)}>3페이지</button>
        {/* 필요한 만큼 페이지 버튼 추가 */}
      </div>
    </div>
  );
}
