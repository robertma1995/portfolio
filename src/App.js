import React from 'react';
// material ui
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// my components
import brandTheme from './theme';

const theme = createMuiTheme(brandTheme);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <p> TODO </p>
        </ThemeProvider>
    );
}

export default App;
