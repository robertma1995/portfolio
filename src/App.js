import React from 'react';
// material ui
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';
// my components
import brandTheme from './theme';
import { Menu } from './components';

const theme = createMuiTheme(brandTheme);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box 
                display="flex" 
                flexDirection="column" 
                height="100%" 
                bgcolor="primary.main"
                justifyContent="center"
            >
                <Box display="flex" flexDirection="row" justifyContent="center">
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
                            style={{ marginTop: theme.spacing(6) }}
                        >
                            <Button 
                                variant="outlined" 
                                color="secondary" 
                                size="large"
                                style={{ border: '2px solid' }}
                            >
                                View Projects
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Menu/>
        </ThemeProvider>
    );
}

export default App;
