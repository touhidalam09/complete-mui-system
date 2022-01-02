import { TextField } from "@mui/material";
import React from "react";

function Input(props) {
  const { label, name, value, onChange, error = null } = props;
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default Input;
