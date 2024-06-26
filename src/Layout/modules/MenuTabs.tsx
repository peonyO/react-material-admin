import { Link, useLocation } from "react-router-dom";
import { createElement, useMemo } from "react";

import HoverPopover from "material-ui-popup-state/HoverPopover";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";
import { ButtonBase, Chip, PopoverProps, Stack, Tooltip, Typography } from "@mui/material";
import LaunchTwoToneIcon from "@mui/icons-material/LaunchTwoTone";
import InfoIcon from "@mui/icons-material/Info";
import { ExpandMore } from "@mui/icons-material";

import { useUserStore } from "@/stores";
import { getShowMenuList } from "@/routers/helpers/utils";
import ScrollBar from "@/components/ScrollBar";
import * as Icons from "@/components/Icons";

interface TabsPopoverProps extends PopoverProps {
  menuitems: MenuItems[];
  pathname: string;
}

const TabsPopover: React.FC<TabsPopoverProps> = props => {
  const { pathname, menuitems } = props;
  const customIcons: { [key: string]: any } = Icons;

  return (
    <HoverPopover {...props}>
      <Stack p="4px" gap="4px">
        {menuitems.map(item => (
          <PopupState key={item.id} variant="popover" popupId={item.id}>
            {popupState => (
              <>
                <Link
                  to={item.children && !!item.children.length && !item.dirPath ? "#" : item.pagePath}
                  target={item.isLink ? "_blank" : undefined}
                >
                  <ButtonBase
                    {...(item.children && !!item.children.length ? bindHover(popupState) : {})}
                    sx={{
                      px: "8px",
                      borderRadius: "6px",
                      width: "152px",
                      height: "34px",
                      justifyContent: "space-between"
                    }}
                    className={
                      "transition-colors hover:bg-[--mui-palette-action-hover]" +
                      (popupState.isOpen || pathname.includes(item.pagePath)
                        ? " bg-[--mui-palette-action-hover]"
                        : "")
                    }
                  >
                    {/* 标题 */}
                    <Typography
                      component="span"
                      sx={{ whiteSpace: "nowrap", fontSize: "0.875rem" }}
                      className={
                        "line-clamp-1" +
                        (popupState.isOpen || pathname.includes(item.pagePath) ? " font-bold" : "")
                      }
                    >
                      {item.title}
                    </Typography>
                    {/* 标签 */}
                    {item.tagInfo ? (
                      <Chip
                        color={item.tagInfo.color}
                        label={item.tagInfo.text}
                        icon={
                          item.tagInfo.icon && customIcons[item.tagInfo.icon]
                            ? createElement(customIcons[item.tagInfo.icon] as any, {
                                style: { fontSize: "16px" }
                              })
                            : undefined
                        }
                      ></Chip>
                    ) : (
                      <></>
                    )}
                    {/* 展开标识符 */}
                    {item.children && !!item.children.length ? <ExpandMore className="-rotate-90" /> : <></>}
                  </ButtonBase>
                </Link>
                {item.children && !!item.children.length ? (
                  <TabsPopover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "right"
                    }}
                    transformOrigin={{
                      vertical: "center",
                      horizontal: "left"
                    }}
                    menuitems={item.children}
                    pathname={pathname}
                  />
                ) : (
                  <></>
                )}
              </>
            )}
          </PopupState>
        ))}
      </Stack>
    </HoverPopover>
  );
};

const MenuTabs: React.FC = () => {
  const { pathname } = useLocation();
  const userInfo = useUserStore(state => state.userInfo);
  const customIcons: { [key: string]: any } = Icons;

  const menuList = useMemo(() => {
    let filterMenuList: MenuItems[] = [];
    (userInfo?.menuList || []).forEach(item => {
      if (item.children && !!item.children.length) {
        filterMenuList = filterMenuList.concat(item.children);
      }
    });
    return getShowMenuList(filterMenuList);
  }, [userInfo]);

  return (
    <div
      className="sticky top-[64px] z-[--mui-zIndex-appBar] h-[64px] w-full border-t border-[rgb(var(--mui-palette-text-primaryChannel)/10%)] backdrop-blur-[6px]"
      style={{ background: "rgb(var(--mui-palette-background-defaultChannel)/90%)" }}
    >
      <ScrollBar className="size-full">
        <Stack
          component="nav"
          display="inline-flex"
          direction="row"
          sx={{ height: "63px", px: "20px", alignItems: "center", gap: "6px" }}
        >
          {menuList.map(item => (
            <PopupState key={item.id} variant="popover" popupId={item.id}>
              {popupState => (
                <>
                  <Link
                    to={item.children && !!item.children.length && !item.dirPath ? "#" : item.pagePath}
                    target={item.isLink ? "_blank" : undefined}
                  >
                    <ButtonBase
                      sx={{ height: "38px", px: "6px", borderRadius: "6px", gap: "10px" }}
                      className={
                        "transition-colors hover:bg-[--mui-palette-action-hover]" +
                        (popupState.isOpen || pathname.includes(item.pagePath)
                          ? " bg-[--mui-palette-action-hover]"
                          : "")
                      }
                      {...(item.children && !!item.children.length ? bindHover(popupState) : {})}
                    >
                      {/* 左侧图标 */}
                      {customIcons[item.icon] &&
                        createElement(customIcons[item.icon] as any, { style: { width: "24px" } })}
                      {/* 标题 */}
                      <Typography
                        component="span"
                        sx={{ whiteSpace: "nowrap", fontSize: "0.875rem" }}
                        className={popupState.isOpen || pathname.includes(item.pagePath) ? "font-bold" : ""}
                      >
                        {item.title}
                      </Typography>
                      {/* 标签 */}
                      {item.tagInfo ? (
                        <Chip
                          color={item.tagInfo.color}
                          label={item.tagInfo.text}
                          icon={
                            item.tagInfo.icon && customIcons[item.tagInfo.icon]
                              ? createElement(customIcons[item.tagInfo.icon] as any, {
                                  style: { fontSize: "16px" }
                                })
                              : undefined
                          }
                        ></Chip>
                      ) : (
                        <></>
                      )}
                      {/* 展开标识符 */}
                      {item.children && !!item.children.length ? <ExpandMore /> : <></>}
                      {item.description ? (
                        <Tooltip title={item.description}>
                          <InfoIcon sx={{ fontSize: "16px" }} />
                        </Tooltip>
                      ) : (
                        <></>
                      )}
                      {/* 标识是否是外部链接 */}
                      {item.isLink ? <LaunchTwoToneIcon className="text-[16px]" /> : <></>}
                    </ButtonBase>
                  </Link>
                  {item.children && !!item.children.length ? (
                    <TabsPopover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left"
                      }}
                      menuitems={item.children}
                      pathname={pathname}
                    />
                  ) : (
                    <></>
                  )}
                </>
              )}
            </PopupState>
          ))}
        </Stack>
      </ScrollBar>
    </div>
  );
};

export default MenuTabs;
