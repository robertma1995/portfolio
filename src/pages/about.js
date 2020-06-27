import React from 'react';
// material ui
import { Box, Button, Typography } from '@material-ui/core';
// routing
import { Link } from 'react-router-dom';
import * as routes from '../utils/routes';

function About() {
    return (
        <Box display="flex" flexDirection="column" alignContent="center">
            <Typography variant="h1" color="secondary" align="center">
                Robert Ma
            </Typography>
            <Typography variant="h6" color="textPrimary" align="center">
                Developer | Sydney, Australia
            </Typography>
            <Box
                display="flex" 
                flexDirection="row" 
                justifyContent="center" 
                style={{ marginTop: '50px' }}
            >
                <Button 
                    component={Link}
                    to={routes.PROJECTS}
                    variant="outlined" 
                    color="secondary"
                    size="large"
                    style={{ border: '2px solid' }}
                >
                    View Projects
                </Button>
            </Box>
        </Box>
    );    
}

export default About;
