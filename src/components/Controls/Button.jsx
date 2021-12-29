import React from 'react';
import { Button as MuiButton } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        margin: "4px"
    }
})

function Button(props) {

    const { variant, color, size, text, onClick, ...others } = props;
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "secondary"}
            onClick={onClick}
            {...others}
            classes={{ root: classes.root }}
        >
            {text}
        </MuiButton>
    );
}

export default Button;