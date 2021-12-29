import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import React from 'react';

function Checkbox(props) {

    const { label, name, value, onChange } = props;

    const convertToDefaultPara = (name, value) => ({
        target: {
            name,
            value
        }
    })

    return (
        <FormControl>
            <FormControlLabel
                control={
                    <MuiCheckbox
                        color='primary'
                        name={name}
                        checked={value}
                        onChange={e => onChange(convertToDefaultPara(name, e.target.checked))}
                    />
                }
                label={label}
            />
        </FormControl>
    );
}

export default Checkbox;