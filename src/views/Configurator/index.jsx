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

const Configurator = () => {
  const { id } = useParams();

  const canvasRef = useRef(null);
  const tshirtDivRef = useRef(null);

  const [canvas, setCanvas] = useState(null);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(selectedProduct?.coverUrl);

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const product = productsData.find((product) => product.id === id);
    setSelectedProduct(product);
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

  // Add text to the canvas
  const addTextToCanvas = () => {
    if (!text.trim()) return;

    const fabricText = new fabric.Text(text, {
      left: 50,
      top: 50,
      fontFamily: "Arial",
      fontSize: 30,
      fill: "#000",
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
                selectedColor={selectedColor}
                onClick={() => {
                  setSelectedImage(img);
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Configurator;
