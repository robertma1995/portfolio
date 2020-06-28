import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Container, Dialog, DialogContent, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import projectList from '../utils/projectList';

const useStyles = makeStyles((theme) => ({
    button: {
        padding: "unset"
    },
    imageWrapper: {
        opacity: 0.4,
        '&:hover': {
            opacity: 1,
        },
    },
    image: {
        height: 400, 
        width: 400,
        maxHeight: "100%",
        maxWidth: "100%",
    },
    dialogImage: {
        height: 500,
        width: 500,
        maxHeight: "100%",
        maxWidth: "100%",
        [theme.breakpoints.down('md')]: {
            height: 450,
            width: 450,
        },
        [theme.breakpoints.down('sm')]: {
            height: 400,
            width: 400,
        },
    },
    card: {
        height: "100%",
    },
    bold: {
        fontWeight: "bold"
    },
    margin: {
        marginTop: theme.spacing(2)
    },
    description: {
        height: "300px",
        whiteSpace: "pre-line",
        overflowY: "auto",
        [theme.breakpoints.down('md')]: {
            fontSize: "0.8rem"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.75rem"
        },
    }
}));

function ProjectCard(props) {
    const classes = useStyles(props);
    const project = projectList[props.projectName];
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Button color="secondary" className={classes.button} onClick={() => handleOpen()}>
                <Paper elevation={3} className={classes.imageWrapper}>
                    <img src={project.logoUrl} className={classes.image}/>
                </Paper>
            </Button>
            <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                className={classes.dialog}
                onClose={() => handleClose()}
            >
                <DialogContent>
                    <Grid container alignItems="center">
                        <Grid item xs={6}>
                            <img src={project.logoUrl} className={classes.dialogImage}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Card style={{ backgroundColor: "#404040" }} className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5" color="secondary" className={classes.bold}>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="subtitle2" align="center">
                                        {project.technologies.join(" | ")}
                                    </Typography>
                                    <Typography variant="h6" color="secondary" className={classes.bold}>
                                        About
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.description}>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        href={project.demoUrl}
                                        variant="outlined" 
                                        color="secondary"
                                        size="large"
                                        style={{ border: '2px solid' }}
                                    >
                                        Demo
                                    </Button>
                                    <Button 
                                        href={project.codeUrl}
                                        variant="outlined" 
                                        color="secondary"
                                        size="large"
                                        style={{ border: '2px solid' }}
                                    >
                                        Code
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ProjectCard;
