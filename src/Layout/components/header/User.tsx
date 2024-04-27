import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  Stack,
  Typography,
  styled
} from "@mui/material";

import { removeStorage } from "@/utils";
import { useUserStore } from "@/stores";
import avatar from "@/assets/avatar.webp";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}));

const User: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userInfo = useUserStore(state => state.userInfo);

  //#region 个人中心
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "user-info" : undefined;

  /** 打开个人中心 */
  const openUserInfo = ($event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl($event.currentTarget);
  };
  /** 关闭个人中心 */
  const closeUserInfo = () => {
    setAnchorEl(null);
  };
  //#endregion

  const logout = () => {
    removeStorage("tokenInfo");
    navigate("/login", {
      replace: true,
      state: {
        redirect: pathname
      }
    });
  };

  return (
    <>
      <IconButton sx={{ padding: 0 }} onClick={openUserInfo}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar src={avatar} sx={{ width: "32px", height: "32px" }} />
        </StyledBadge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closeUserInfo}
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
            sx: {
              width: "200px"
            }
          }
        }}
      >
        <Box p="16px 12px">
          <Typography component="h6" fontWeight="bold">
            {userInfo?.nickname}
          </Typography>
        </Box>
        <Divider />
        <Stack component="ul" p="8px" gap="4px">
          <Button color="error" sx={{ fontWeight: "bold" }} onClick={logout}>
            退出登录
          </Button>
        </Stack>
      </Popover>
    </>
  );
};

export default User;
