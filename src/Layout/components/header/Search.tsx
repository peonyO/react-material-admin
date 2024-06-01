import { useState } from "react";

import { IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Modal from "@/components/Modal";
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
      <Modal open={open} onClose={handleClose}>
        <Stack
          direction="row"
          p="16px"
          alignItems="center"
          justifyContent="space-between"
          gap="8px"
          className="border-b"
        >
          <SearchIcon fontSize="25px" />
          <input className="flex-1 text-[20px] outline-none" />
          <Typography component="div">[esc]</Typography>
          <CloseIcon />
        </Stack>
      </Modal>
    </>
  );
};

export default Search;
