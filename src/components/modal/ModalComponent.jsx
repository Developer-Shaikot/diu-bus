import { Box, Modal} from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #adb6f1",
	boxShadow: 24,
	p: 3,
	borderRadius: 3,
};

const ModalComponent = ({open, handleClose, content}) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				{content}
			</Box>
		</Modal>
	);
};

export default ModalComponent;