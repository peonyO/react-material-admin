import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";

import Result from "../Result";
import Header from "./Header";

const NotNetwork: React.FC = () => {
  return (
    <Box className="h-screen w-screen">
      <Header />
      <Box className="flex h-full flex-col justify-center">
        <Result
          title="内部服务器异常!"
          subTitle="出现错误，请稍后再试。"
          extra={
            <Link to="/">
              <Button variant="contained" size="large">
                返回首页
              </Button>
            </Link>
          }
          imageElement={
            <div className="flex h-[300px] w-full items-center justify-center overflow-hidden">
              <Player autoplay loop src="/lottie/500.json" className="relative left-[-15px] size-[300px]" />
            </div>
          }
        ></Result>
      </Box>
    </Box>
  );
};

export default NotNetwork;
