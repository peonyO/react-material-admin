import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#00a76f",
      main: "#00a76f",
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
