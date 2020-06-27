import React from 'react';
// material ui
import { Box, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// my components
import { ProjectCard } from '../components';

const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(2)
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(1)
        },
    },
}));

function Projects() {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Box display="flex" flexDirection="column" alignContent="center">
                <Typography variant="h3" color="secondary">
                    Projects
                </Typography>
                <Typography variant="body1" color="textPrimary" className={classes.margin}>
                    Here are the projects that I've worked on recently.
                </Typography>
                <Grid
                    container 
                    spacing={3}
                    justify="center"
                    alignItems="center"
                    className={classes.margin}
                >
                    <Grid item xs={6}>
                        <ProjectCard projectName="hotdogs"/>
                    </Grid>
                    <Grid item xs={6}>
                        <ProjectCard projectName="hotdogs"/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Projects;
