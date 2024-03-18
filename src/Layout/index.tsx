import { useOutlet } from "react-router-dom";

import SimpleBar from "simplebar-react";
import { Stack } from "@mui/material";

import { useAppConfig } from "@/stores";
import { useMediaQuery } from "@/material-ui/hooks";

import Menu from "./modules/Menu";
import Header from "./modules/Header";
import Customizer from "./modules/Customizer";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  const menuMode = useAppConfig(state => state.menuMode);
  const menuAsideStatus = useAppConfig(state => state.menuAsideStatus);

  const isMediaLg = useMediaQuery("lg");

  return (
    <>
      <Stack flex="1" direction="row" overflow="hidden">
        {menuMode === "vertical" && isMediaLg ? <Menu menuAsideStatus={menuAsideStatus} /> : <></>}
        <div className="relative z-[1] flex-1 overflow-hidden">
          <SimpleBar className="size-full">
            <Header menuMode={menuMode} isMediaLg={isMediaLg} />
            <main className="h-full">{outlet}</main>
          </SimpleBar>
        </div>
      </Stack>

      {isMediaLg ? <Customizer /> : <></>}
    </>
  );
};

export default Layout;
