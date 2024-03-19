import { memo, useRef } from "react";

import { AppBar, Box, IconButton, Stack, Toolbar } from "@mui/material";

import { MenuCollapsed } from "@/components/Icons/MenuCollapsed";
import { SolarSettingsBoldDuotone } from "@/components/Icons";

import Logo from "../components/Logo";
import User from "../components/header/User";
import DrawerMenu, { DrawerMenuRefs } from "../components/header/DrawerMenu";

interface Props {
  menuMode?: "vertical" | "horizontal";
  menuAsideStatus?: "default" | "collapsed";
  isMediaLg?: boolean;
}

const Header: React.FC<Props> = ({ menuMode, menuAsideStatus, isMediaLg }) => {
  const drawerMenuRef = useRef<DrawerMenuRefs>(null);

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        className={
          "shadow-none" +
          (menuMode === "vertical" && isMediaLg
            ? menuAsideStatus === "default"
              ? " w-[calc(100%-260px)]"
              : " w-[calc(100%-68px)]"
            : " w-full") +
          (menuMode === "vertical" ? " backdrop-blur-[10px]" : " bg-[--mui-palette-background-default]")
        }
      >
        <Toolbar disableGutters sx={{ px: isMediaLg ? "40px" : "20px" }}>
          <Box sx={{ flexGrow: "1", display: "flex" }}>
            {/* logo and menuIcon */}
            {isMediaLg ? (
              menuMode === "horizontal" ? (
                <Box sx={{ mr: 2 }}>
                  <Logo isShowTitle={false} />
                </Box>
              ) : (
                <></>
              )
            ) : (
              <IconButton sx={{ mr: 2 }} className="p-[10px]" onClick={() => drawerMenuRef.current?.openMenu()}>
                <MenuCollapsed />
              </IconButton>
            )}
            <div></div>
          </Box>
          <Stack direction="row" sx={{ gap: { xs: "4px", md: "8px" } }}>
            <IconButton>
              <SolarSettingsBoldDuotone />
            </IconButton>
            <User />
          </Stack>
        </Toolbar>
      </AppBar>
      {isMediaLg ? <></> : <DrawerMenu ref={drawerMenuRef} />}
    </>
  );
};

export default memo(Header);
