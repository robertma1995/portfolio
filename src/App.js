import React from 'react';
// material ui
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Box, Toolbar } from '@material-ui/core';
// routing
import { Switch, Route } from 'react-router-dom';
import * as routes from './utils/routes';
// my components/pages
import brandTheme from './theme';
import { Menu } from './components';
import { About, Projects } from './pages';

// make all typography responsive
let theme = createMuiTheme(brandTheme);
theme = responsiveFontSizes(theme);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="column" height="100%">
                { /* TODO - improve: empty static appbar to force projects grid to grow down instead of push up  */}
                <Box display="flex" width="100%">
                    <AppBar position="static" elevation={0} color="transparent" style={{ zIndex: 0 }}>
                        <Toolbar></Toolbar>
                    </AppBar>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" flexGrow={1}>
                    <Switch>
                        <Route exact path={routes.ABOUT} component={About}></Route>
                        <Route exact path={routes.PROJECTS} component={Projects}></Route>
                    </Switch>
                </Box>
            </Box>
            <Menu/>
        </ThemeProvider>
    );
}

export default App;
