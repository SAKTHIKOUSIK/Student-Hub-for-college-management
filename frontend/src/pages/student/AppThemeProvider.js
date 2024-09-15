// import React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material';

// const theme = createTheme({
//     palette: {
//         mode: "dark",
//         primary: {
//             main: "#a9afc3"
//         },
//         text: {
//             primary: "#fff"
//         }
//     },
//     components: {
//         MuiIconButton: {
//             defaultProps: {
//                 sx: {
//                     backgroundColor: "rgba(255, 255, 255, 0.035)",
//                     color: "primary.main",
//                     borderRadius: "8px",
//                 }
//             }
//         },
//         MuiCheckbox: {
//             defaultProps: {
//                 sx: {
//                     padding: 0,
//                 }
//             }
//         },
//         MuiTooltip: {
//             styleOverrides: {
//                 tooltip: {
//                     backgroundColor: "#233554"
//                 }
//             }
//         },
//     },
// });

// const AppThemeProvider = ({ children }) => {
//     return (
//         <ThemeProvider theme={theme}>
//             {children}
//         </ThemeProvider>
//     );
// };

// export default AppThemeProvider;




import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#4db5ff", // Light Blue
        },
        text: {
            primary: "#000", // Dark text for contrast
        },
        background: {
            default: "#e0f7fa", // Light Blue background
        },
    },
    components: {
        MuiIconButton: {
            defaultProps: {
                sx: {
                    backgroundColor: "rgba(77, 181, 255, 0.1)", // Light Blue background on hover
                    color: "primary.main",
                    borderRadius: "8px",
                    '&:hover': {
                        backgroundColor: "rgba(77, 181, 255, 0.2)", // Slightly darker on hover
                    }
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                sx: {
                    padding: 0,
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: "#4db5ff", // Light Blue
                }
            }
        },
    },
});

const AppThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;
