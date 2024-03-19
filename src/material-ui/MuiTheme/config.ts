import { useMemo } from "react";

import { PaletteColorChannel, PaletteColorOptions, experimental_extendTheme as extendTheme } from "@mui/material/styles";

import { useAppConfig } from "@/stores";
import redImage from "@/assets/images/popover/red-blur.png";
import cyanImage from "@/assets/images/popover/cyan-blur.png";

export const useTheme = () => {
  const themeColor = useAppConfig(state => state.themeColor);
  const isGray = useAppConfig(state => state.isGray);

  /** 成功颜色 */
  const success: (PaletteColorOptions & Partial<PaletteColorChannel>) | undefined = {
    main: "#118d57"
  };
  /** 警告 */
  const warning: (PaletteColorOptions & Partial<PaletteColorChannel>) | undefined = {
    main: "#b76e00"
  };
  /** 失败 */
  const error: (PaletteColorOptions & Partial<PaletteColorChannel>) | undefined = {
    main: "#b71d18"
  };
  /** 信息 */
  const info: (PaletteColorOptions & Partial<PaletteColorChannel>) | undefined = {
    main: "#006c9c"
  };

  const color = {
    success,
    warning,
    error,
    info
  };

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
            },
            ...color
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
            },
            ...color
          }
        }
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              filter: isGray ? "grayscale(100%)" : "none"
            }
          }
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              backdropFilter: "blur(20px)",
              backgroundColor: "rgb(var(--mui-palette-background-defaultChannel)/90%)",
              backgroundImage: `url(${cyanImage}), url(${redImage})`,
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundPosition: "right top, left bottom",
              backgroundSize: "50%, 50%"
            }
          }
        },
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
            root: ({ theme, ownerState }) => ({
              height: "24px",
              ...(ownerState.color === "default" || !ownerState.color
                ? {
                    background: `rgba(${theme.vars.palette.primary.mainChannel} / 0.16)`,
                    color: theme.vars.palette.primary.main
                  }
                : {
                    background: `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.16)`,
                    color: theme.vars.palette[ownerState.color].main
                  }),
              borderRadius: "4px",
              fontWeight: "bold"
            }),
            label: {
              padding: "0 6px"
            }
          }
        }
      },
      typography: {
        fontFamily: "sans, sans-serif"
      }
    });
  }, [themeColor, isGray]);

  return theme;
};

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      filter: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      filter?: string;
    };
  }
}
