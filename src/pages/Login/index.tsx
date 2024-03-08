import { Alert, Stack, Typography, TextField, FormControl } from "@mui/material";
import { useForm, Controller, FormProvider } from "react-hook-form";
import InfoIcon from "@mui/icons-material/Info";
import logoImage from "@/assets/react.svg";
import illustrationImage from "@/assets/images/login/illustration.png";
import bgImage from "@/assets/images/login/bg.jpg";

interface LoginForm {
  account: string;
  password: string;
}

const Login: React.FC = () => {
  const methods = useForm<LoginForm>({
    defaultValues: {
      account: "",
      password: ""
    }
  });
  const onSubmit = (data: LoginForm) => console.log(data);

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
      <Stack
        maxWidth="480px"
        mx="auto"
        width="100%"
        spacing={4}
        sx={{
          padding: {
            md: "160px 64px 0px",
            xs: "120px 16px"
          }
        }}
      >
        <Typography
          component="h4"
          fontWeight="bold"
          sx={{
            fontSize: {
              lg: "24px",
              md: "24px",
              sm: "20px"
            }
          }}
        >
          登录后台管理系统
        </Typography>
        <Alert icon={<InfoIcon sx={{ color: "#00b8d9" }} />} sx={{ color: "#003768", backgroundColor: "#cafdf5" }}>
          账号：<strong>admin/user</strong> 密码：<strong>123</strong>
        </Alert>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormControl fullWidth>
              <Controller
                name="account"
                control={methods.control}
                rules={{ required: "请输入账号" }}
                render={({ field, fieldState }) => (
                  <TextField
                    autoFocus
                    label="账号"
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth>
              <Controller
                name="password"
                control={methods.control}
                rules={{ required: "请输入密码" }}
                render={({ field, fieldState }) => (
                  <TextField {...field} label="密码" error={fieldState.invalid} helperText={fieldState.error?.message} />
                )}
              />
            </FormControl>
            <input type="submit" />
          </form>
        </FormProvider>
      </Stack>
    </Stack>
  );
};

export default Login;
