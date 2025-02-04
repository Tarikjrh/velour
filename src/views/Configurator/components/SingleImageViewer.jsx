import { Box } from "@mui/material";
import { forwardRef } from "react";
import Image from "../../../components/Image";
import PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
const SingleImageViewer = forwardRef(
  ({ selectedProduct, onClick, selectedColor, id }, ref) => {
    return (
      <Box
        id={id}
        ref={ref} // Attach the ref to the Box
        sx={{
          mb: 3,
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          backgroundColor: selectedColor || "transparent",
        }}
      >
        <Image
          alt={selectedProduct}
          src={selectedProduct}
          ratio="1/1"
          onClick={onClick}
          sx={{ cursor: "zoom-in" }}
        />
      </Box>
    );
  }
);

export default SingleImageViewer;

SingleImageViewer.propTypes = {
  onClick: PropTypes.func,
  selectedColor: PropTypes.string,
  selectedProduct: PropTypes.string,
  id: PropTypes.string,
};
