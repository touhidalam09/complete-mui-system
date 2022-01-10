import { Alert, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    top: "10px",
  },
});

function Notification(props) {
  const { notify, setNotify } = props;
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      className={classes.root}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={notify.isOpen}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={notify.type}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
