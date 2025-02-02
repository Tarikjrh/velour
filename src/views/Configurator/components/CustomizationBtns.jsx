import { Button, Stack } from "@mui/material";
import React from "react";
import Iconify from "../../../components/iconify";
import PropTypes from "prop-types";

export default function CustomizationBtns({ onImgClick, onTextClick }) {
  const imgInputRef = React.useRef(null);
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{ width: "100%", justifyContent: "center" }}
    >
      <Button
        fullWidth
        onClick={() => imgInputRef.current.click()}
        startIcon={<Iconify icon="material-symbols:image-outline-rounded" />}
        variant="contained"
      >
        Upload Your logo
      </Button>
      <Button
        fullWidth
        onClick={onTextClick}
        startIcon={<Iconify icon="icon-park-outline:text" />}
        variant="contained"
      >
        Add text
      </Button>

      <input
        style={{ display: "none" }}
        ref={imgInputRef}
        type="file"
        id="tshirt-custompicture"
        onChange={onImgClick}
      />
    </Stack>
  );
}

CustomizationBtns.propTypes = {
  onImgClick: PropTypes.func,
  onTextClick: PropTypes.func,
};
