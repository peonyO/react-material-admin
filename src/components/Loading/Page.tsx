import { Box, LinearProgress } from "@mui/material";

const PageLoading: React.FC = () => {
  return (
    <Box px="40px" width="100%" minHeight="100%" flexDirection="column" alignItems="center" justifyContent="center">
      <LinearProgress sx={{ maxWidth: "360px" }} />
    </Box>
  );
};

export default PageLoading;
