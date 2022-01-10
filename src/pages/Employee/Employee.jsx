import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import Controls from "../../components/Controls/Controls";
import GroupIcon from "@mui/icons-material/Group";
import {
  InputAdornment,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTable from "../../components/Controls/UseTable";
import * as employeeService from "../../services/employeeService";
import { AddReaction, Search } from "@mui/icons-material";
import PopUp from "../../components/Controls/Popup";

const useStyles = makeStyles({
  paperForm: {
    margin: "8px",
    padding: "8px",
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "-10px",
  },
});

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department" },
  { id: "action", label: "Action", disableSorting: true },
];

function Employee() {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getAllEmployee());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form Design and validation"
        icon={<GroupIcon fontSize="large" />}
      />
      <Paper className={classes.paperForm}>
        <Toolbar>
          <Controls.Input
            className={classes.searchInput}
            label="Search Employee"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            className={classes.newButton}
            text="Add New"
            variant="outlined"
            startIcon={<AddReaction />}
            onClick={() => setOpenPopup(true)}
          />
        </Toolbar>

        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>

        <TblPagination />
      </Paper>
      <PopUp
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm />
      </PopUp>
    </>
  );
}

export default Employee;
