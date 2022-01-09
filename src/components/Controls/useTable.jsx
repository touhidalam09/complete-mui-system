import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  table: {
    marginTop: "32px",
    "& thead th": {
      fontWeight: "600",
      backgroundColor: "#3498DB",
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#AED6F1",
      cursor: "pointer",
    },
  },
}));

function useTable(records, headCells) {
  const classes = useStyles();

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  const TblContainer = (props) => (
    <Table className={classes.table}>{props.children}</Table>
  );

  const TblHead = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>{headCell.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TblPagination = () => (
    <TablePagination
      component="div"
      variant="outlined"
      color="secondary"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={records.length}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );

  const recordsAfterPagingAndSorting = () => {
    return records.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  return { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting };
}

export default useTable;
