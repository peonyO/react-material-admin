import { Backdrop, Box, ModalProps, Modal as MuiModal, Zoom } from "@mui/material";

export interface IModalProps extends ModalProps {
  width?: string;
}

const Modal: React.FC<IModalProps> = props => {
  const { open, children, width } = props;

  return (
    <MuiModal
      {...props}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300
        }
      }}
    >
      <Zoom in={open}>
        <div className="size-full">
          <Box
            sx={{
              width: width || "600px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              borderRadius: "8px"
            }}
          >
            {children}
          </Box>
        </div>
      </Zoom>
    </MuiModal>
  );
};

export default Modal;
