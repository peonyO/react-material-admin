import { memo, useState } from "react";

import SimpleBar from "simplebar-react";
import { Chip, Stack, Typography, ButtonBase, Divider, Switch } from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

import { useAppConfig } from "@/stores";
import { SolarSettingsBoldDuotone } from "@/components/Icons";

import SettingLayout from "../components/customizer/SettingLayout";
import ModeSelect from "../components/customizer/ModeSelect";
import ColorSelect from "../components/customizer/ColorSelect";

const Customizer: React.FC = () => {
  const isGray = useAppConfig(state => state.isGray);
  const setGrayMode = useAppConfig(state => state.setGrayMode);

  const [isOpen, changeOpen] = useState(false);

  return (
    <div
      className={
        "will-change-auto flex flex-col fixed right-0 h-full w-[300px] backdrop-blur-[6px] top-0 transition-[box-shadow,right] duration-300 ease-in-out z-[2]" +
        (isOpen ? " right-0 shadow-xl" : " right-[-300px]")
      }
      style={{ background: "rgb(var(--mui-palette-background-defaultChannel)/90%)" }}
    >
      {/** header */}
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
      {/* 设置中心 */}
      <div className="flex-1 overflow-hidden">
        <SimpleBar className="h-full">
          <div className="p-[20px]">
            <div className="grid gap-[20px]">
              <div>
                <Chip size="medium" variant="filled" label="编辑主题" />
              </div>
              <ColorSelect />
              <ModeSelect />
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography component="p">灰色模式</Typography>
                <Switch defaultChecked={isGray} onChange={$event => setGrayMode($event.target.checked)} />
              </Stack>
              <Divider />
              <div>
                <Chip label="界面布局" />
              </div>
              <SettingLayout />
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography component="p">面包屑</Typography>
                <Switch />
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography component="p">历史记录（标签栏）</Typography>
                <Switch />
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography component="p">滚动到顶部按钮</Typography>
                <Switch />
              </Stack>
            </div>
          </div>
        </SimpleBar>
      </div>
      {/* 打开\关闭 设置中心 按钮 */}
      <ButtonBase
        className="absolute left-[-40px] top-[20%] flex size-[40px] cursor-pointer items-center rounded-l-[50%] rounded-r-none bg-[--mui-palette-primary-main] text-[25px]"
        onClick={() => changeOpen(!isOpen)}
      >
        <SolarSettingsBoldDuotone className="text-[--mui-palette-primary-contrastText]" />
      </ButtonBase>
    </div>
  );
};

export default memo(Customizer);
