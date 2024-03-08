import { Backdrop, CircularProgress } from "@mui/material";

const FullScreenLoading: React.FC = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress sx={{ color: "#00a76f" }} />
    </Backdrop>
  );
};

export default FullScreenLoading;
