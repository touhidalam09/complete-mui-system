import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@mui/material';
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailIcon from '@mui/icons-material/Email';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff"
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px 8px',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: '8px'
        }

    }
});

function Header() {
    const classes = useStyles();
    return (
        <>
            <AppBar
                position='static'
                className={classes.root}
            >
                <Toolbar>
                    <Grid
                        container
                        alignItems='center'>
                        <Grid item>
                            <InputBase
                                placeholder='search topics'
                                className={classes.searchInput}
                                startAdornment={<SearchIcon />}
                            />
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item>
                            <IconButton>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsNoneIcon />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={5} color="primary">
                                    <EmailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <PowerSettingsNewIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;