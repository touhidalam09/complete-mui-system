import React from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeeForm from './EmployeeForm';
import GroupIcon from '@mui/icons-material/Group';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    paperForm: {
        margin: '8px',
        padding: '8px'
    }
})


function Employee() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Form Design and validation"
                icon={<GroupIcon fontSize='large' />}
            />
            <Paper className={classes.paperForm}>
                <EmployeeForm />
            </Paper>
        </>
    );
}

export default Employee;