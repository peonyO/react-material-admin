import { useState } from "react";

import { Backdrop, Box, IconButton, Modal, Stack, Typography, Zoom } from "@mui/material";

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
            timeout: 500
          }
        }}
      >
        <Zoom in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              borderRadius: "8px"
            }}
          ></Box>
        </Zoom>
      </Modal>
    </>
  );
};

export default Search;
