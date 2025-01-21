const productsData = [
  {
    id: "7b5f23e9-d4fc-4a89-8d69-61a8f39e72d2",
    gender: "Men",
    publish: "published",
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg",
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_2.jpg",
    ],
    tags: ["Comfort", "Breathable", "Durable"],
    code: "UNIF001",
    description:
      "<h6>Specifications</h6><ul><li>Category: T-Shirt</li><li>Material: Cotton-Polyester Blend</li></ul>",
    newLabel: { enabled: false, content: "" },
    createdAt: "2025-01-14T10:12:45.321Z",
    saleLabel: { enabled: false, content: "" },
    name: "Classic Uniform T-Shirt",
    coverUrl:
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg",
    subDescription:
      "A lightweight and breathable T-shirt for daily uniform needs.",
    colors: ["#FFFFFF", "#000000", "#008000"],
  },
  {
    id: "2f6d789c-5aeb-403f-8d3e-a7696f8f498e",
    gender: "Men",
    publish: "published",
    category: "Jackets",
    sizes: ["M", "L", "XL", "XXL"],
    images: [
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_3.jpg",
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_4.jpg",
    ],
    tags: ["Warm", "Water-Resistant", "Professional"],
    code: "UNIF002",
    description:
      "<h6>Specifications</h6><ul><li>Category: Jacket</li><li>Material: Water-Resistant Polyester</li></ul>",
    newLabel: { enabled: true, content: "NEW" },
    createdAt: "2025-01-14T11:35:56.987Z",
    saleLabel: { enabled: false, content: "" },
    name: "Professional Work Jacket",
    coverUrl:
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_3.jpg",
    subDescription: "Stay warm and professional with this durable work jacket.",
    colors: ["#000080", "#708090", "#2F4F4F"],
  },
  {
    id: "8d4c80c9-958d-4b5c-90c3-302fc2e6b5dc",
    gender: "Women",
    publish: "draft",
    category: "Pants",
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_5.jpg",
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_6.jpg",
    ],
    tags: ["Comfortable", "Stretchable", "Durable"],
    code: "UNIF003",
    description:
      "<h6>Specifications</h6><ul><li>Category: Pants</li><li>Material: Stretch Cotton</li></ul>",
    newLabel: { enabled: false, content: "" },
    createdAt: "2025-01-14T12:47:23.432Z",
    saleLabel: { enabled: true, content: "SALE" },
    name: "Workwear Pants",
    coverUrl:
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_5.jpg",
    subDescription:
      "Durable and stretchable pants designed for work environments.",
    colors: ["#708090", "#000000", "#A9A9A9"],
  },
  {
    id: "f7392eb5-bf64-478d-8f16-7c34917e0b7b",
    gender: "Women",
    publish: "published",
    category: "Caps",
    sizes: ["One Size"],
    images: [
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_7.jpg",
    ],
    tags: ["Professional", "Adjustable"],
    code: "UNIF004",
    description:
      "<h6>Specifications</h6><ul><li>Category: Cap</li><li>Material: Cotton</li></ul>",
    newLabel: { enabled: false, content: "" },
    createdAt: "2025-01-14T13:12:09.654Z",
    saleLabel: { enabled: false, content: "" },
    name: "Uniform Cap",
    coverUrl:
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_7.jpg",
    subDescription: "Adjustable cap to complete the professional uniform look.",
    colors: ["#000000", "#808080"],
  },
  {
    id: "b27d26f5-828d-4639-b451-c45eb6ae2849",
    gender: "Kids",
    publish: "published",
    category: "Shoes",
    sizes: ["6", "7", "8", "9", "10", "11"],
    images: [
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_8.jpg",
    ],
    tags: ["Slip-Resistant", "Durable"],
    code: "UNIF005",
    description:
      "<h6>Specifications</h6><ul><li>Category: Shoes</li><li>Material: Synthetic</li></ul>",
    newLabel: { enabled: false, content: "" },
    createdAt: "2025-01-14T14:28:15.129Z",
    saleLabel: { enabled: true, content: "DISCOUNT" },
    name: "Work Shoes",
    coverUrl:
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_8.jpg",
    subDescription: "Slip-resistant work shoes for safety and comfort.",
    colors: ["#000000", "#FFFFFF"],
  },
  {
    id: "dfc4cb35-8d09-4f59-a6df-88fc5dbf62e7",
    gender: "Kids",
    publish: "draft",
    category: "Gloves",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_9.jpg",
    ],
    tags: ["Grip", "Protection"],
    code: "UNIF006",
    description:
      "<h6>Specifications</h6><ul><li>Category: Gloves</li><li>Material: Rubber-Coated Fabric</li></ul>",
    newLabel: { enabled: false, content: "" },
    createdAt: "2025-01-14T15:30:45.876Z",
    saleLabel: { enabled: false, content: "" },
    name: "Safety Gloves",
    coverUrl:
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_9.jpg",
    subDescription: "Durable gloves with superior grip for safety.",
    colors: ["#FF4500", "#000000"],
  },
  {
    id: "4b77e604-9b99-4e9b-b7ec-68c53d0b5ee7",
    gender: "Kids",
    publish: "published",
    category: "Vests",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_10.jpg",
    ],
    tags: ["Visibility", "Lightweight"],
    code: "UNIF007",
    description:
      "<h6>Specifications</h6><ul><li>Category: Vest</li><li>Material: Reflective Polyester</li></ul>",
    newLabel: { enabled: true, content: "NEW" },
    createdAt: "2025-01-14T16:18:23.432Z",
    saleLabel: { enabled: false, content: "" },
    name: "High-Visibility Vest",
    coverUrl:
      "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_10.jpg",
    subDescription:
      "Reflective vest for high visibility in low-light conditions.",
    colors: ["#FFFF00", "#FF4500"],
  },
];

