import { useMemo } from "react";

import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

import { useAppConfig } from "@/stores";

export const useTheme = () => {
  const themeColor = useAppConfig(state => state.themeColor);

  const theme = useMemo(() => {
    return extendTheme({
      colorSchemes: {
        light: {
          palette: {
            primary: {
              main: themeColor
            },
            text: {
              primary: "rgb(46 38 61 / 0.9)",
              secondary: "rgb(46 38 61 / 0.7)",
              disabled: "rgb(46 38 61 / 0.4)"
            },
            background: {
              default: "#F4F5FA"
            }
          }
        },
        dark: {
          palette: {
            primary: {
              main: themeColor
            },
            text: {
              primary: "rgb(231 227 252 / 0.9)",
              secondary: "rgb(231 227 252 / 0.7)",
              disabled: "rgb(231 227 252 / 0.4)"
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
        },
        MuiChip: {
          styleOverrides: {
            root: ({ theme }) => ({
              height: "24px",
              lineHeight: "24px",
              background: `rgba(${theme.vars.palette.primary.mainChannel} / 0.16)`,
              color: theme.vars.palette.primary.main,
              borderRadius: "4px",
              fontWeight: "bold"
            })
          }
        }
      },
      typography: {
        fontFamily: "sans, sans-serif"
      }
    });
  }, [themeColor]);

  return theme;
};
