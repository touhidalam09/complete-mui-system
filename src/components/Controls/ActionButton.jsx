import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 0,
    margin: "4px",
  },
  secondary: {
    backgroundColor: "#FEDFD7",
    "& .MuiButton-label": {
      color: "#F83703",
    },
  },
  primary: {
    backgroundColor: "#EC3504",
    "& .MuiButton-label": {
      color: "#FFE4DD",
    },
  },
});

function ActionButton(props) {
  const classes = useStyles();
  const { color, children, onClick } = props;
  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
}

export default ActionButton;
