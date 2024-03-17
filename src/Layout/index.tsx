import { useDebounce, useWindowSize } from "react-use";
import { useOutlet } from "react-router-dom";
import { useRef } from "react";

import SimpleBar from "simplebar-react";
import SimpleBarCore from "simplebar-core";
import { Stack } from "@mui/material";

import { useAppConfig } from "@/stores";
import { useMediaQuery } from "@/material-ui/hooks";

import Menu from "./modules/Menu";
import Header from "./modules/Header";
import Customizer from "./modules/Customizer";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  const scrollBarRef = useRef<SimpleBarCore>(null);

  const menuMode = useAppConfig(state => state.menuMode);
  const menuAsideStatus = useAppConfig(state => state.menuAsideStatus);

  const isMediaLg = useMediaQuery("lg");

  /** 窗口改变大小时，重新计算内容区域滚动条 */
  const { width, height } = useWindowSize();

  useDebounce(
    () => {
      scrollBarRef.current?.recalculate();
    },
    100,
    [width, height]
  );

  return (
    <>
      <Stack flex="1" direction="row">
        {menuMode === "vertical" && isMediaLg ? <Menu menuAsideStatus={menuAsideStatus} /> : <></>}
        <div className="relative z-[1] flex-1 overflow-hidden">
          <SimpleBar ref={scrollBarRef} className="size-full">
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
