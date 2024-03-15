import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#A378FF",
          contrastText: "#fff"
        },
        background: {
          default: "#F4F5FA"
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: "#A378FF",
          contrastText: "#fff"
        },
        background: {
          default: "#28243D",
          paper: "#312D4B"
        }
      }
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px"
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: "6px",
          borderRadius: "3px"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px"
        }
      }
    }
  },
  typography: {
    fontFamily: "sans, sans-serif"
  }
});
