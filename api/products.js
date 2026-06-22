export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { search = '', category = 'All', hotDeals, trending } = req.query;

  // Mock product data - replace this with your real database/API calls later
  const allProducts = [
    {
      name: "Apple iPhone 15 Pro 256GB",
      price: 999.00,
      store: "Apple Store",
      category: "Tech",
      condition: "New",
      stock: "In Stock",
      deliveryTime: "Next day",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch?wid=5120&hei=2880&fmt=p-jpg",
      link: "https://apple.com",
      hotDeal: true,
      trending: false,
      bnpl: true
    },
    {
      name: "Apple iPhone 15 Pro 256GB",
      price: 949.00,
      store: "Amazon UK",
      category: "Tech",
      condition: "New",
      stock: "Low Stock",
      deliveryTime: "2-3 days",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch?wid=5120&hei=2880&fmt=p-jpg",
      link: "https://amazon.co.uk",
      hotDeal: true,
      trending: false,
      bnpl: true
    },
    {
      name: "Sony PlayStation 5 Console",
      price: 479.00,
      store: "Currys",
      category: "Gaming",
      condition: "New",
      stock: "In Stock",
      deliveryTime: "Free next day",
      image: "https://media.currys.biz/i/currysprod/10203233",
      link: "https://currys.co.uk",
      hotDeal: false,
      trending: true,
      bnpl: true
    },
    {
      name: "Dyson V15 Detect Absolute",
      price: 599.00,
      store: "Dyson",
      category: "Appliances",
      condition: "New",
      stock: "In Stock",
      deliveryTime: "1-2 days",
      image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/447930-01.png",
      link: "https://dyson.co.uk",
      hotDeal: false,
      trending: true,
      bnpl: false
    },
    {
      name: "Samsung 65\" QLED 4K TV",
      price: 799.00,
      store: "Argos",
      category: "Tech",
      condition: "New",
      stock: "In Stock",
      deliveryTime: "Same day",
      image: "https://media.4rgos.it/i/Argos/8148843_R_Z001A",
      link: "https://argos.co.uk",
      hotDeal: true,
      trending: false,
      bnpl: true
    },
    {
      name: "Ninja Foodi MAX Air Fryer",
      price: 149.00,
      store: "Amazon UK",
      category: "Appliances",
      condition: "New",
      stock: "In Stock",
      deliveryTime: "Tomorrow",
      image: "https://m.media-amazon.com/images/I/71--kvB8XJL._AC_SL1500_.jpg",
      link: "https://amazon.co.uk",
      hotDeal: false,
      trending: false,
      bnpl: false
    },
    {
      name: "Apple iPhone 15 Pro 256GB",
      price: 850.00,
      store: "MusicMagpie",
      category: "Tech",
      condition: "Refurbished",
      stock: "In Stock",
      deliveryTime: "3-5 days",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch?wid=5120&hei=2880&fmt=p-jpg",
      link: "https://musicmagpie.co.uk",
      hotDeal: false,
      trending: false,
      bnpl: false
    }
  ];

  let filtered = allProducts;

  // Filter by search
  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(s));
  }

  // Filter by category
  if (category !== 'All') {
    filtered = filtered.filter(p => p.category === category);
  }

  // Filter by hotDeals
  if (hotDeals === 'true') {
    filtered = filtered.filter(p => p.hotDeal);
  }

  // Filter by trending
  if (trending === 'true') {
    filtered = filtered.filter(p => p.trending);
  }

  res.status(200).json(filtered);
}
