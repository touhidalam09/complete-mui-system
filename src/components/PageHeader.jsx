import { Card, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fdfdff"
    },
    pageCardHeader: {
        display: 'flex',
        padding: '32px',
        marginBottom: '16px'
    },
    pageCardIcon: {
        display: 'inline-block',
        color: "#3c44b1",
        padding: '8px',

    },
    pageCardBody:{
        paddingLeft:'32px'
    },
    pageTitle: {

    },
    pageSubtitle: {
        opacity: 0.6,
    }

})

function PageHeader(props) {
    const { title, subTitle, icon } = props;
    const classes = useStyles();
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageCardHeader}>
                <Card className={classes.pageCardIcon}>
                    {icon}
                </Card>
                <div className={classes.pageCardBody}>
                    <Typography
                        variant='h6'
                        component='div'
                        className={classes.pageTitle}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='subTitle1'
                        component='div'
                        className={classes.pageSubtitle}
                    >
                        {subTitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    );
}

export default PageHeader;