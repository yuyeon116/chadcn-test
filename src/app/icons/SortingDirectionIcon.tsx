import { SortDirection } from "@tanstack/react-table";
import SortingUp from "./sorting-up";
import SortingDown from "./sorting-down";

interface SortingDirectionIconProps {
  isSorted: false | SortDirection;
}

export default function SortingDirectionIcon({
  isSorted,
}: SortingDirectionIconProps) {
  switch (isSorted) {
    case "asc":
      return (
        <div className="text-[#21212D]">
          <SortingUp />
        </div>
      );
    case "desc":
      return (
        <div className="text-[#21212D]">
          <SortingDown />
        </div>
      );
    default:
      return (
        <div className="text-gray-500">
          <SortingUp />
        </div>
      );
  }
}
