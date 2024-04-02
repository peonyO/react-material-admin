import { Box } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";

const AppLoading: React.FC = () => {
  return (
    <Box height="100%" display="flex" justifyContent="center" alignItems="center" overflow="hidden">
      <Player autoplay loop src="/lottie/appLoading.json" className="w-full" />
    </Box>
  );
};

export default AppLoading;
