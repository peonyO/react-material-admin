import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";

import Result from "../Result";
import Header from "./Header";

const NotFound: React.FC = () => {
  return (
    <Box className="h-screen w-screen">
      <Header />
      <Box className="flex h-full flex-col justify-center">
        <Result
          title="您访问的页面不存在！"
          subTitle="我们找不到您要找的页面，请检查您的网址。"
          extra={
            <Link to="/">
              <Button variant="contained" size="large">
                返回首页
              </Button>
            </Link>
          }
        ></Result>
      </Box>
    </Box>
  );
};

export default NotFound;
