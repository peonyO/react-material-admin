import { useState } from "react";

import SimpleBar from "simplebar-react";
import { Chip, Stack, Typography } from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

import { Setting } from "@/components/Icons";

import ModeSelect from "../components/ModeSelect";
import ColorSelect from "../components/ColorSelect";

const Customizer: React.FC = () => {
  const [isOpen, changeOpen] = useState(false);

  return (
    <div
      className={
        "flex flex-col fixed right-0 h-full w-[300px] bg-[--mui-palette-background-paper] top-0 transition-[box-shadow,right] duration-300 ease-in-out" +
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
          <div className="flex flex-col gap-[20px]">
            <div>
              <Chip label="编辑主题" />
            </div>
            <ColorSelect />
            <ModeSelect />
          </div>
        </div>
      </SimpleBar>
      <div
        className="absolute left-[-40px] top-[20%] flex size-[40px] cursor-pointer items-center rounded-l-[50%] bg-[--mui-palette-primary-main] pl-[10px]"
        onClick={() => changeOpen(!isOpen)}
      >
        <Setting />
      </div>
    </div>
  );
};

export default Customizer;
