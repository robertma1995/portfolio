import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

const theme = {
    palette: {
        primary: {
            main: '#242424'
        },
        secondary: {
            main: '#ffffff'
        },
        text: {
            primary: '#33eb91',
            secondary: '#999999',
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
                    margin: '16px'
                },
                [breakpoints.down('sm')]: {
                    margin: '12px'
                },
            }
        },
        // menu buttons change size based on browser size
        MuiFab: {
            root: {
                minHeight: '20px'
            },
            sizeSmall: {
                width: '50px',
                height: '50px',
                [breakpoints.down('md')]: {
                    width: '43px',
                    height: '43px',
                },
                [breakpoints.down('sm')]: {
                    width: '35px',
                    height: '35px',
                },
            }
        },
        // dialog + project cards background color
        MuiPaper: {
            root: {
                backgroundColor: '#303030',
            }
        },
        // adds padding to bottom of dialog content
        MuiDialogContent: {
            root: {
                paddingBottom: '20px'
            }
        },
        // make actions have same padding as the content
        MuiCardActions: {
            root: {
                padding: '16px'
            }
        },
        // anchor card actions to bottom of parent card
        MuiCard :{
            root: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }
        }
    }
}

export default theme;
