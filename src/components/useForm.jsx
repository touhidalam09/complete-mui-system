import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

// useForm START
export function useForm(initializeFValue, validateOnChange = false, validate) {
  const [values, setValues] = useState(initializeFValue);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    //for onChange validate
    if (validateOnChange) validate({ [name]: value });
  };

  //After reset button click its work
  const resetForm = () => {
    setValues(initializeFValue);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}
// useForm END

// Form Component START
const useStyles = makeStyles({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: "8px",
    },
  },
});

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <form className={classes.root} {...other}>
      {" "}
      {props.children}{" "}
    </form>
  );
}
// Form Component END
