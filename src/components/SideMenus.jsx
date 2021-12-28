import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
    }
});


function SideMenus() {
    const classes = useStyles();
    return (
        <div className={classes.sideMenu}>
            Im side menu
        </div>
    );
}
export default SideMenus;