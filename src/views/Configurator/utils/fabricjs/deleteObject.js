function deleteObject(_eventData, transform) {
  const canvas = transform.target.canvas;
  canvas.remove(transform.target);
  canvas.requestRenderAll();
}

export default deleteObject;
