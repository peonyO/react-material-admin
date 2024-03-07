import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Header";
import Result from "../Result";

const NotNetwork: React.FC = () => {
  return (
    <Box className="h-screen">
      <Header />
      <Box className="h-full flex flex-col justify-center">
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
        ></Result>
      </Box>
    </Box>
  );
};

export default NotNetwork;
