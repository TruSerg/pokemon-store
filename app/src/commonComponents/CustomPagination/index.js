import { Pagination } from "@mui/material";
import { memo } from "react";

const CustomPagination = ({ currentPage, onPageChange, pageCount }) => {
  return (
    <Pagination
      count={pageCount}
      page={currentPage}
      onChange={(event, page) => onPageChange(page)}
      count={20}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default memo(CustomPagination);
