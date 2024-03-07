import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Header";
import Result from "../Result";

const NotFound: React.FC = () => {
  return (
    <Box className="h-screen">
      <Header />
      <Box className="h-full flex flex-col justify-center">
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
