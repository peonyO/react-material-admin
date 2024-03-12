import { Backdrop, CircularProgress, useTheme } from "@mui/material";

const FullScreenLoading: React.FC = () => {
  const theme = useTheme();

  return (
    <Backdrop open={true}>
      <CircularProgress sx={{ color: theme.palette.primary.light }} />
    </Backdrop>
  );
};

export default FullScreenLoading;
