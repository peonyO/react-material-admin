import { SnackbarProvider } from "notistack";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { CssBaseline } from "@mui/material";

import MuiTheme from "@/material-ui/MuiTheme";

import RouterProvider from "./routers";

const queryClient = new QueryClient();

const App = () => {
  return (
    <MuiTheme>
      {/* 使用 material ui 的base样式，取消 tailwindcss 样式，tailwindcss 会覆盖 material ui 的样式 */}
      <CssBaseline />
      {/* 消息提示 */}
      <SnackbarProvider autoHideDuration={1500} anchorOrigin={{ horizontal: "center", vertical: "top" }} />
      {/* react-query */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider />
      </QueryClientProvider>
    </MuiTheme>
  );
};

export default App;
