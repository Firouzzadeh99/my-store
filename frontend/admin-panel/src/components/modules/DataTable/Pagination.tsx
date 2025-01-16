import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

interface IProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function CustomPagination({
  currentPage,
  onNext,
  onPageChange,
  onPrevious,
  totalPages,
}: IProps) {
  return (
    <Pagination className="justify-start select-none">
      <PaginationContent>
        <PaginationItem className="cursor-pointer" onClick={onPrevious}>
          قبلی
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              className="cursor-pointer text-sm"
              isActive={currentPage === index + 1}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem className="cursor-pointer" onClick={onNext}>
          بعدی
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
