import { TextField } from "@mui/material";
import React from "react";

function Input(props) {
  const { label, name, type, value, onChange, error = null, ...others } = props;
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      {...others}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default Input;
