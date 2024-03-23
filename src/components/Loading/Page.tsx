import { Box, LinearProgress } from "@mui/material";

const PageLoading: React.FC = () => {
  return (
    <Box
      px="40px"
      position="absolute"
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <LinearProgress sx={{ width: "100%", maxWidth: "360px" }} />
    </Box>
  );
};

export default PageLoading;
