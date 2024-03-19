import { HexColorPicker } from "react-colorful";
import { memo, useState } from "react";

import { ButtonBase, Popover, Typography } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

import { useAppConfig } from "@/stores";

/** 默认颜色 */
const presetColors = ["#ff3030", "#8C57FF", "#9c27b0", "#ed6c02", "#2e7d32"];

const ColorSelect: React.FC = () => {
  const { themeColor, changeThemeColor } = useAppConfig(state => ({
    themeColor: state.themeColor,
    changeThemeColor: state.changeThemeColor
  }));

  /** 当前选中的颜色索引 */
  const currentColorIndex = presetColors.findIndex(item => item === themeColor);

  //#region 颜色选择器
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "color-select" : undefined;

  /** 打开颜色选择器 */
  const openColorSelect = ($event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl($event.currentTarget);
  };
  /** 关闭选择器 */
  const closeColorSelect = () => {
    setAnchorEl(null);
  };
  //#endregion

  return (
    <>
      <div className="flex flex-col gap-2.5">
        <Typography component={"p"} fontWeight="bold">
          主题色 Theme
        </Typography>
        <div className="grid grid-cols-3 gap-x-[16px] gap-y-[12px]">
          {presetColors.map((item, index) => {
            return (
              <ButtonBase
                key={index}
                sx={{
                  height: "56px",
                  borderRadius: "8px",
                  border: `1px solid ${currentColorIndex === index ? "transparent" : "var(--mui-palette-divider)"}`,
                  backgroundColor: `rgba(${currentColorIndex === index ? "var(--mui-palette-primary-mainChannel) / 0.08" : "transparent"})`
                }}
                onClick={() => changeThemeColor(item)}
              >
                <div
                  className={"size-[16px] rounded-full transition-transform duration-300"}
                  style={{ backgroundColor: item, transform: currentColorIndex === index ? "scale(1.7)" : "scale(1)" }}
                ></div>
              </ButtonBase>
            );
          })}
          <ButtonBase
            sx={{
              height: "56px",
              borderRadius: "8px",
              border: `1px solid ${!~currentColorIndex ? "var(--mui-palette-primary-main)" : "var(--mui-palette-divider)"}`,
              backgroundColor: `rgba(${!~currentColorIndex ? "var(--mui-palette-primary-mainChannel) / 0.08" : "transparent"})`
            }}
            onClick={openColorSelect}
          >
            <div
              className={
                "flex size-[38px] items-center justify-center rounded-[8px] bg-[--mui-palette-primary-main] transition-colors duration-300"
              }
            >
              <AutoFixHighIcon className="text-[--mui-palette-primary-contrastText]" />
            </div>
          </ButtonBase>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={closeColorSelect}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
            slotProps={{
              paper: {
                sx: { padding: "20px" }
              }
            }}
          >
            <HexColorPicker color={themeColor} onChange={$event => changeThemeColor($event)} />
          </Popover>
        </div>
      </div>
    </>
  );
};

export default memo(ColorSelect);
