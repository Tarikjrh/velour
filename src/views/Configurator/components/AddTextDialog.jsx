import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";

export default function AddTextDialog({
  addTextToCanvas,
  handleClose,
  text,
  setText,
  open,
}) {
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Add Text</DialogTitle>
      <DialogContent>
        <TextField
          sx={{ mt: 2 }}
          fullWidth
          label="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="contained" onClick={addTextToCanvas}>
          Add to Image
        </Button>{" "}
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

//propstypes
AddTextDialog.propTypes = {
  addTextToCanvas: PropTypes.func,
  handleClose: PropTypes.func,
  text: PropTypes.string,
  setText: PropTypes.func,
  open: PropTypes.bool,
};
