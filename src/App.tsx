import MuiTheme from "@/material-ui/MuiTheme";
import { HashRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import RouterProvider from "./routers";

const App = () => {
  return (
    <MuiTheme>
      <HashRouter>
        {/* 使用 material ui 的base样式，取消 tailwindcss 样式，tailwindcss 会覆盖 material ui 的样式 */}
        <CssBaseline />
        {/* 消息提示 */}
        <SnackbarProvider />
        <RouterProvider />
      </HashRouter>
    </MuiTheme>
  );
};

export default App;
