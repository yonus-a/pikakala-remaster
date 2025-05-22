"use client";

// done

import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import "./styles.scss";

interface Props {
  pageQuery?: string;
  total: any;
  page: any;
}

export default function NextPagination({
  pageQuery = "page",
  total,
  page,
}: Props) {
  let params = new URLSearchParams([...(useSearchParams() || [])]);
  const router = useRouter();

  const handleChangePage = (event: any, newPage: number) => {
    params.set(pageQuery, newPage.toString());
    router.push("?" + params.toString());
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
            onChange={handleChangePage}
            className="pagination"
            count={+total}
            page={+page}
            dir="ltr"
          />
        </div>
      )}
    </>
  );
}
