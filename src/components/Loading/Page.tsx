import { Box } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";

const PageLoading: React.FC = () => {
  return (
    <Box
      px="40px"
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Player autoplay loop src="/lottie/pageLoading.json" className="size-[150px]" />
    </Box>
  );
};

export default PageLoading;
