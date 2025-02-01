import mouseRotateIcon from "./mouseRotateIcon";

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

export default rotationStyleHandler;
