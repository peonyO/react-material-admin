import { useState } from "react";

import { Backdrop, Box, IconButton, Modal, Stack, Typography, Zoom } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Search as SearchIcon } from "@/components/Icons/Search";
interface Props {
  isShowText?: boolean;
}

const Search: React.FC<Props> = ({ isShowText = true }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Stack direction="row" alignItems="center">
        <IconButton onClick={handleOpen}>
          <SearchIcon />
        </IconButton>
        {isShowText ? (
          <Typography
            component="span"
            className="cursor-pointer px-[10px] text-[--mui-palette-text-disabled]"
            onClick={handleOpen}
          >
            搜索页面
          </Typography>
        ) : (
          <></>
        )}
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300
          }
        }}
      >
        <Zoom in={open}>
          <Box
            sx={{
              width: "600px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              borderRadius: "8px"
            }}
          >
            <Stack direction="row" p="16px" alignItems="center" justifyContent="space-between" gap="8px" className="border-b">
              <SearchIcon fontSize="25px" />
              <input className="flex-1 text-[20px] outline-none" />
              <Typography component="div">[esc]</Typography>
              <CloseIcon />
            </Stack>
          </Box>
        </Zoom>
      </Modal>
    </>
  );
};

export default Search;
