import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

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
    typography: {
        fontFamily: [
            'Inconsolata',
            `monospace`
        ].join(','),
    },
    overrides: {
        // outlined white buttons turn green on hover, change size based on screen
        MuiButton: {
            outlinedSecondary: {
                '&:hover': {
                    color: '#69f0ae'
                },
            },
            outlinedSizeLarge: {
                [breakpoints.down('md')]: {
                    fontSize: '0.9rem'
                },
                [breakpoints.down('sm')]: {
                    fontSize: '0.7rem'
                },
            }
        },
        // menu buttons turn green on hover
        MuiSpeedDialAction: {
            fab: {
                backgroundColor: '#ffffff',
                '&:hover': {
                    backgroundColor: '#69f0ae'
                },
                margin: '20px',
                [breakpoints.down('md')]: {
                    margin: '15px'
                },
                [breakpoints.down('sm')]: {
                    margin: '10px'
                },
            }
        },
        // menu buttons change size based on browser size
        MuiFab: {
            sizeSmall: {
                width: '50px',
                height: '50px',
                [breakpoints.down('md')]: {
                    width: '40px',
                    height: '40px',
                },
                [breakpoints.down('sm')]: {
                    width: '35px',
                    height: '35px',
                },
            }
        }
    }
}

export default theme;
