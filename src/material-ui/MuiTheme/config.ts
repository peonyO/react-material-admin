import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: "#A378FF",
          main: "#8C57FF",
          contrastText: "#fff"
        },
        background: {
          default: "#F4F5FA"
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
          borderRadius: "2px"
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
