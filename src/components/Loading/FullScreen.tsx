import { Backdrop, CircularProgress, experimental_extendTheme as extendTheme } from "@mui/material";

const FullScreenLoading: React.FC = () => {
  const theme = extendTheme();

  return (
    <Backdrop open={true}>
      <CircularProgress sx={{ color: theme.vars.palette.primary.main }} />
    </Backdrop>
  );
};

export default FullScreenLoading;
