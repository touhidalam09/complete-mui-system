import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';


// useForm START
export function useForm(intializeFValue) {

    const [values, setValues] = useState(intializeFValue);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        handleInputChange
    };
}
// useForm END


// Form Component START
const useStyles = makeStyles({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: '8px',
        }
    }
})

export function Form(props) {

    const classes = useStyles();

    return (

        < form className={classes.root} >
            {props.children}
        </form >
    );
}
// Form Component END
