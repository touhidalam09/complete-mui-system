import { TextField } from '@mui/material';
import React from 'react';

function Input(props) {
    const { label, name, value, onChange } = props;
    return (
        <TextField
            id='outlined-basic'
            variant='outlined'
            label={label}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;