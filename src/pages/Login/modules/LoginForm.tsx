import { useNavigate } from "react-router-dom";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { Alert, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import InfoIcon from "@mui/icons-material/Info";

import { setStorage } from "@/utils";
import { LoginData } from "@/services/interface/user";
import { LoginService } from "@/services";
import { usePermissions } from "@/hooks";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { initPermissions } = usePermissions();

  const { mutate: mutateLogin, isPending: loginLoading } = useMutation({
    mutationFn: LoginService,
    onSuccess: async result => {
      setStorage("tokenInfo", result.result);
      /** 登录成功以后一定要初始化 */
      await initPermissions();
      navigate("/home");
    }
  });

  /** 登录 */
  const login = (data: LoginData) => {
    mutateLogin(data);
  };

  const methods = useForm<LoginData>({
    defaultValues: {
      account: "admin",
      password: "123"
    }
  });

  return (
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
            sm: "20px",
            xs: "20px"
          }
        }}
      >
        登录后台管理系统
      </Typography>
      <Alert icon={<InfoIcon sx={{ color: "#00b8d9" }} />} sx={{ color: "#003768", backgroundColor: "#cafdf5" }}>
        <Typography component={"p"} fontSize={"14px"}>
          账号：<strong>admin/user</strong>
        </Typography>
        <Typography component={"p"} fontSize={"14px"}>
          密码：<strong>123</strong>
        </Typography>
      </Alert>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(login)}>
          <Stack gap="20px">
            <Controller
              name="account"
              control={methods.control}
              rules={{ required: "请输入账号" }}
              render={({ field, fieldState }) => (
                <TextField
                  autoFocus
                  fullWidth
                  label="账号"
                  placeholder="请输入账号"
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="password"
              control={methods.control}
              rules={{ required: "请输入密码" }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  type="password"
                  label="密码"
                  placeholder="请输入密码"
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <LoadingButton type="submit" variant="contained" size="large" loading={loginLoading} className="h-[48px]">
              <span>登录</span>
            </LoadingButton>
          </Stack>
        </form>
      </FormProvider>
    </Stack>
  );
};

export default Login;
