import { SVGProps } from "react";

export default function SortingDown({
  height = 16,
  width = 16,
}: SVGProps<SVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize="small"
    >
      <path
        d="M14.5 4.5h-6M14.5 8.5h-5M14.5 12.5h-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M5.934 9.434a.8.8 0 0 1 1.132 1.132L5.934 9.434ZM4 12.5l.566.566a.8.8 0 0 1-1.132 0L4 12.5ZM.934 10.566a.8.8 0 0 1 1.132-1.132L.934 10.566Zm6.132 0-2.5 2.5-1.132-1.132 2.5-2.5 1.132 1.132Zm-3.632 2.5-2.5-2.5 1.132-1.132 2.5 2.5-1.132 1.132Z"
        fill="currentColor"
      ></path>
      <path
        d="M4 4v8.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}