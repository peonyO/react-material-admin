import { Box } from "@mui/material";

import Logo from "./Logo";

const Menu: React.FC = () => {
  return (
    <aside className="sticky w-[260px]">
      <Box py="15px" pl="20px" pr="16px">
        <Logo />
      </Box>
    </aside>
  );
};

export default Menu;
