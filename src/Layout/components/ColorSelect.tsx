import { useState } from "react";

import { Popover } from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

const ColorSelect: React.FC<Props> = ({ children }) => {
  //#region 颜色选择器
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "color-select" : undefined;

  /** 打开颜色选择器 */
  // const openColorSelect = ($event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl($event.currentTarget);
  // };
  /** 关闭选择器 */
  const closeColorSelect = () => {
    setAnchorEl(null);
  };
  //#endregion

  return (
    <>
      {children}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closeColorSelect}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      ></Popover>
    </>
  );
};

export default ColorSelect;
