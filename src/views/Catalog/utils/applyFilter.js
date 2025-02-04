import orderBy from "lodash/orderBy";

function applyFilter({ inputData, filters, sortBy }) {
  const { category, colors, collection } = filters;

  // SORT BY
  if (sortBy === "featured") {
    inputData = orderBy(inputData, ["totalSold"], ["desc"]);
  }

  if (sortBy === "newest") {
    inputData = orderBy(inputData, ["createdAt"], ["desc"]);
  }

  if (sortBy === "priceDesc") {
    inputData = orderBy(inputData, ["price"], ["desc"]);
  }

  if (sortBy === "priceAsc") {
    inputData = orderBy(inputData, ["price"], ["asc"]);
  }

  // FILTERS

  if (category !== "all") {
    inputData = inputData.filter((product) => product.category === category);
  }

  if (collection !== "") {
    inputData = inputData.filter(
      (product) => product.collection === collection
    );
  }

  if (colors.length) {
    inputData = inputData.filter((product) =>
      product.colors.some((color) => colors.includes(color))
    );
  }

  return inputData;
}

export default applyFilter;
