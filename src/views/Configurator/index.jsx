import {
  Alert,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import VBreadcrumbs from "../../components/VBreadcrumbs";
import colors from "./utils/colors";
import ItemTitle from "./components/ItemTitle";
import * as fabric from "fabric";
import ColorPickerSection from "./components/ColorPickerSection";
// import ProductDetailsCarousel from "./components/ProductDetailsCarousel";
import SizesSection from "./components/SizesSection";
import SizeGuide from "./components/SizeGuide";
import CustomizationBtns from "./components/CustomizationBtns";
import ShareProduct from "./components/ShareProduct";
import { useParams } from "react-router";
import productsData from "../../productsData";
import DisplayOptions from "./components/DisplayOptions";
import { paths } from "../../routes/paths";
import SingleImageViewer from "./components/SingleImageViewer";
import { default as ImageComponent } from "../../components/Image";
import SimilarItems from "./components/SimilarItems";

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
    cornerStyle: "round",
    cornerStrokeColor: "blue",
    cornerColor: "lightblue",
    cornerStyle: "circle",
    padding: 10,
    transparentCorners: false,
    cornerDashArray: [2, 2],
    borderColor: "orange",
    borderScaleFactor: 2,
  };

  ////
  // Custom icon control
  const svgRotateIcon = encodeURIComponent(`
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d)">
    <circle cx="9" cy="9" r="5" fill="white"/>
    <circle cx="9" cy="9" r="4.75" stroke="black" stroke-opacity="0.3" stroke-width="0.5"/>
  </g>
    <path d="M10.8047 11.1242L9.49934 11.1242L9.49934 9.81885" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.94856 6.72607L8.25391 6.72607L8.25391 8.03142" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.69517 6.92267C10.007 7.03301 10.2858 7.22054 10.5055 7.46776C10.7252 7.71497 10.8787 8.01382 10.9517 8.33642C11.0247 8.65902 11.0148 8.99485 10.9229 9.31258C10.831 9.63031 10.6601 9.91958 10.4262 10.1534L9.49701 11.0421M8.25792 6.72607L7.30937 7.73554C7.07543 7.96936 6.90454 8.25863 6.81264 8.57636C6.72073 8.89408 6.71081 9.22992 6.78381 9.55251C6.8568 9.87511 7.01032 10.174 7.23005 10.4212C7.44978 10.6684 7.72855 10.8559 8.04036 10.9663" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
  <filter id="filter0_d" x="0" y="0" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="2"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.137674 0 0 0 0 0.190937 0 0 0 0 0.270833 0 0 0 0.15 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  </defs>
</svg>
`);
  const rotateIcon = `data:image/svg+xml;utf8,${svgRotateIcon}`;
  const imgIcon = document.createElement("img");
  imgIcon.src = rotateIcon;

  // create a rect object
  const deleteIcon =
    "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
  const deleteImg = document.createElement("img");
  deleteImg.src = deleteIcon;

  // Add text to the canvas
  const addTextToCanvas = () => {
    if (!text.trim()) return;

    const fabricText = new fabric.Text("1231432423", {
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
      render: renderIcon(imgIcon),
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
      render: renderIcon(deleteImg),
      cornerSize: 24,
    });

    adjustCanvasSize();
    canvas.add(fabricText);
    canvas.setActiveObject(fabricText);
    canvas.renderAll();

    setText(""); // Clear input
    handleClose(); // Close modal
  };

  function deleteObject(_eventData, transform) {
    const canvas = transform.target.canvas;
    canvas.remove(transform.target);
    canvas.requestRenderAll();
  }

  // Tagged template
  function mouseRotateIcon(angle) {
    const relativeAngle = angle - 90;
    const pos = {
        "-90": "9.25 5.25",
        "-75": "9.972 3.863",
        "-60": "10.84 1.756",
        "-45": "11.972 -1.716",
        "-30": "18.83 0.17",
        "-15": "28.49 -9.49",
        15: "-7.985 46.77",
        30: "-0.415 27.57",
        45: "2.32 21.713",
        60: "3.916 18.243",
        75: "4.762 16.135",
        90: "5.25 14.75",
        105: "5.84 13.617",
        120: "6.084 12.666",
        135: "6.317 12.01",
        150: "6.754 11.325",
        165: "7.06 10.653",
        180: "7.25 10",
        195: "7.597 9.43",
        210: "7.825 8.672",
        225: "7.974 7.99",
        240: "8.383 7.332",
        255: "8.83 6.441",
      },
      defaultPos = "7.25 10";
    const transform =
      relativeAngle === 0
        ? "translate(9.5 3.5)"
        : `rotate(${relativeAngle} ${pos[relativeAngle] || defaultPos})`;
    const imgCursor = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'>
    <defs>
      <filter id='a' width='266.7%' height='156.2%' x='-75%' y='-21.9%' filterUnits='objectBoundingBox'>
        <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/>
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1'/>
        <feColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'/>
        <feMerge>
          <feMergeNode in='shadowMatrixOuter1'/>
          <feMergeNode in='SourceGraphic'/>
        </feMerge>
      </filter>
      <path id='b' d='M1.67 12.67a7.7 7.7 0 0 0 0-9.34L0 5V0h5L3.24 1.76a9.9 9.9 0 0 1 0 12.48L5 16H0v-5l1.67 1.67z'/>
    </defs>
    <g fill='none' fill-rule='evenodd'><path d='M0 24V0h24v24z'/>
      <g fill-rule='nonzero' filter='url(#a)' transform='${transform}'>
        <use fill='#000' fill-rule='evenodd' xlink:href='#b'/>
        <path stroke='#FFF' d='M1.6 11.9a7.21 7.21 0 0 0 0-7.8L-.5 6.2V-.5h6.7L3.9 1.8a10.4 10.4 0 0 1 0 12.4l2.3 2.3H-.5V9.8l2.1 2.1z'/>
      </g>
    </g>
  </svg>`);
    return `url("data:image/svg+xml;charset=utf-8,${imgCursor}") 12 12, crosshair`;
  }

  function treatAngle(angle) {
    return angle - (angle % 15);
  }

  // Define how the cursor will be
  function rotationStyleHandler(eventData, control, fabricObject) {
    if (fabricObject.lockRotation) {
      return NOT_ALLOWED_CURSOR;
    }
    const angle = treatAngle(fabricObject.angle);
    return mouseRotateIcon(angle);
  }

  function renderIcon(icon) {
    return function (ctx, left, top, _styleOverride, fabricObject) {
      const size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(icon, -size / 2, -size / 2, size, size);
      ctx.restore();
    };
  }

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
              {/* <ProductDetailsCarousel
                ref={tshirtDivRef}
                id="tshirt-div"
                product={selectedProduct}
                selectedColor={selectedColor}
              /> */}
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

        <Grid item xs={12} sm={6} sx={{ px: 2 }}>
          <Stack direction={"column"} spacing={4}>
            <ItemTitle
              text={selectedProduct?.name}
              sx={{ display: { xs: "none", md: "block" } }}
            />

            <Typography component={"h2"} variant={"body1"}>
              {selectedProduct?.description}
            </Typography>

            {selectedProduct?.message && (
              <Alert severity="info">{selectedProduct?.message}</Alert>
            )}

            {selectedProduct?.colors && (
              <ColorPickerSection
                colors={selectedProduct?.colors}
                selectedColor={selectedColor}
                onSelectColor={setSelectedColor}
                showColorWheel={selectedProduct?.showColorWheel || true}
              />
            )}
            {selectedProduct?.sizes && (
              <SizesSection sizes={selectedProduct?.sizes} limit={9} />
            )}

            <SizeGuide />

            <CustomizationBtns
              onImgClick={handleCustomPictureUpload}
              onTextClick={handleOpen}
            />
            {selectedProduct?.options && (
              <DisplayOptions options={selectedProduct?.options} />
            )}
          </Stack>
        </Grid>
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
