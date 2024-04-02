import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";

import Result from "../Result";
import Header from "./Header";

const NotAuth: React.FC = () => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <Box className="flex h-full flex-col justify-center">
        <Result
          title="您没有权限访问此页面！"
          subTitle="您正在尝试访问的页面访问受限，请咨询您的系统管理员。"
          extra={
            <Link to="/">
              <Button variant="contained" size="large">
                返回首页
              </Button>
            </Link>
          }
          imageElement={
            <div className="flex h-[300px] w-full items-center justify-center overflow-hidden">
              <Player autoplay loop src="/lottie/403.json" className="size-[270px]" />
            </div>
          }
        ></Result>
      </Box>
    </div>
  );
};

export default NotAuth;
