import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@mui/material';
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailIcon from '@mui/icons-material/Email';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

function Header() {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Grid container>
                        <Grid item>
                            <InputBase />
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item>
                            <IconButton>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsNoneIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={5} color="success">
                                    <EmailIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                    <PowerSettingsNewIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;