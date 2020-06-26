const theme = {
    palette: {
        primary: {
            main: '#cbb09c'
        },
        secondary: {
            main: '#ffffff'
        },
        text: {
            primary: '#212121',
            secondary: '#9e9e9e',
        },
    },
    // closer to materialize's font (looks nicer than material-ui)
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
}

export default theme;
