import { memo, useRef } from "react";

import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

import { MenuCollapsed } from "@/components/Icons/MenuCollapsed";
import { SolarSettingsBoldDuotone } from "@/components/Icons";

import Logo from "../components/Logo";
import DrawerMenu, { DrawerMenuRefs } from "../components/header/DrawerMenu";

interface Props {
  menuMode?: "vertical" | "horizontal";
  isMediaLg?: boolean;
}

const Header: React.FC<Props> = ({ menuMode, isMediaLg }) => {
  const drawerMenuRef = useRef<DrawerMenuRefs>(null);

  return (
    <>
      <AppBar position="sticky" color="transparent" className="shadow-none">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {isMediaLg ? (
              menuMode === "horizontal" ? (
                <Logo isShowTitle={false} />
              ) : (
                <></>
              )
            ) : (
              <IconButton className="p-[10px]" onClick={() => drawerMenuRef.current?.openMenu()}>
                <MenuCollapsed />
              </IconButton>
            )}
          </Box>
          <Box>
            <IconButton>
              <SolarSettingsBoldDuotone />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {isMediaLg ? <></> : <DrawerMenu ref={drawerMenuRef} />}
    </>
  );
};

export default memo(Header);
