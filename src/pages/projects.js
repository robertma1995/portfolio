import React from 'react';
// material ui
import { Box, Container, Grid, Typography } from '@material-ui/core';
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
    // push whole container down from invisible appbar (see App.js)
    marginLarge: {
        marginTop: theme.spacing(15),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(12)
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(10)
        },
    }
}));

function Projects() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.marginLarge}>
            <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <Typography variant="h3" color="secondary">
                        Projects
                    </Typography>
                    <Typography variant="body1" color="textPrimary" className={classes.margin}>
                        Here are the projects that I've worked on recently. Click on a tile to find out more.
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" flexGrow={1} width="100%">
                    <Grid
                        container 
                        spacing={3}
                        className={classes.margin}
                    >
                        <Grid item xs={6}>
                            <ProjectCard projectName="hotdogs" privateCode />
                        </Grid>
                        <Grid item xs={6}>
                            <ProjectCard projectName="portfolio" />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Projects;
