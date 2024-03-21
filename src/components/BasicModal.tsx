import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { ReactNode } from "react";
import { modalStyles } from "../styles/modalStyles";
import CommonButton from "./CommonButton";


interface Props {
  modalOpen: boolean;
  onClose: () => void;
  title?:string;
  subTitle?:string;
  content: ReactNode;
  validate: ()=>void;
}

const BasicModal = ({ modalOpen, onClose, title, subTitle, content, validate}: Props) => {
  return (
    <>
      <Modal open={modalOpen} onClose={onClose}>
        <Box sx={modalStyles.wrapper}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {subTitle}
          </Typography>
          {content}
        
          <Box>
            <CommonButton variant="contained" size="large" color="primary" sx={modalStyles.buttons} onClick={validate}>
              Save
              </CommonButton>
              <CommonButton color={"primary"} variant={"text"} size={"small"} onClick={onClose}>
                Cancel
              </CommonButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
