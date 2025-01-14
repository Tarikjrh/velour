import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import VBreadcrumbs from "../../components/VBreadcrumbs";
import colors from "./utils/colors";
import ItemTitle from "./components/ItemTitle";
import * as fabric from "fabric";
import ColorPickerSection from "./components/ColorPickerSection";

const Configurator = () => {
  const canvasRef = useRef(null);
  const tshirtDivRef = useRef(null);

  const [canvas, setCanvas] = useState(null);
  const [selectedImg, setSelectedImg] = useState("womens_crew_front.png");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const title = "Woman's Crew T-shirt";
  const description = `Premium back-view T-shirt with a classic crew neck and short
            sleeves. Crafted from durable, comfortable fabric, perfect for
            uniforms, branding, or promotional use.`;

  useEffect(() => {
    const initCanvas = new fabric.Canvas("tshirt-canvas", {
      preserveObjectStacking: true,
    });
    setCanvas(initCanvas);

    return () => initCanvas.dispose();
  }, []);

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

  return (
    <Container
      sx={{
        overflowX: { xs: "hidden", md: "visible" },
        backgroundColor: "#fff",
      }}
      maxWidth={"lg"}
    >
      <VBreadcrumbs sx={{ my: { xs: 4, md: 6 } }} />

      <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
        <ItemTitle text={title} sx={{ display: { xs: "block", md: "none" } }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{ width: { xs: "80%", md: "90%" } }}
            ref={tshirtDivRef}
            id="tshirt-div"
          >
            <img
              id="tshirt-backgroundpicture"
              src={selectedImg}
              style={{ backgroundColor: selectedColor, width: "100%" }}
            />
          </Box>

          <Box
            className="drawing-area"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
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

        <Stack
          sx={{ width: { xs: "100%", md: "50%" } }}
          direction={"column"}
          spacing={4}
        >
          <ItemTitle
            text={title}
            sx={{ display: { xs: "none", md: "block" } }}
          />
          <Typography
            component={"h2"}
            variant={"body1"}
            sx={{
              fontFamily: "Abril Fatface",
              maxWidth: { md: "90%" },
              fontSize: { xs: "16px", md: "24px" },
            }}
          >
            {description}
          </Typography>

          <ColorPickerSection
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />

          <button onClick={addTextToCanvas}>Add Text</button>
          <label htmlFor="tshirt-custompicture">Upload your own design:</label>
          <input
            type="file"
            id="tshirt-custompicture"
            onChange={handleCustomPictureUpload}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Configurator;
