const healthcareProducts = [
  {
    id: "7b5f23e9-d4fc-4a89-8d69-61a8f39e72d2",
    name: "Lab Coats",
    category: ["Lab Coats"],
    collection: "Healthcare",
    images: [
      "/products/healthcare/labcoat_1.png",
      "/products/healthcare/labcoat_2.png",
    ],
    options: [
      { type: "length", variants: [{ name: "Long" }, { name: "Short" }] },
      {
        type: "pockets",
        variants: [{ name: "Pocket" }, { name: "No Pocket" }],
      },
      {
        type: "buttons",
        variants: [{ name: "Button" }, { name: "Zipper" }],
      },
    ],
    tags: ["Lab Coats", "Professional Wear", "Medical Uniform"],
    description:
      "Experience superior comfort and professionalism with our lab coats. Designed for healthcare professionals, these lab coats are lightweight, breathable, and made with durable fabric to endure long workdays.",
    coverUrl: "/products/healthcare/labcoat_1.png",
    colors: ["#ffffff", "#2196F3", "#00BCD4"],
  },

  {
    id: "7b5f23e9-d4fc-4a89-8d69-61a8f39e72d3",
    category: "Nursing Caps",
    collection: "Healthcare",
    sizes: ["One Size"],
    images: ["/products/healthcare/floral_cap.png"],
    tags: ["Nursing Caps", "Headwear", "Medical Accessories"],
    description:
      "Stay comfortable and hygienic with our nursing caps. These caps are perfect for healthcare professionals, featuring breathable materials and adjustable designs for all-day wear.",
    name: "Nursing Caps Patterned",
    coverUrl: "/products/healthcare/floral_cap.png",
    message: "Any pattern can be added to the cap",
  },
  {
    id: "7b5f23e9-d4fc-4a89-8d69-61a8f39e72d9",
    category: "Nursing Caps",
    collection: "Healthcare",
    sizes: ["One Size"],
    images: ["/products/healthcare/clean_cap.png"],
    tags: ["Nursing Caps", "Headwear", "Medical Accessories"],
    description:
      "Stay comfortable and hygienic with our nursing caps. These caps are perfect for healthcare professionals, featuring breathable materials and adjustable designs for all-day wear.",
    name: "Nursing Caps Plain",
    coverUrl: "/products/healthcare/clean_cap.png",
    colors: ["#ffffff", "#2196F3", "#008000", "#00BCD4"],
  },
  {
    id: "7b5f23e9-d4fc-4a89-8d69-61a8f39e72d5",
    category: "Scrubs",
    collection: "Healthcare",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/products/healthcare/scrubs1.png",
      "/products/healthcare/scrubs2.png",
      "/products/healthcare/scrubs3.png",
      "/products/healthcare/scrubs4.png",
      "/products/healthcare/scrubs5.png",
      "/products/healthcare/scrubs6.png",
      "/products/healthcare/scrubs7.png",
      "/products/healthcare/scrubs8.png",
      "/products/healthcare/scrubs9.png",
      "/products/healthcare/scrubs11.png",
      "/products/healthcare/scrubs12.png",
    ],
    tags: ["Scrubs", "Medical Uniform", "Comfort"],
    description:
      "Our scrubs combine functionality and comfort, making them ideal for healthcare professionals. Crafted from a soft cotton-polyester blend, they are lightweight, breathable, and designed to keep you comfortable during long shifts.",
    name: "Scrubs",
    coverUrl: "/products/healthcare/scrubs1.png",
    colors: ["#ffffff", "#000000", "#008000"],
  },
  {
    id: "7b5f23e9-d4fc-4a89-8d69-61a8f39e7212",
    category: ["Medical Accessories"],
    collection: "Healthcare",
    sizes: ["One Size"],
    images: ["/products/healthcare/patient_gowns.png"],
    tags: ["Patient Gowns", "Medical Accessories"],
    description:
      "Stay comfortable and hygienic with our nursing caps. These caps are perfect for healthcare professionals, featuring breathable materials and adjustable designs for all-day wear.",
    name: "Patient Gowns",
    coverUrl: "/products/healthcare/patient_gowns.png",
    colors: ["#ffffff", "#2196F3", "#008000", "#00BCD4"],
  },
  {
    id: "7b5f23e9-d4fc-4a89-8d69-61a8f39e7223",
    category: "Surgical Gown",
    collection: "Healthcare",
    sizes: ["One Size"],
    images: ["/products/healthcare/surgical_gown.png"],
    tags: ["Surgical Gown", "Medical Accessories"],
    description:
      "Stay comfortable and hygienic with our nursing caps. These caps are perfect for healthcare professionals, featuring breathable materials and adjustable designs for all-day wear.",
    name: "Surgical Gown",
    coverUrl: "/products/healthcare/surgical_gown.png",
    colors: ["#ffffff", "#2196F3", "#008000", "#00BCD4"],
  },
];

export default healthcareProducts;
