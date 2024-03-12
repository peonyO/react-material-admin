import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#A378FF",
      main: "#8C57FF",
      contrastText: "#fff"
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
