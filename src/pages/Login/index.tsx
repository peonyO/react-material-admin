import { Stack, Typography } from "@mui/material";

import logoImage from "@/assets/react.svg";

import LoginCmp from "./modules/LoginForm";
import Illustration from "./modules/Illustration";

const Login: React.FC = () => {
  return (
    <Stack component="main" direction="row" width="100%">
      <Typography
        alt="logo"
        component="img"
        src={logoImage}
        width="40px"
        height="40px"
        position="absolute"
        zIndex={2}
        sx={{ margin: { xs: "16px", md: "40px" } }}
      />
      <Illustration />
      <LoginCmp />
    </Stack>
  );
};

export default Login;
