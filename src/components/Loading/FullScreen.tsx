import { Backdrop, CircularProgress } from "@mui/material";

const FullScreenLoading: React.FC = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress />
    </Backdrop>
  );
};

export default FullScreenLoading;
