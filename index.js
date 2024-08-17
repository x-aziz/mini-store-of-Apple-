const products = [
  {
    id: 1,
    name: "Apple TV HD",
    category: "tv",
    price: "$149.00",
    image:
      "https://www.apple.com/v/apple-tv-hd/e/images/specs/apple_tv__lurq38v1uxui_large_2x.jpg",
  },

  {
    id: 2,
    name: "Apple TV 4K (64GB)",
    category: "tv",
    price: "$199.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1664896361408",
  },

  {
    id: 3,
    name: "Apple TV Remote (2nd Gen)",
    category: "electronics",
    price: "$59.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNC73?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1664836189752",
  },

  {
    id: 4,
    name: "Apple TV Leather Remote Case",
    category: "electronics",
    price: "$39.00",
    image:
      "https://photos5.appleinsider.com/gallery/48684-96523-Nomad-Siri-Remote-on-Desk-xl.jpg",
  },
  {
    id: 5,
    name: "Apple TV HD",
    category: "tv",
    price: "$349.00",
    image:
      "https://www.apple.com/newsroom/images/product/tv/standard/Apple-TV-4K-TV-Plus-221018_big.jpg.large_2x.jpg",
  },
  {
    id: 6,
    name: "Apple TV HD Cable",
    category: "electronics",
    price: "$29.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HLL52?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1549036962042",
  },
  {
    id: 7,
    name: "Apple TV 4K Cable",
    category: "electronics",
    price: "$39.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HLL52?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1549036962042",
  },

  {
    id: 8,
    name: "Apple AirPods (2nd Gen)",
    category: "electronics",
    price: "$129.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-airpods-2022_AV1?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1673992681643",
  },
  {
    id: 9,
    name: "Apple AirPods Pro",
    category: "electronics",
    price: "$249.00",
    image: "https://www.mymac.dz/wp-content/uploads/2024/05/MTJV3.jpg",
  },
  {
    id: 10,
    name: "Apple AirPods Max",
    category: "electronics",
    price: "$549.00",
    image:
      "https://www.apple.com/v/airpods-max/f/images/specs/hero_silver__cs265obeuxiu_large_2x.jpg",
  },
  {
    id: 11,
    name: "Apple HomePod Mini",
    category: "electronics",
    price: "$99.00",
    image:
      "https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod__cnpc7icpf1aq_large_2x.png",
  },
  {
    id: 12,
    name: "Apple HomePod",
    category: "electronics",
    price: "$299.00",
    image:
      "https://www.apple.com/v/homepod/p/images/overview/hero__ernd10zm1dsi_large_2x.jpg",
  },

  {
    id: 13,
    name: "Apple TV 4K (32GB) Refurbished",
    category: "tv",
    price: "$169.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-apple-tv-4k-2021_AV4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1659482031501",
  },
  {
    id: 14,
    name: "Apple TV 4K (64GB) Refurbished",
    category: "tv",
    price: "$189.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQGK2?wid=532&hei=582&fmt=png-alpha&.v=1678748071691",
  },

  {
    id: 15,
    name: "Apple TV 4K Power Adapter",
    category: "electronics",
    price: "$15.00",
    image:
      "https://m.media-amazon.com/images/I/61RxabBdVlL._AC_UY327_FMwebp_QL65_.jpg",
  },

  {
    id: 16,
    name: "Apple TV HD with HomePod Mini",
    category: "tv",
    price: "$239.00",
    image:
      "https://www.cultofmac.com/wp-content/uploads/2023/02/Apple-TV-HomePod-mini-1536x864.jpg",
  },

  {
    id: 17,
    name: "Apple MagSafe Charger",
    category: "electronics",
    price: "$39.00",
    image:
      "https://www.cultofmac.com/wp-content/uploads/2021/02/MagSafe-charger-iPhone-12-2-1536x856.jpg",
  },
  {
    id: 18,
    name: "Apple TV 4K with AirPods",
    category: "tv",
    price: "$349.00",
    image:
      "https://images.macrumors.com/t/Sti6de9Ci50g6O-hX52in52YMGE=/800x0/article-new/2019/02/connect-airpods-to-apple-tv.jpeg?lossy",
  },
  {
    id: 19,
    name: "Apple TV ",
    category: "tv",
    price: "$25.00",
    image:
      "https://www.apple.com/newsroom/images/product/tv/standard/Apple-TV-4K-hero-221018_big.jpg.large_2x.jpg",
  },
  {
    id: 20,
    name: "Apple 20W USB-C Power Adapter",
    category: "electronics",
    price: "$19.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7T2_GEO_US?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1542406417329",
  },
  {
    id: 21,
    name: "Apple USB-C to Lightning Cable",
    category: "electronics",
    price: "$19.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632956386000",
  },
  {
    id: 22,
    name: "Apple Wireless Charger",
    category: "electronics",
    price: "$49.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1661269793559",
  },

  {
    id: 23,
    name: "Apple Wireless Charging Stand",
    category: "electronics",
    price: "$209.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HR1Z2?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1694792100518",
  },
  {
    id: 24,
    name: "Belkin BOOST↑CHARGE™ PRO",
    category: "electronics",
    price: "$229.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPUA2?wid=890&hei=890&fmt=jpeg&qlt=95&.v=1636763702000",
  },

  {
    id: 25,
    name: "Wireless Charging Dock with",
    category: "electronics",
    price: "$34.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HR1X2?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1699474166241",
  },
  {
    id: 26,
    name: "Wireless Charger Pad with MagSafe",
    category: "electronics",
    price: "$25.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HR1F2?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1699989193117",
  },

  {
    id: 27,
    name: " Wireless Charging Vent Mount",
    category: "electronics",
    price: "$399.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNGW2?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1654124613627",
  },
  {
    id: 28,
    name: "Belkin Auto-Tracking Stand Pro ",
    category: "electronics",
    price: "$159.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HRG52?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1719420393937",
  },

  {
    id: 29,
    name: "Wireless Charging Pad with MagSafe",
    category: "electronics",
    price: "$29.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPU82?wid=890&hei=890&fmt=jpeg&qlt=95&.v=1636763814000",
  },
  {
    id: 30,
    name: "Apple Vision Pro Travel Case",
    category: "electronics",
    price: "$19.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MW2F3_FV445?wid=1420&hei=930&fmt=png-alpha&.v=1706746163585",
  },

  {
    id: 31,
    name: "Magic Keyboard Folio for iPad",
    category: "electronics",

    price: "$749.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDP3?wid=532&hei=582&fmt=png-alpha&.v=1664481446939",
  },
  {
    id: 32,
    name: "Magic Mouse ",
    category: "electronics",

    price: "$519.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3?wid=532&hei=582&fmt=png-alpha&.v=1645138486301",
  },

  {
    id: 33,
    name: "Sony PlayStation DualSense",
    category: "electronics",
    price: "$129.00",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPNG2?wid=532&hei=582&fmt=png-alpha&.v=1665002952548",
  },
];

let cart = [];

function displayProducts(filter = "all") {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  filteredProducts.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.className = "product-item";
    productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productItem);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  document.getElementById("cart-count").textContent = cart.length;
}

document
  .getElementById("category-filter")
  .addEventListener("change", function () {
    displayProducts(this.value);
  });

displayProducts();
