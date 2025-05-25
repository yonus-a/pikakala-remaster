"use client";

// done

import TablePagination from "@mui/material/TablePagination";
import { useRouter, useSearchParams } from "next/navigation";
import "./styles.scss";

interface Props {
  takeQuery?: string;
  pageQuery?: string;
  total: any;
  page: any;
  take: any;
}

export default function NextTablePagination({
  takeQuery = "take",
  pageQuery = "page",
  total,
  page,
  take,
}: Props) {
  let params = new URLSearchParams([...(useSearchParams() || [])]);
  const router = useRouter();

  const handleChangePage = (event: any, newPage: number) => {
    params.set(pageQuery, newPage.toString());
    router.push("?" + params.toString());
    push();
  };

  const handleChangeRowsPerPage = (event: any) => {
    const newTake = event.target.value;
    params.set(takeQuery, newTake.toString());
    push();
  };

  const push = () => {
    router.push("?" + params.toString());
  };

  return (
    <>
      {total > 0 && (
        <div className="table-pagination">
          <TablePagination
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={"تعداد آیتم ها"}
            onPageChange={handleChangePage}
            className="pagination"
            rowsPerPage={+take}
            component="div"
            count={+total}
            page={+page + 1}
            dir="ltr"
          />
          <input
            onChange={(e) => handleChangePage(e, +e.target.value)}
            defaultValue={+page + 1}
            className="page-input"
            type="number"
            min={0}
          />
        </div>
      )}
    </>
  );
}
