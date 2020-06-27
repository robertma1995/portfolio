import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(3)
    }
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
                    spacing={2}
                    justify="space-between"
                    alignItems="center"
                    className={classes.margin}
                >
                    <Grid item xs={6}>
                        <p> HELLO </p>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Projects;
