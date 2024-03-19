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
            <Header menuMode={menuMode} menuAsideStatus={menuAsideStatus} isMediaLg={isMediaLg} />
            <main
              className={
                "min-h-screen h-screen pt-[88px]" +
                (isMediaLg ? " px-[40px]" : " px-[20px]") +
                (isMediaLg ? " pb-[40px]" : " pb-[20px]")
              }
            >
              {outlet}
            </main>
          </SimpleBar>
        </div>
      </Stack>

      {isMediaLg ? <Customizer /> : <></>}
    </>
  );
};

export default Layout;
