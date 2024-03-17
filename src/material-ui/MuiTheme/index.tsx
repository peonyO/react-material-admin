import { StyledEngineProvider, Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

import { useTheme } from "./config";

interface Props {
  children: React.ReactNode;
}

const MuiTheme: React.FC<Props> = ({ children }) => {
  const theme = useTheme();

  return (
    // 提高 tailwindcss 优先级，使 tailwindcss 可以替换 mui 的样式
    <StyledEngineProvider injectFirst>
      {/* 设置组件的样式，通过 theme 传入 */}
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </StyledEngineProvider>
  );
};

export default MuiTheme;
