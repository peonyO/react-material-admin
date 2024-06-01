import { memo, useCallback, useMemo, useState } from "react";

import { Box } from "@mui/material";

import ScrollBar from "@/components/ScrollBar";

import TreeView from "../components/menu/TreeView";
import Tack from "../components/menu/Tack";
import Logo from "../components/Logo";

import "../styles/menu.css";
interface Props {
  menuAsideStatus: "default" | "collapsed";
  isShowTask?: boolean;
}

const Menu: React.FC<Props> = ({ menuAsideStatus, isShowTask = true }) => {
  /** 是否是展开效果 */
  const isSpread = menuAsideStatus === "default";
  /** 鼠标是否悬停再 aside 上 */
  const [isHovering, setHovering] = useState(false);
  /** 过渡效果时，禁用menu所有操作，这样可以使折叠时先把menu折叠起来！！！ */
  const [isDisabled, setDisabled] = useState(false);

  const switchMenuStatus = useCallback(() => {
    /** 改变 asideStatus 时，把 isHovering 改成 false，因为他一直在 aside 上时为 true */
    setHovering(false);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 300);
  }, [isSpread]);

  const handleMouseEnter = () => {
    if (!isSpread && !isHovering) {
      setHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isSpread && isHovering) {
      setHovering(false);
    }
  };

  const asideClassName = `menu${isSpread ? "" : " menu_collapsed"}`;

  /** 是否显示menu详情信息 */
  const isShowMenuDetail = useMemo(() => {
    return isHovering || isSpread;
  }, [menuAsideStatus, isHovering]);

  /** 监听滚动条滚动 */
  const [isShowMask, setShowMask] = useState(false);

  const handleScroll = ($event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = $event.currentTarget.scrollTop;
    if (scrollTop && !isShowMask) {
      setShowMask(true);
    } else {
      setShowMask(false);
    }
  };

  return (
    <aside
      className={asideClassName + (isDisabled ? " pointer-events-none" : "")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={
          "will-change-auto flex flex-col size-full overflow-hidden bg-[--mui-palette-background-default] transition-[box-shadow,width] duration-300" +
          (isShowMenuDetail ? " w-[260px]" : "") +
          (isHovering ? " shadow-lg" : "")
        }
      >
        <Box
          py="17px"
          pl={isShowMenuDetail ? "24px" : "19px"}
          pr="16px"
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <Logo isSpread={isShowMenuDetail} />
          {isShowTask ? <Tack isSpread={isShowMenuDetail} onSwitch={switchMenuStatus} /> : <></>}
        </Box>
        <div
          className={
            "scroll_mask pointer-events-none absolute top-[60px] z-[2] h-[56px] w-full transition-opacity duration-300 ease-in-out" +
            (isShowMask ? " opacity-100" : " opacity-0")
          }
        ></div>
        <div className="flex-1 overflow-hidden">
          <ScrollBar className="h-full" onScroll={handleScroll}>
            <TreeView isSpread={isShowMenuDetail} />
          </ScrollBar>
        </div>
      </div>
    </aside>
  );
};

export default memo(Menu);
