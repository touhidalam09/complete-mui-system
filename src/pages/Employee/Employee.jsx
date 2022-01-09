import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import GroupIcon from "@mui/icons-material/Group";
import { Paper, TableBody, TableCell, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTable from "../../components/Controls/UseTable";
import * as employeeService from "../../services/employeeService";

const useStyles = makeStyles({
  paperForm: {
    margin: "8px",
    padding: "8px",
  },
});

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department" },
];

function Employee() {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getAllEmployee());
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells);

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form Design and validation"
        icon={<GroupIcon fontSize="large" />}
      />
      <Paper className={classes.paperForm}>
        {/* <EmployeeForm /> */}
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
    </>
  );
}

export default Employee;
