import { Grid } from '@mui/material';
import React from 'react';
import Controls from '../../components/Controls/Controls';
import { useForm, Form } from '../../components/useForm';
import * as employeeService from '../../services/employeeService'

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
];

const intializeFValue = {
    id: '',
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentID: '',
    hireDate: new Date(),
    isParmanent: false
}

function EmployeeForm() {


    const {
        values,
        setValues,
        handleInputChange
    } = useForm(intializeFValue)

    return (
        <>
            <Form>
                <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input
                            label='Full name'
                            name="fullName"
                            value={values.fullName}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            label='Email'
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            label='Mobile'
                            name="mobile"
                            value={values.mobile}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            label='City'
                            name="city"
                            value={values.city}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.RadioGroup
                            label='Gender'
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}
                            items={genderItems}
                        />
                        <Controls.Select
                            label='Department'
                            name='departmentID'
                            value={values.departmentID}
                            onChange={handleInputChange}
                            options={employeeService.getDepartmentCollection()}
                        />
                        <Controls.Checkbox
                            label="Parmanent Employee"
                            name="isParmanent"
                            value={values.isParmanent}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
            </Form>
        </>
    );
}

export default EmployeeForm;