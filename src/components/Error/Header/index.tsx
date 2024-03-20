import { Link } from "react-router-dom";

import { AppBar, Box, Toolbar } from "@mui/material";

import Logo from "@/assets/react.svg";

const Header = () => {
  return (
    <AppBar color="transparent" className="shadow-none">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to={"/"}>
            <img src={Logo} alt={import.meta.env.VITE_APP_NAME} className="size-[40px]" />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
