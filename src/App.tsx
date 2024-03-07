import MuiTheme from "@/material-ui/MuiTheme";
import { HashRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import RouterProvider from "./routers";

const App = () => {
  return (
    <MuiTheme>
      <HashRouter>
        <CssBaseline />
        <RouterProvider />
      </HashRouter>
    </MuiTheme>
  );
};

export default App;
