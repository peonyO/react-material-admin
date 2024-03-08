import { Stack, Typography } from "@mui/material";
import Illustration from "./modules/Illustration";
import LoginCmp from "./modules/LoginForm";
import logoImage from "@/assets/react.svg";

const Login: React.FC = () => {
  return (
    <Stack component="main" direction="row" minHeight="100vh">
      <Typography
        alt="logo"
        component="img"
        src={logoImage}
        width="40px"
        height="40px"
        position="absolute"
        zIndex={9}
        sx={{ margin: { xs: "16px", md: "40px" } }}
      />
      <Illustration />
      <LoginCmp />
    </Stack>
  );
};

export default Login;
