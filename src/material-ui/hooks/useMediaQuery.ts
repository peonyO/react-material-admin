import { useMediaQuery as useMuiMediaQuery, experimental_extendTheme as extendTheme, Breakpoint } from "@mui/material";

export const useMediaQuery = (options: number | Breakpoint) => {
  const theme = extendTheme();
  const mediaMatches = useMuiMediaQuery(theme.breakpoints.up(options));

  return mediaMatches;
};
