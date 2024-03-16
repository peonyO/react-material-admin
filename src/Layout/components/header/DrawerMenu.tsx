import { forwardRef, useImperativeHandle, useState } from "react";

import { Drawer } from "@mui/material";

import Menu from "@/Layout/modules/Menu";

export interface DrawerMenuRefs {
  openMenu: () => void;
}

const DrawerMenu: React.ForwardRefExoticComponent<React.RefAttributes<DrawerMenuRefs>> = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      openMenu: () => {
        setOpenMenu(true);
      }
    };
  });

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
      <Menu menuAsideStatus="default" isShowTask={false} />
    </Drawer>
  );
});

export default DrawerMenu;
