import { Grid } from "@mui/material";
import React from "react";
import Controls from "../../components/Controls/Controls";
import { useForm, Form } from "../../components/useForm";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initializeFValue = {
  id: "",
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentID: "",
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm() {
  //Form validation

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("fullName" in fieldValues)
      temp.fullName =
        fieldValues.fullName.length > 2 ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 10 ? "" : "Minimum 11 number required";
    if ("departmentID" in fieldValues)
      temp.departmentID =
        fieldValues.departmentID.length !== 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  //Reuseable Form calling
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initializeFValue, true, validate); //if you onchange validation want pass true otherwise pass false

  //After submit form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      employeeService.insertEmployee(values);
      resetForm();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              label="Full name"
              name="fullName"
              value={values.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />
            <Controls.Input
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Controls.Input
              label="Mobile"
              name="mobile"
              value={values.mobile}
              onChange={handleInputChange}
              error={errors.mobile}
            />
            <Controls.Input
              label="City"
              name="city"
              value={values.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
              label="Gender"
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
              items={genderItems}
            />
            <Controls.Select
              label="Department"
              name="departmentID"
              value={values.departmentID}
              onChange={handleInputChange}
              options={employeeService.getDepartmentCollection()}
              error={errors.departmentID}
            />
            {/* <Controls.DatePickers
                            label="Hire Date"
                            name="hireDate"
                            value={values.hireDate}
                            onChange={handleInputChange}
                        /> */}
            <Controls.Checkbox
              label="Permanent Employee"
              name="isPermanent"
              value={values.isPermanent}
              onChange={handleInputChange}
            />
            <div>
              <Controls.Button type="submit" text="Submit" />
              <Controls.Button
                text="Reset"
                color="primary"
                onClick={resetForm}
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}

export default EmployeeForm;
