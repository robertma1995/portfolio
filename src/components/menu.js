import React from 'react';
// material ui
import { makeStyles } from '@material-ui/core/styles';
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    // anchor menu to middle-left of screen
    dial: {
        position: 'absolute',
        top: theme.spacing(4),
        left: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            top: theme.spacing(3),
            left: theme.spacing(2)
        },
        [theme.breakpoints.down('sm')]: {
            top: theme.spacing(2),
            left: theme.spacing(1)
        },
    },
    // make menu button icon size + tooltip smaller depending on browser width
    // actual white circle button size defined in theme.js
    tooltip: {
        fontSize: 16,
        [theme.breakpoints.down('md')]: {
            fontSize: 14
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 11
        },
    },
    icon: {
        fontSize: 35,
        [theme.breakpoints.down('md')]: {
            fontSize: 30
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 25
        },
    }
}));

function Menu() {
    const classes = useStyles();
    return (
        <SpeedDial
            className={classes.dial}
            ariaLabel="SpeedDial example"
            direction="right"
            open
            hidden
        >
            <SpeedDialAction
                icon={<GitHubIcon color="primary" className={classes.icon}/>}
                tooltipTitle="/robert-jy-ma"
                href="https://github.com/robert-jy-ma"
                target='_blank'
                tooltipPlacement="bottom"
                TooltipClasses={classes}
            />
            <SpeedDialAction
                icon={<LinkedInIcon color="primary" className={classes.icon}/>}
                tooltipTitle="/robert-jy-ma"
                href="https://www.linkedin.com/in/robert-jy-ma"
                target='_blank'
                tooltipPlacement="bottom"
                TooltipClasses={classes}
            />
        </SpeedDial>
    );
}

export default Menu;
