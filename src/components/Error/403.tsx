import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";

import Result from "../Result";
import Header from "./Header";

const NotAuth: React.FC = () => {
  return (
    <div className="w-screen">
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
        ></Result>
      </Box>
    </div>
  );
};

export default NotAuth;
