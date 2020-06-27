import React from 'react';
// material ui
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
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
            <Box
                display="flex" 
                flexDirection="column" 
                height="100%" 
                bgcolor="primary.main"
                justifyContent="center"
            >
                <Box display="flex" flexDirection="row" justifyContent="center">
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
