import React, { useState } from 'react';
import { Box, Button, Container, Dialog, DialogContent, Grid, Paper, Typography } from '@material-ui/core';
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
            height: 400,
            width: 400,
        },
        [theme.breakpoints.down('sm')]: {
            height: 300,
            width: 300,
        },
    }
}));

function ProjectCard(props) {
    const classes = useStyles(props);
    const [open, setOpen] = useState(false);

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
                    <img src={projectList[props.projectName].logoUrl} className={classes.image}/>
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
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={projectList[props.projectName].logoUrl} className={classes.dialogImage}/>
                        </Grid>
                        <Grid item xs={6}>
                            <p> HELLO </p>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ProjectCard;
