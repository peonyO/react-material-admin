import { useOutlet } from "react-router-dom";

import { Box } from "@mui/material";

import Menu from "./modules/Menu";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <Box flex="1" display="flex">
      <Menu />
      <section className="flex-1">
        <header></header>
        <main className="h-full">{outlet}</main>
      </section>
    </Box>
  );
};

export default Layout;
