import SortingDirectionIcon from "@/app/icons/SortingDirectionIcon";
import { SortDirection } from "@tanstack/react-table";
import { Button } from "../button";

interface SortingButtonProps {
  buttonText?: string;
  isSorted: false | SortDirection;
  toggleSorting: (isSorted: boolean) => void;
  clearSorting: () => void;
}

export default function SortingButton({
  buttonText,
  isSorted,
  toggleSorting,
  clearSorting,
}: SortingButtonProps) {
  const handleClickSort = () => {
    if (!isSorted) toggleSorting(false);
    if (isSorted === "asc") toggleSorting(true);
    else if (isSorted === "desc") clearSorting();
  };

  return (
    <Button variant="ghost" onClick={handleClickSort}>
      {buttonText}
      <SortingDirectionIcon isSorted={isSorted} />
    </Button>
  );
}
