import { NotListedLocationOutlined } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Controls from "../../components/Controls/Controls";

const useStyles = makeStyles({
  titleIcon: {
    backgroundColor: "#E33E5A",
    color: "#ED8A0A",
    "& hover": {
      backgroundColor: "#FDDB3A",
      color: "#FFB423f",
    },
  },
});

function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  const classes = useStyles();
  return (
    <Dialog open={confirmDialog.isOpen}>
      <DialogTitle>
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocationOutlined />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle1">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions>
        <Controls.Button
          text="No"
          color="primary"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        />
        <Controls.Button
          text="Yes"
          color="secondary"
          onClick={confirmDialog.onConfirm}
        />
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
