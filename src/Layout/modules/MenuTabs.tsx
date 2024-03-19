import { Link } from "react-router-dom";
import { createElement, useMemo } from "react";

import SimpleBar from "simplebar-react";
import { ButtonBase, Chip, Stack, Typography } from "@mui/material";
import LaunchTwoToneIcon from "@mui/icons-material/LaunchTwoTone";
import { ExpandMore } from "@mui/icons-material";

import { useUserStore } from "@/stores";
import * as Icons from "@/components/Icons";

const MenuTabs: React.FC = () => {
  const userInfo = useUserStore(state => state.userInfo);
  const customIcons: { [key: string]: any } = Icons;

  const menuList = useMemo(() => {
    let filterMenuList: MenuItems[] = [];
    (userInfo?.menuList || []).forEach(item => {
      if (item.children) {
        filterMenuList = filterMenuList.concat(item.children);
      }
    });
    return filterMenuList;
  }, [userInfo]);

  return (
    <div
      className="fixed top-[64px] z-[--mui-zIndex-appBar] h-[64px] w-full backdrop-blur-[6px]"
      style={{ background: "rgb(var(--mui-palette-background-defaultChannel)/90%)" }}
    >
      <SimpleBar className="size-full">
        <Stack
          component="nav"
          display="inline-flex"
          direction="row"
          sx={{ height: "64px", px: "20px", alignItems: "center", gap: "6px" }}
        >
          {menuList.map(item => (
            <Link to="#" key={item.id}>
              <ButtonBase
                sx={{ height: "38px", px: "6px", borderRadius: "6px", gap: "10px" }}
                className="transition-colors hover:bg-[--mui-palette-action-hover]"
              >
                {/* 左侧图标 */}
                {createElement(customIcons[item.icon] as any, { style: { width: "24px" } })}
                {/* 标题 */}
                <Typography component="span" sx={{ whiteSpace: "nowrap" }}>
                  {item.title}
                </Typography>
                {/* 标签 */}
                {item.tagInfo ? (
                  <Chip
                    color={item.tagInfo.color}
                    label={item.tagInfo.text}
                    icon={
                      item.tagInfo.icon
                        ? createElement(customIcons[item.tagInfo.icon] as any, { style: { fontSize: "16px" } })
                        : undefined
                    }
                  ></Chip>
                ) : (
                  <></>
                )}
                {/* 展开标识符 */}
                {item.children ? <ExpandMore className="transition-transform duration-300" /> : <></>}
                {/* 标识是否是外部链接 */}
                {item.isLink ? <LaunchTwoToneIcon className="text-[16px]" /> : <></>}
              </ButtonBase>
            </Link>
          ))}
        </Stack>
      </SimpleBar>
    </div>
  );
};

export default MenuTabs;
