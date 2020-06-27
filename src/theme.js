const theme = {
    palette: {
        primary: {
            main: '#212121'
        },
        secondary: {
            main: '#ffffff'
        },
        text: {
            primary: '#69f0ae',
            secondary: '#00c853',
        },
    },
    // closer to materialize's font (looks nicer than material-ui)
    typography: {
        fontFamily: [
            'Inconsolata',
            `monospace`
        ].join(','),
    },
    overrides: {
        // outlined white buttons turn green on hover
        MuiButton: {
            outlinedSecondary: {
                '&:hover': {
                    color: '#69f0ae'
                }
            }
        },
        // menu buttons turn green on hover
        MuiSpeedDialAction: {
            fab: {
                backgroundColor: '#ffffff',
                '&:hover': {
                    backgroundColor: '#69f0ae'
                }
            }
        },
        // larger menu buttons
        MuiFab: {
            sizeSmall: {
                width: '50px',
                height: '50px'
            }
        }
    }
}

export default theme;
