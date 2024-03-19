import { Link, useLocation } from "react-router-dom";
import { createElement, memo, useState } from "react";

import {
  Chip,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Tooltip,
  Typography
} from "@mui/material";
import LaunchTwoToneIcon from "@mui/icons-material/LaunchTwoTone";
import { ExpandMore } from "@mui/icons-material";

import { useUserStore } from "@/stores";
import * as Icons from "@/components/Icons";

interface ChildrenMenuItemProps {
  menuItem: MenuItems;
  isShowDot?: boolean;
  hierarchy?: number;
  pathname: string;
  isSpread?: boolean;
}

/** 子级 */
const ChildrenMenuItem: React.FC<ChildrenMenuItemProps> = ({ isSpread, menuItem, isShowDot, hierarchy, pathname }) => {
  const { icon, title, description, dirPath, children, isHide, isLink, tagInfo, pagePath } = menuItem;
  const [isOpen, setIsOpen] = useState(pathname.includes(pagePath));
  const customIcons: { [key: string]: any } = Icons;

  const currentHierarchy = hierarchy ? hierarchy + 1 : 1;

  /** 当前路由所在菜单 */
  const isSelected = pagePath === pathname;

  const handleClickMenu = () => {
    if (children) {
      setIsOpen(!isOpen);
    }
  };

  return !isHide ? (
    <li>
      <Link to={children || !dirPath ? "#" : pagePath} target={isLink ? "_blank" : undefined}>
        <ListItemButton
          selected={isSelected}
          sx={{
            height: isShowDot ? "36px" : "44px",
            marginBottom: "4px",
            pl: isSpread ? `${currentHierarchy < 3 ? 12 : 10 * (currentHierarchy - 1)}px` : "0",
            pr: isSpread ? "12px" : "0",
            borderRadius: "10px",
            py: "0",
            background: isOpen ? "var(--mui-palette-action-hover)" : ""
          }}
          onClick={handleClickMenu}
        >
          {/* icon */}
          {icon ? (
            <ListItemIcon
              sx={{
                minWidth: "24px",
                pr: isSpread ? "16px" : "6px",
                pl: isSpread ? "0px" : "6px",
                color: isSelected ? "var(--mui-palette-primary-main)" : "var(--mui-palette-text-primary)"
              }}
            >
              {createElement(customIcons[icon] as any, { style: { width: "24px" } })}
            </ListItemIcon>
          ) : isShowDot ? (
            <ListItemIcon
              sx={{
                pr: isSpread ? "16px" : "0",
                minWidth: "40px",
                pt: "1px",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div
                className={
                  "rounded-full transition-all" +
                  (isSelected ? " size-[8px] bg-[--mui-palette-primary-main]" : " size-[4px] bg-[--mui-palette-text-primary]")
                }
              ></div>
            </ListItemIcon>
          ) : (
            <></>
          )}
          {/* 标题和描述 */}
          <ListItemText
            primary={title}
            secondary={
              description ? (
                <Tooltip title={description.length > 14 ? description : null} placement="top">
                  <Typography
                    component="span"
                    sx={{
                      height: "18px",
                      lineHeihgt: "18px",
                      fontSize: "0.75rem",
                      opacity: isSpread ? "1" : "0",
                      transition: "opacity .3s"
                    }}
                    className="line-clamp-1"
                  >
                    {description}
                  </Typography>
                </Tooltip>
              ) : null
            }
            primaryTypographyProps={{
              sx: {
                height: "22px",
                lineHeight: "22px",
                fontSize: "0.875rem",
                color: isSelected ? "var(--mui-palette-primary-main)" : "var(--mui-palette-text-primary)",
                fontWeight: isSelected ? "bold" : "",
                opacity: isSpread ? "1" : "0",
                transition: "opacity .3s"
              },
              className: "line-clamp-1"
            }}
          />
          {isSpread && tagInfo ? (
            <Chip
              color={tagInfo.color}
              label={tagInfo.text}
              icon={tagInfo.icon ? createElement(customIcons[tagInfo.icon] as any, { style: { fontSize: "16px" } }) : undefined}
            ></Chip>
          ) : (
            <></>
          )}
          {/* 展开标识符 */}
          {children && isSpread ? (
            <ExpandMore className={"transition-transform duration-300" + (isOpen ? " rotate-[0deg]" : " rotate-[-90deg]")} />
          ) : (
            <></>
          )}
          {/* 标识是否是外部链接 */}
          {isLink && isSpread ? <LaunchTwoToneIcon className="text-[16px]" /> : <></>}
        </ListItemButton>
      </Link>
      {children ? (
        <Collapse in={isOpen && isSpread}>
          <List component="ul" disablePadding>
            {children.map(item => {
              return (
                <ChildrenMenuItem
                  key={item.id}
                  isSpread
                  menuItem={item}
                  isShowDot
                  hierarchy={currentHierarchy}
                  pathname={pathname}
                />
              );
            })}
          </List>
        </Collapse>
      ) : (
        <></>
      )}
    </li>
  ) : (
    <></>
  );
};

interface MainMenuItemProps {
  menuItem: MenuItems;
  pathname: string;
  isSpread: boolean;
}

/** 顶级 */
const MainMenuItem: React.FC<MainMenuItemProps> = ({ menuItem, pathname, isSpread }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <li className="px-[16px]">
      {/* 主要标题 */}
      <ListSubheader
        component="div"
        disableSticky
        sx={{
          height: "42px",
          lineHeight: "42px",
          background: "transparent",
          fontSize: "12px",
          fontWeight: "bold",
          cursor: "pointer",
          px: isSpread ? "16px" : "0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Divider textAlign="left">{isSpread ? menuItem.title : ""}</Divider>
      </ListSubheader>

      {menuItem.children ? (
        <Collapse in={isOpen}>
          <List component="ul" disablePadding>
            {menuItem.children.map(item => {
              return <ChildrenMenuItem key={item.id} isSpread={isSpread} menuItem={item} pathname={pathname} />;
            })}
          </List>
        </Collapse>
      ) : (
        <></>
      )}
    </li>
  );
};

interface Props {
  isSpread: boolean;
}

const TreeView: React.FC<Props> = ({ isSpread }) => {
  const { pathname } = useLocation();

  const userInfo = useUserStore(state => state.userInfo);
  const menuList: MenuItems[] = userInfo?.menuList || [];

  return (
    <List sx={{ width: "100%", py: "0" }}>
      {menuList.map(item => {
        return <MainMenuItem key={item.id} isSpread={isSpread} menuItem={item} pathname={pathname} />;
      })}
    </List>
  );
};

export default memo(TreeView);
