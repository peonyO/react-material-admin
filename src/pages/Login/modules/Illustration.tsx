import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import illustrationImage from "@/assets/images/login/illustration.png";
import bgImage from "@/assets/images/login/bg.jpg";

const Illustration: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return matches ? (
    <Stack
      flex="1"
      gap="80px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)) center center / cover no-repeat, url(${bgImage})`
      }}
    >
      <Typography
        component="h3"
        maxWidth="480px"
        textAlign="center"
        fontWeight="bold"
        sx={{
          fontSize: {
            lg: "32px",
            md: "30px",
            sm: "28px",
            xs: "24px"
          }
        }}
      >
        React + Material UI 管理系统
      </Typography>
      <Typography
        component="img"
        alt="illustration"
        src={illustrationImage}
        sx={{
          maxWidth: {
            xl: "720px",
            lg: "560px",
            xs: "400px"
          }
        }}
      ></Typography>
    </Stack>
  ) : (
    <></>
  );
};

export default Illustration;
