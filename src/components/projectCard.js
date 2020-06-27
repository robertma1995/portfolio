import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import projectList from '../utils/projectList';

const useStyles = makeStyles((theme) => ({
    button: {
        padding: "unset"
    },
    imageWrapper: {
        backgroundColor: "#303030",
        opacity: 0.4,
        '&:hover': {
            opacity: 1,
        },
    },
    image: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
}));

function ProjectCard(props) {
    const classes = useStyles(props);
    return (
        <Button color="secondary" className={classes.button}>
            <Paper elevation={24} className={classes.imageWrapper} onClick={() => console.log("KAPPA")}>
                <img src={projectList[props.projectName].logoUrl} className={classes.image}/>
            </Paper>
        </Button>
    );
}

export default ProjectCard;
