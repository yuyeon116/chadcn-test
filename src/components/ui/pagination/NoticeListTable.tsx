"use client";
import { useState } from "react";
import { TData } from "@/types/data-type";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function NoticeListTable() {
  const queryClient = useQueryClient();
  const [pageNumber, setPageNumber] = useState(1);

  // 초기 데이터 로딩
  const { data: initialData, isLoading: isInitialLoading } = useQuery<TData>({
    queryKey: ["pageData", pageNumber],
    queryFn: async () => {
      const response = await fetch("http://date.jsontest.com/");
      return response.json();
    },
    initialData: () => {
      if (typeof window === "undefined") return undefined;
      return queryClient.getQueryData(["pageData", pageNumber]);
    },
    staleTime: 5000,
  });

  // 페이지 번호에 따라 추가 데이터 로딩
  const { data: additionalData, isLoading: isAdditionalLoading } =
    useQuery<TData>({
      queryKey: ["pageData", pageNumber],
      queryFn: async () => {
        const response = await fetch(
          `http://date.jsontest.com/?page=${pageNumber}`
        );
        return response.json();
      },
      enabled: pageNumber > 1,
      staleTime: 5000,
    });

  const handlePageChange = (page: number) => {
    setPageNumber(page);
  };

  if (isInitialLoading) return <div>Loading initial data...</div>;

  return (
    <div>
      {/* Render initial data on page 1 */}
      {pageNumber === 1 && initialData && (
        <>
          <h1>{initialData.date}</h1>
          <p>{initialData.time}</p>
          <p>{initialData.milliseconds_since_epoch}</p>
        </>
      )}

      {/* Render additional data for other pages */}
      {pageNumber > 1 &&
        (isAdditionalLoading ? (
          <div>Loading additional data...</div>
        ) : (
          additionalData && (
            <div>
              <h1>{additionalData.date}</h1>
              <p>{additionalData.time}</p>
              <p>{additionalData.milliseconds_since_epoch}</p>
            </div>
          )
        ))}

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
