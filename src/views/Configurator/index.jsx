import { Alert, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import VBreadcrumbs from "../../components/VBreadcrumbs";
import colors from "./utils/colors";
import ItemTitle from "./components/ItemTitle";
import * as fabric from "fabric";
import ColorPickerSection from "./components/ColorPickerSection";
import ProductDetailsCarousel from "./components/ProductDetailsCarousel";
import SizesSection from "./components/SizesSection";
import SizeGuide from "./components/SizeGuide";
import CustomizationBtns from "./components/CustomizationBtns";
import ShareProduct from "./components/ShareProduct";
import { useParams } from "react-router";
import productsData from "../../productsData";

const Configurator = () => {
  const { id } = useParams();

  const canvasRef = useRef(null);
  const tshirtDivRef = useRef(null);

  const [canvas, setCanvas] = useState(null);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const product = productsData.find((product) => product.id === id);
    setSelectedProduct(product);
  }, [id]);

  const paths = useMemo(
    () => [
      { label: "Collections", url: "/collections" },
      { label: selectedProduct?.collection, url: "/configure" },
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
    const text = new fabric.Text("Hello, World!", {
      left: 50,
      top: 50,
      fontFamily: "Arial",
      fontSize: 30,
      fill: "#000",
    });

    adjustCanvasSize();
    canvas.add(text);
    canvas.setActiveObject(text);
    canvas.renderAll();
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
      <Stack direction={"row"} justifyContent={"space-between"}>
        <VBreadcrumbs sx={{ my: { xs: 4, md: 6 } }} paths={paths} />
        <ShareProduct />
      </Stack>

      <ItemTitle
        text={selectedProduct?.name}
        sx={{ display: { xs: "block", md: "none" } }}
      />

      <Grid container>
        <Grid item xs={12} sm={6} sx={{ my: { xs: 4, md: 0 }, px: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box sx={{ width: { xs: "80%", md: "100%" } }}>
              <ProductDetailsCarousel
                ref={tshirtDivRef}
                id="tshirt-div"
                product={selectedProduct}
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
              />
            )}
            {selectedProduct?.sizes && (
              <SizesSection sizes={selectedProduct?.sizes} limit={9} />
            )}

            <SizeGuide />

            <CustomizationBtns
              onImgClick={handleCustomPictureUpload}
              onTextClick={addTextToCanvas}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Configurator;
