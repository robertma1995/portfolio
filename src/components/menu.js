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
        top: theme.spacing(1.5),
        left: theme.spacing(4),
    },
    // make menu button icon size + tooltip smaller depending on browser width
    // actual white circle button size defined in theme.js
    tooltip: {
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            fontSize: 12
        },
    },
    icon: {
        fontSize: 35,
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
            direction="down"
            open
            hidden
        >
            <SpeedDialAction
                icon={<GitHubIcon color="primary" className={classes.icon}/>}
                tooltipTitle="/robertma1995"
                href="https://github.com/robertma1995"
                TooltipClasses={classes}
            />
            <SpeedDialAction
                icon={<LinkedInIcon color="primary" className={classes.icon}/>}
                tooltipTitle="/robertmajianying"
                href="https://www.linkedin.com/in/robertmajianying/"
                TooltipClasses={classes}
            />
        </SpeedDial>
    );
}

export default Menu;
