import { useOutlet } from "react-router-dom";

import { Box } from "@mui/material";

import Menu from "./modules/Menu";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <Box height="100vh" display="flex">
      <Menu />
      {outlet}
    </Box>
  );
};

export default Layout;
