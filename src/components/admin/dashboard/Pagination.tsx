import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PaginationNum from "./PaginationNum";

export default function Pagination() {
  return (
    <ul className="flex gap-3">
      <li>
        <PaginationNum>
          <FaArrowLeft />
        </PaginationNum>
      </li>
      <li>
        <PaginationNum>1</PaginationNum>
      </li>
      <li>
        <PaginationNum>2</PaginationNum>
      </li>
      <li>
        <PaginationNum>3</PaginationNum>
      </li>
      <li>
        <PaginationNum>...</PaginationNum>
      </li>
      <li>
        <PaginationNum>100</PaginationNum>
      </li>
      <li>
        <PaginationNum>
          <FaArrowRight />
        </PaginationNum>
      </li>
    </ul>
  );
}
