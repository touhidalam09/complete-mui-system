import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import Controls from "../../components/Controls/Controls";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  dialogWrapper: {
    padding: "16px",
    position: "absolute",
    top: "40px",
  },
});

function Popup(props) {
  const classes = useStyles();
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>
        <Box component="div" sx={{ display: "flex" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: "1" }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="secondary"
            onClick={() => setOpenPopup(false)}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
