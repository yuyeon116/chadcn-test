"use client";
import { useState } from "react";
import { TData } from "@/types/data-type";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function NoticeListTable() {
  // 1. current QueryClient instance 가져오기
  const queryClient = useQueryClient();

  const [pageNumber, setPageNumber] = useState<number | undefined>(undefined);

  // 2. 페이지 번호에 따라 추가 데이터 로딩
  const { data } = useQuery<TData>({
    queryKey: ["pageData", pageNumber],
    queryFn: async () => {
      const response = await fetch(
        `http://date.jsontest.com/?page=${pageNumber}`
      );
      return response.json();
    },
    // 3. 이 때 페이지 단에서 prefetching했던 데이터를 페이지 로드 전 불러올 데이터의 초기 데이터로 설정
    initialData: () => {
      if (typeof window === "undefined" || pageNumber === undefined)
        // PROBLEM: 해당 쿼리를 실행하는 주체가 서버인지 브라우저인지 확인하기 위해 typeof window === "undefined"만으로 구분하면, 브라우저에서 첫 로드 시 쿼리가 실행되어 데이터가 바로 갱신됨
        // SOLVE: pageNumber === undefined 조건을 추가하여, 페이지 번호가 없을 때도 initialData를 사용하도록 했음.
        // NOTE: 추후 queryString으로 페이지 넘버 가져올 때는 처음 로드할 때도 있을 수 있으므로 페이지가 처음 로드되는 지 아닌지로 조건 바꿔야할 수 있음)
        return queryClient.getQueryData(["initialData"]);
    },
    staleTime: 5000,
    placeholderData: (previous) => previous, // loading 등 깜빡임 현상을 방지하기 위해 이전 데이터를 placeholder data로 활용
  });

  const handlePageChange = (page: number) => {
    setPageNumber(page);
  };

  return (
    <div>
      <h1>{data?.date}</h1>
      <p>{data?.milliseconds_since_epoch}</p>
      <p>{data?.time}</p>
      <hr />
      <div>
        <button onClick={() => handlePageChange(1)}>1페이지</button>
        <button onClick={() => handlePageChange(2)}>2페이지</button>
        <button onClick={() => handlePageChange(3)}>3페이지</button>
      </div>
    </div>
  );
}
