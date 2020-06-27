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
    tooltip: {
        fontSize: 15
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
                icon={<GitHubIcon color="primary" fontSize="large"/>}
                tooltipTitle="/robertma1995"
                href="https://github.com/robertma1995"
                TooltipClasses={classes}
            />
            <SpeedDialAction
                icon={<LinkedInIcon color="primary" fontSize="large"/>}
                tooltipTitle="/robertmajianying"
                href="https://www.linkedin.com/in/robertmajianying/"
                TooltipClasses={classes}
            />
        </SpeedDial>
    );
}

export default Menu;