//   [
//   {
//     id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
//     gender: "Kids",
//     publish: "draft",
//     category: "Accessories",

//     sizes: [
//       "6",
//       "7",
//       "8",
//       "8.5",
//       "9",
//       "9.5",
//       "10",
//       "10.5",
//       "11",
//       "11.5",
//       "12",
//       "13",
//     ],
//     images: [
//       "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg",
//       "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_2.jpg",
//       "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_3.jpg",
//       "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_4.jpg",
//       "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_5.jpg",
//       "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_6.jpg",
//       "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_7.jpg",
//       "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_8.jpg",
//     ],

//     tags: ["Technology", "Marketing", "Design", "Photography", "Art"],
//     code: "38BEE270",
//     description:
//       "\n<h6>Specifications</h6>\n<br/>\n<ol>\n  <li>Category</li>\n  <li>Shoes</li>\n</ol>\n\n<br/>\n<ol>\n  <li>Manufacturer</li>\n  <li>Nike</li>\n</ol>\n\n<br/>\n<ol>\n  <li>Serial Number</li>\n  <li>358607726380311</li>\n</ol>\n\n<br/>\n<ol>\n  <li>Ships From</li>\n  <li>United States</li>\n</ol>\n\n<br/>\n<br/>\n\n<h6>Product Details</h6>\n<br/>\n<ul>\n  <li><p>The foam sockliner feels soft and comfortable</p></li>\n  <li><p>Pull tab</p></li>\n  <li><p>Not intended for use as Personal Protective Equipment</p></li>\n  <li><p>Colour Shown: White/Black/Oxygen Purple/Action Grape</p></li>\n  <li><p>Style: 921826-109</p></li>\n  <li><p>Country/Region of Origin: China</p></li>\n</ul>\n\n<br/>\n<br/>\n\n<h6>Benefits</h6>\n<br/>\n<ul>\n  <li>\n    <p>Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort</p>\n    and durability.\n  </li>\n  <li>\n    <p>Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio</p>\n    ning underfoot.\n  </li>\n  <li><p>The foam midsole feels springy and soft.</p></li>\n  <li><p>The rubber outsole adds traction and durability.</p></li>\n</ul>\n\n<br/>\n<br/>\n\n<h6>Delivery and Returns</h6>\n<br/>\n<p>Your order of $200 or more gets free standard delivery.</p>\n<br/>\n<ul>\n  <li><p>Standard delivered 4-5 Business Days</p></li>\n  <li><p>Express delivered 2-4 Business Days</p></li>\n</ul>\n<br/>\n<p>Orders are processed and delivered Monday-Friday (excluding public holidays)</p>\n\n",
//     newLabel: {
//       enabled: false,
//       content: "NEW",
//     },

//     createdAt: "2025-01-14T17:13:45.995Z",
//     saleLabel: {
//       enabled: false,
//       content: "SALE",
//     },
//     name: "Nike Air Force 1 NDESTRUKT",

//     coverUrl:
//       "https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg",

//     subDescription:
//       "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
//     colors: ["#00AB55", "#000000", "#FFC0CB", "#FF4500", "#0000FF"],
//   },
// ];

export default productsData;
