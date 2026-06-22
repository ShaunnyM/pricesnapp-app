export default function handler(req, res) {
  const { search = '', category = 'All', hotDeals, trending } = req.query;

  // Demo product database
  const products = [
    {
      id: 1,
      name: "Apple iPhone 15 Pro 128GB",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
      category: "Tech",
      description: "Latest iPhone with A17 Pro chip, titanium design, and 48MP camera system.",
      hotDeal: true,
      trending: true,
      store: "Amazon",
      price: 899,
      oldPrice: 999,
      storeStatus: "green",
      url: "https://amazon.co.uk",
      delivery: "Free next day",
      stock: "In Stock",
      condition: "new"
    },
    {
      id: 2,
      name: "Apple iPhone 15 Pro 128GB",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
      category: "Tech",
      description: "Latest iPhone with A17 Pro chip, titanium design, and 48MP camera system.",
      hotDeal: false,
      trending: false,
      store: "eBay - New",
      price: 875,
      oldPrice: null,
      storeStatus: "green",
      url: "https://ebay.co.uk",
      delivery: "2-3 days",
      stock: "In Stock",
      condition: "new"
    },
    {
      id: 3,
      name: "Apple iPhone 15 Pro 128GB",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
      category: "Tech",
      description: "Latest iPhone with A17 Pro chip, titanium design, and 48MP camera system.",
      hotDeal: false,
      trending: false,
      store: "eBay - Refurbished",
      price: 749,
      oldPrice: 899,
      storeStatus: "orange",
      url: "https://ebay.co.uk",
      delivery: "3-5 days",
      stock: "Refurbished",
      condition: "refurbished"
    },
    {
      id: 4,
      name: "Sony PlayStation 5 Console",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
      category: "Gaming",
      description: "Next-gen gaming with 4K graphics, ray tracing, and ultra-fast SSD.",
      hotDeal: true,
      trending: true,
      store: "Currys",
      price: 449,
      oldPrice: 479,
      storeStatus: "green",
      url: "https://currys.co.uk",
      delivery: "Free delivery",
      stock: "Low Stock",
      condition: "new"
    },
    {
      id: 5,
      name: "Sony PlayStation 5 Console",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
      category: "Gaming",
      description: "Next-gen gaming with 4K graphics, ray tracing, and ultra-fast SSD.",
      hotDeal: false,
      trending: false,
      store: "Argos",
      price: 459,
      oldPrice: null,
      storeStatus: "orange",
      url: "https://argos.co.uk",
      delivery: "Same day",
      stock: "In Stock",
      condition: "new"
    },
    {
      id: 6,
      name: "Sony PlayStation 5 Console",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
      category: "Gaming",
      description: "Next-gen gaming with 4K graphics, ray tracing, and ultra-fast SSD.",
      hotDeal: false,
      trending: false,
      store: "eBay - Used",
      price: 399,
      oldPrice: null,
      storeStatus: "red",
      url: "https://ebay.co.uk",
      delivery: "5-7 days",
      stock: "Used",
      condition: "used"
    },
    {
      id: 7,
      name: "Dyson V15 Detect Vacuum",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
      category: "Appliances",
      description: "Most powerful cordless vacuum with laser dust detection and LCD screen.",
      hotDeal: true,
      trending: false,
      store: "John Lewis",
      price: 599,
      oldPrice: 699,
      storeStatus: "green",
      url: "https://johnlewis.com",
      delivery: "Free delivery",
      stock: "In Stock",
      condition: "new"
    },
    {
      id: 8,
      name: "Dyson V15 Detect Vacuum",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
      category: "Appliances",
      description: "Most powerful cordless vacuum with laser dust detection and LCD screen.",
      hotDeal: false,
      trending: false,
      store: "Very",
      price: 629,
      oldPrice: null,
      storeStatus: "green",
      url: "https://very.co.uk",
      delivery: "Next day",
      stock: "In Stock",
      condition: "new"
    },
    {
      id: 9,
      name: "Dyson V15 Detect Vacuum",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
      category: "Appliances",
      description: "Most powerful cordless vacuum with laser dust detection and LCD screen.",
      hotDeal: false,
      trending: false,
      store: "eBay - Auction",
      price: 450,
      oldPrice: null,
      storeStatus: "orange",
      url: "https://ebay.co.uk",
      delivery: "Auction ends 2d",
      stock: "Bidding",
      condition: "auction"
    },
    {
      id: 10,
      name: "Nike Air Max 270 Trainers",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      category: "Kids",
      description: "Iconic Air Max cushioning with breathable mesh upper.",
      hotDeal: false,
      trending: true,
      store: "JD Sports",
      price: 119,
      oldPrice: 139,
      storeStatus: "green",
      url: "https://jdsports.co.uk",
      delivery: "Free delivery",
      stock: "In Stock",
      condition: "new"
    },
    {
      id: 11,
      name: "IKEA Malm Bed Frame Double",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
      category: "Bedroom",
      description: "Minimalist bed frame with 2 storage drawers. White stained oak veneer.",
      hotDeal: false,
      trending: false,
      store: "IKEA",
      price: 179,
      oldPrice: null,
      storeStatus: "green",
      url: "https://ikea.com",
      delivery: "Click & collect",
      stock: "In Stock",
      condition: "new"
    },
    {
      id: 12,
      name: "Samsung 55\" QLED 4K TV",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
      category: "Living Room",
      description: "Quantum Dot technology with 100% colour volume and HDR10+.",
      hotDeal: true,
      trending: false,
      store: "Amazon",
      price: 549,
      oldPrice: 699,
      storeStatus: "green",
      url: "https://amazon.co.uk",
      delivery: "Free delivery",
      stock: "In Stock",
      condition: "new"
    },
    {
      id: 13,
      name: "Weber Spirit II BBQ",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
      category: "Garden",
      description: "3-burner gas barbecue with GBS cooking system and iGrill 3 ready.",
      hotDeal: false,
      trending: true,
      store: "B&Q",
      price: 399,
      oldPrice: 449,
      storeStatus: "orange",
      url: "https://diy.com",
      delivery: "Home delivery",
      stock: "In Stock",
      condition: "new"
    }
  ];

  // Filter logic
  let filtered = products;

  if (search) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category !== 'All') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (hotDeals === 'true') {
    filtered = filtered.filter(p => p.hotDeal);
  }

  if (trending === 'true') {
    filtered = filtered.filter(p => p.trending);
  }

  res.status(200).json(filtered);
}
