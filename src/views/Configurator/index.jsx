import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import VBreadcrumbs from "../../components/VBreadcrumbs";
import ItemTitle from "./components/ItemTitle";
import * as fabric from "fabric";

import ShareProduct from "./components/ShareProduct";
import { useParams } from "react-router";
import productsData from "../../productsData/productsData";
import { paths } from "../../routes/paths";
import SingleImageViewer from "./components/SingleImageViewer";
import { default as ImageComponent } from "../../components/Image";
import SimilarItems from "./components/SimilarItems";
import renderIcon from "./utils/fabricjs/renderIcon";
import rotateImgIcon from "./utils/fabricjs/rotateImgIcon";
import deleteImgIcon from "./utils/fabricjs/deleteImgIcon";
import rotationStyleHandler from "./utils/fabricjs/rotationStyleHandler";
import deleteObject from "./utils/fabricjs/deleteObject";
import AddTextDialog from "./components/AddTextDialog";
import RenderDetails from "./components/RenderDetails";

const Configurator = () => {
  const { id } = useParams();

  const canvasRef = useRef(null);
  const tshirtDivRef = useRef(null);

  const [canvas, setCanvas] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(selectedProduct?.coverUrl);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const product = productsData.find((product) => product.id === id);
    setSelectedProduct(product);
    setSelectedColor(product?.colors ? product?.colors[0] : null);
    setSelectedImage(product?.coverUrl);
  }, [id]);

  const breadcrumb_paths = useMemo(
    () => [
      { label: "Catalog", url: "/catalog" },
      {
        label: selectedProduct?.collection,
        url: paths.catalog.collection(selectedProduct?.collection),
      },
      { label: selectedProduct?.name },
    ],
    [selectedProduct]
  );

  useEffect(() => {
    const initCanvas = new fabric.Canvas("tshirt-canvas", {
      preserveObjectStacking: true,
    });
    setCanvas(initCanvas);
    return () => initCanvas.dispose();
  }, [selectedProduct]);

  // Adjust the canvas size when the image is loaded
  const adjustCanvasSize = () => {
    const container = tshirtDivRef.current;
    if (container && container.offsetWidth !== 0) {
      canvas.setWidth(container.offsetWidth);
      canvas.setHeight(container.offsetHeight);
      canvas.renderAll();
    }
  };

  // Handle Custom Picture Upload
  const handleCustomPictureUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgObj = new Image();
      imgObj.src = event.target.result;

      imgObj.onload = () => {
        const img = new fabric.Image(imgObj);
        img.scaleToHeight(50);
        img.scaleToWidth(50);
        canvas.centerObject(img);
        img.controls.rotateControl = new fabric.Control({
          x: 0,
          y: -0.5,
          offsetX: 0,
          offsetY: -40,
          cursorStyleHandler: rotationStyleHandler,
          actionHandler: fabric.controlsUtils.rotationWithSnapping,
          actionName: "rotate",
          render: renderIcon(rotateImgIcon),
          cornerSize: 38,
          withConnection: true,
        });

        img.controls.deleteControl = new fabric.Control({
          x: 0.5,
          y: -0.5,
          offsetY: -16,
          offsetX: 16,
          cursorStyle: "pointer",
          mouseUpHandler: deleteObject,
          render: renderIcon(deleteImgIcon),
          cornerSize: 24,
        });

        canvas.add(img);
        canvas.renderAll();
      };

      adjustCanvasSize();
    };
    reader.readAsDataURL(file);
  };

  // Handle Delete Key Press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Backspace" && canvas) {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
          canvas.remove(activeObject);
          canvas.renderAll();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [canvas]);

  fabric.InteractiveFabricObject.ownDefaults = {
    ...fabric.InteractiveFabricObject.ownDefaults,
    cornerStrokeColor: "blue",
    cornerColor: "lightblue",
    cornerStyle: "circle",
    padding: 5,
    transparentCorners: false,
    cornerDashArray: [2, 2],
    borderScaleFactor: 2,
  };

  // Add text to the canvas
  const addTextToCanvas = () => {
    if (!text.trim()) return;

    const fabricText = new fabric.Text(text.trim(), {
      left: 50,
      top: 50,
      fontFamily: "Arial",
      fontSize: 30,
      fill: "#000",
    });

    fabricText.controls.rotateControl = new fabric.Control({
      x: 0,
      y: -0.5,
      offsetX: 0,
      offsetY: -40,
      cursorStyleHandler: rotationStyleHandler,
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      actionName: "rotate",
      render: renderIcon(rotateImgIcon),
      cornerSize: 38,
      withConnection: true,
    });

    fabricText.controls.deleteControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -16,
      offsetX: 16,
      cursorStyle: "pointer",
      mouseUpHandler: deleteObject,
      render: renderIcon(deleteImgIcon),
      cornerSize: 24,
    });

    adjustCanvasSize();
    canvas.add(fabricText);
    canvas.setActiveObject(fabricText);
    canvas.renderAll();

    setText(""); // Clear input
    handleClose(); // Close modal
  };

  if (!selectedProduct) {
    return (
      <Container>
        <Typography variant={"h4"}>Product not found</Typography>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        overflowX: { xs: "hidden", md: "visible" },
        backgroundColor: "#fff",
        mb: 10,
      }}
      maxWidth={"lg"}
    >
      <AddTextDialog
        addTextToCanvas={addTextToCanvas}
        handleClose={handleClose}
        setText={setText}
        text={text}
        open={open}
      />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <VBreadcrumbs sx={{ my: { xs: 4, md: 6 } }} paths={breadcrumb_paths} />
        <ShareProduct />
      </Stack>

      <ItemTitle
        text={selectedProduct?.name}
        sx={{ display: { xs: "block", md: "none" } }}
      />

      <Grid container>
        <Grid item xs={12} sm={6} sx={{ my: { xs: 4, md: 0 }, px: { md: 4 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "100%" } }}>
              <SingleImageViewer
                ref={tshirtDivRef}
                id="tshirt-div"
                selectedProduct={selectedImage}
                selectedColor={selectedColor}
              />
            </Box>

            <Box
              className="drawing-area"
              style={{
                position: "absolute",
                width: "100%",
                height: "85%",
              }}
            >
              <Box
                className="canvas-container"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              >
                <canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                  id="tshirt-canvas"
                  ref={canvasRef}
                ></canvas>
              </Box>
            </Box>
          </Box>
        </Grid>
        <RenderDetails
          selectedProduct={selectedProduct}
          handleCustomPictureUpload={handleCustomPictureUpload}
          handleOpen={handleOpen}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </Grid>

      {/* //Other Images */}
      <Grid container spacing={2} sx={{ mt: 2, px: { md: 4 } }}>
        {selectedProduct?.images.map((img, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Box
              sx={{
                cursor: "pointer",
                border: selectedImage == img ? "3px solid " : null,
                borderColor: "primary.main",
                borderRadius: 2,
                overflow: "hidden",
                position: "relative",
                backgroundColor: selectedColor || "transparent",
              }}
            >
              <ImageComponent
                src={img}
                onClick={() => {
                  setSelectedImage(img);
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <SimilarItems selectedItem={selectedProduct} />
    </Container>
  );
};

export default Configurator;
