import { memo } from "react";

import { Box, ButtonBase, Stack } from "@mui/material";

import { useAppConfig } from "@/stores";

const SettingLayout: React.FC = () => {
  const { menuMode, menuAsideStatus, switchMenuMode, switchMenuAsideStatus } = useAppConfig(state => ({
    menuMode: state.menuMode,
    menuAsideStatus: state.menuAsideStatus,
    switchMenuMode: state.switchMenuMode,
    switchMenuAsideStatus: state.switchMenuAsideStatus
  }));

  const changeMenuMode = (index: number) => {
    if (index === 0) {
      switchMenuMode("vertical");
      switchMenuAsideStatus("default");
    } else if (index === 1) {
      switchMenuMode("vertical");
      switchMenuAsideStatus("collapsed");
    } else if (index === 2) {
      switchMenuMode("horizontal");
      switchMenuAsideStatus("default");
    }
  };

  const defaultBg = "var(--mui-palette-text-primary)";
  const activeBg =
    "linear-gradient(135deg, var(--mui-palette-LinearProgress-primaryBg) 0%, var(--mui-palette-primary-main) 100%)";

  const layoutList = [
    <>
      <Stack width="28px" height="100%" p="4px" gap="4px" direction="column" sx={{ borderRightWidth: "1px" }}>
        <Box
          className="size-[8px] rounded-[4px]"
          style={{
            background: menuMode === "vertical" && menuAsideStatus === "default" ? activeBg : defaultBg
          }}
        ></Box>
        <Box
          width="100%"
          className="h-[4px] rounded-[4px] opacity-[0.48]"
          style={{
            background: menuMode === "vertical" && menuAsideStatus === "default" ? activeBg : defaultBg
          }}
        ></Box>
        <Box
          width="50%"
          className="h-[4px] rounded-[4px] opacity-[0.48]"
          style={{
            background: menuMode === "vertical" && menuAsideStatus === "default" ? activeBg : defaultBg
          }}
        ></Box>
      </Stack>
      <Stack flex="1" p="4px" height="100%">
        <Box
          width="100%"
          height="100%"
          borderRadius="4px"
          className="opacity-[0.24]"
          style={{
            background: menuMode === "vertical" && menuAsideStatus === "default" ? activeBg : defaultBg
          }}
        ></Box>
      </Stack>
    </>,
    <>
      <Stack width="16px" height="100%" p="4px" gap="4px" direction="column" sx={{ borderRightWidth: "1px" }}>
        <Box
          className="size-[8px] rounded-[4px]"
          style={{
            background: menuMode === "vertical" && menuAsideStatus === "collapsed" ? activeBg : defaultBg
          }}
        ></Box>
        <Box
          width="100%"
          className="h-[4px] rounded-[4px] opacity-[0.48]"
          style={{
            background: menuMode === "vertical" && menuAsideStatus === "collapsed" ? activeBg : defaultBg
          }}
        ></Box>
        <Box
          width="100%"
          className="h-[4px] rounded-[4px] opacity-[0.48]"
          style={{
            background: menuMode === "vertical" && menuAsideStatus === "collapsed" ? activeBg : defaultBg
          }}
        ></Box>
      </Stack>
      <Stack flex="1" p="4px" height="100%">
        <Box
          width="100%"
          height="100%"
          borderRadius="4px"
          className="opacity-[0.24]"
          style={{
            background: menuMode === "vertical" && menuAsideStatus === "collapsed" ? activeBg : defaultBg
          }}
        ></Box>
      </Stack>
    </>,
    <>
      <Stack width="100%" height="16px" p="4px" gap="4px" direction="row" alignItems="center" sx={{ borderBottomWidth: "1px" }}>
        <Box
          className="size-[8px] rounded-[4px]"
          style={{
            background: menuMode === "horizontal" ? activeBg : defaultBg
          }}
        ></Box>
        <Box
          width="14px"
          className="h-[4px] rounded-[4px] opacity-[0.48]"
          style={{
            background: menuMode === "horizontal" ? activeBg : defaultBg
          }}
        ></Box>
        <Box
          width="7px"
          className="h-[4px] rounded-[4px] opacity-[0.48]"
          style={{
            background: menuMode === "horizontal" ? activeBg : defaultBg
          }}
        ></Box>
      </Stack>
      <Stack flex="1" p="4px" width="100%">
        <Box
          width="100%"
          height="100%"
          borderRadius="4px"
          className="opacity-[0.24]"
          style={{
            background: menuMode === "horizontal" ? activeBg : defaultBg
          }}
        ></Box>
      </Stack>
    </>
  ];

  return (
    <div className="grid grid-cols-3 gap-x-[16px]">
      {layoutList.map((item, index) => {
        return (
          <ButtonBase
            key={index}
            sx={{ border: "1px solid var(--mui-palette-divider)", flexDirection: index === 2 ? "column" : "row" }}
            className="h-[56px] rounded-[8px]"
            onClick={() => changeMenuMode(index)}
          >
            {item}
          </ButtonBase>
        );
      })}
    </div>
  );
};

export default memo(SettingLayout);
