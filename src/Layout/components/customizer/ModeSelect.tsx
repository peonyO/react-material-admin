import { memo } from "react";

import { ButtonBase, Typography, useColorScheme } from "@mui/material";

import {
  IconParkTwotoneSunOne,
  SolarCloudyMoonBoldDuotone,
  FluentDesktopSync16Filled
} from "@/components/Icons";

/** 模式 */
const modeList = [
  { title: "明亮", icon: <IconParkTwotoneSunOne className="text-[30px]" />, value: "light" },
  { title: "黑暗", icon: <SolarCloudyMoonBoldDuotone className="text-[30px]" />, value: "dark" },
  { title: "跟随系统色", icon: <FluentDesktopSync16Filled className="text-[30px]" />, value: "system" }
] as const;

const ModeSelect: React.FC = () => {
  const { mode, setMode } = useColorScheme();

  /** 当前选择的模式 */
  const currentModeIndex = modeList.findIndex(item => item.value === mode);

  return (
    <div className="flex flex-col gap-2.5">
      <Typography component={"p"} fontWeight="bold">
        模式 Mode
      </Typography>
      <div className="grid grid-cols-3 gap-x-[16px] gap-y-[12px]">
        {modeList.map((item, index) => {
          return (
            <ButtonBase
              key={index}
              sx={{
                height: "56px",
                borderRadius: "8px",
                border: `1px solid ${currentModeIndex === index ? "transparent" : "var(--mui-palette-divider)"}`,
                backgroundColor: `rgba(${currentModeIndex === index ? "var(--mui-palette-primary-mainChannel) / 0.08" : "transparent"})`,
                color: currentModeIndex === index ? "var(--mui-palette-primary-main)" : ""
              }}
              className="transition-colors duration-300"
              onClick={() => setMode(item.value)}
            >
              {item.icon}
            </ButtonBase>
          );
        })}
      </div>
    </div>
  );
};

export default memo(ModeSelect);
