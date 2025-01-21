import { IconButton, Stack, Tooltip } from "@mui/material";
import React from "react";
import Iconify from "../../../components/iconify";

export default function CustomizationBtns({ onImgClick, onTextClick }) {
  const imgInputRef = React.useRef(null);
  return (
    <Stack
      direction={"column"}
      p={2}
      sx={{ position: "absolute", left: 0, top: "40%" }}
    >
      <Tooltip title="Upload Your logo">
        <IconButton onClick={() => imgInputRef.current.click()}>
          <Iconify icon="material-symbols:image-outline-rounded" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Add text">
        <IconButton onClick={onTextClick}>
          <Iconify icon="icon-park-outline:text" />
        </IconButton>
      </Tooltip>

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
