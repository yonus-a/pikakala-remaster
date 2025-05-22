"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import { PaginationType } from "./type";
import "./styles.scss";

export default function NextPagination({
  pageQuery = "page",
  total,
  page,
  take,
}: PaginationType) {
  let params = new URLSearchParams([...(useSearchParams() || [])]);
  const router = useRouter();

  const handleChangePage = (event: any, newPage: number) => {
    if (newPage !== 1) {
      params.set(pageQuery, newPage.toString());
      router.push("?" + params.toString());
    } else {
      params.delete("page");
    }

    push();
  };

  const push = () => {
    router.push("?" + params.toString());
  };

  return (
    <>
      {total > 0 && (
        <div className="table-pagination">
          <Pagination
            count={Math.ceil(total / +take)}
            onChange={handleChangePage}
            className="pagination"
            page={+page + 1}
            dir="ltr"
          />
        </div>
      )}
    </>
  );
}
