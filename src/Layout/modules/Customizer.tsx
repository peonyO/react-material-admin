import { useState } from "react";

import { Stack } from "@mui/material";

import SettingIcon from "@/components/Icons/SettingIcon";

const Customizer: React.FC = () => {
  const [isOpen, changeOpen] = useState(false);

  const settingClassName = isOpen ? " right-0 shadow-xl" : " right-[-400px]";

  return (
    <div
      className={
        "fixed right-0 h-full w-[400px] bg-[--mui-palette-background-paper] transition-all duration-300 ease-in-out" +
        settingClassName
      }
    >
      <Stack component={"header"} direction="row" justifyContent="space-between" px="24px" py="16px" className="border-b"></Stack>
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
