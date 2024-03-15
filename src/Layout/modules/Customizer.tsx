import { useState } from "react";

import SimpleBar from "simplebar-react";
import { ButtonBase, Chip, Stack, Typography } from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

import { useAppConfig } from "@/stores";
import SettingIcon from "@/components/Icons/SettingIcon";

/** 默认颜色 */
const presetColors = ["#ff0000", "#8C57FF", "#9c27b0", "#ed6c02", "#2e7d32"];

const Customizer: React.FC = () => {
  const [isOpen, changeOpen] = useState(false);
  const { themeColor, changeThemeColor } = useAppConfig(({ themeColor, changeThemeColor }) => ({
    themeColor,
    changeThemeColor
  }));

  /** 当前选中的颜色索引 */
  const currentIndex = presetColors.findIndex(item => item === themeColor);

  return (
    <div
      className={
        "flex flex-col fixed right-0 h-full w-[300px] bg-[--mui-palette-background-paper] top-0 transition-all duration-300 ease-in-out" +
        (isOpen ? " right-0 shadow-xl" : " right-[-300px]")
      }
    >
      <Stack
        component={"header"}
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
        px="24px"
        py="16px"
        className="border-b"
      >
        <Stack>
          <Typography component={"h6"} fontWeight={"bold"} fontSize={"16px"}>
            主题设置中心
          </Typography>
        </Stack>
        <Stack>
          <CloseTwoToneIcon className="cursor-pointer text-[--mui-palette-action-active]" onClick={() => changeOpen(false)} />
        </Stack>
      </Stack>
      <SimpleBar className="flex-1">
        <div className="p-[20px]">
          <Stack spacing={3}>
            <div>
              <Chip label="编辑主题" />
            </div>
            <div className="flex flex-col gap-2.5">
              <Typography component={"p"} fontWeight="bold">
                主色
              </Typography>
              <div className="grid grid-cols-3 gap-x-[16px] gap-y-[12px]">
                {presetColors.map((item, index) => {
                  return (
                    <ButtonBase
                      key={index}
                      sx={{
                        height: "56px",
                        borderRadius: "8px",
                        border: `1px solid ${currentIndex === index ? "transparent" : "var(--mui-palette-divider)"}`,
                        backgroundColor: `rgba(${currentIndex === index ? "var(--mui-palette-primary-mainChannel) / 0.08" : "transparent"})`
                      }}
                      onClick={() => changeThemeColor(item)}
                    >
                      <div
                        className={"size-[16px] rounded-full transition-transform duration-300"}
                        style={{ backgroundColor: item, transform: currentIndex === index ? "scale(1.7)" : "scale(1)" }}
                      ></div>
                    </ButtonBase>
                  );
                })}
                <ButtonBase
                  sx={{
                    height: "56px",
                    borderRadius: "8px",
                    border: `1px solid ${!~currentIndex ? "var(--mui-palette-primary-main)" : "var(--mui-palette-divider)"}`,
                    backgroundColor: `rgba(${!~currentIndex ? "var(--mui-palette-primary-mainChannel) / 0.08" : "transparent"})`
                  }}
                >
                  <div
                    className={"flex size-[38px] items-center justify-center rounded-[8px]"}
                    style={{ backgroundColor: !~currentIndex ? themeColor : "var(--mui-palette-action-selected)" }}
                  >
                    <AutoFixHighIcon />
                  </div>
                </ButtonBase>
              </div>
            </div>
          </Stack>
        </div>
      </SimpleBar>
      <div
        className="absolute left-[-40px] top-[20%] flex size-[40px] cursor-pointer items-center rounded-l-[50%] bg-[--mui-palette-primary-main] pl-[10px]"
        onClick={() => changeOpen(!isOpen)}
      >
        <SettingIcon />
      </div>
    </div>
  );
};

export default Customizer;
