export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const { search = '', category = 'All', hotDeals, trending } = req.query;

  const products = [
    {
      name: "Apple iPhone 15 Pro 128GB",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
      category: "Tech",
      description: "Latest iPhone with A17 Pro chip, titanium design, and 48MP camera system.",
      hotDeal: true,
      trending: true,
      store: "Amazon",
      price: 899,
      oldPrice: 999,
      stock: "In Stock",
      link: "https://amazon.co.uk",
      deliveryTime: "Free next day",
      condition: "New",
      bnpl: true
    },
    {
      name: "Apple iPhone 15 Pro 128GB",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
      category: "Tech",
      description: "Latest iPhone with A17 Pro chip, titanium design, and 48MP camera system.",
      hotDeal: false,
      trending: false,
      store: "eBay - New",
      price: 875,
      oldPrice: null,
      stock: "In Stock",
      link: "https://ebay.co.uk",
      deliveryTime: "2-3 days",
      condition: "New",
      bnpl: false
    },
    {
      name: "Apple iPhone 15 Pro 128GB",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
      category: "Tech",
      description: "Latest iPhone with A17 Pro chip, titanium design, and 48MP camera system.",
      hotDeal: false,
      trending: false,
      store: "eBay - Refurbished",
      price: 749,
      oldPrice: 899,
      stock: "Low Stock",
      link: "https://ebay.co.uk",
      deliveryTime: "3-5 days",
      condition: "Refurbished",
      bnpl: false
    },
    {
      name: "Sony PlayStation 5 Console",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
      category: "Gaming",
      description: "Next-gen gaming with 4K graphics, ray tracing, and ultra-fast SSD.",
      hotDeal: true,
      trending: true,
      store: "Currys",
      price: 449,
      oldPrice: 479,
      stock: "In Stock",
      link: "https://currys.co.uk",
      deliveryTime: "Free delivery",
      condition: "New",
      bnpl: true
    },
    {
      name: "Sony PlayStation 5 Console",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
      category: "Gaming",
      description: "Next-gen gaming with 4K graphics, ray tracing, and ultra-fast SSD.",
      hotDeal: false,
      trending: false,
      store: "Argos",
      price: 459,
      oldPrice: null,
      stock: "Low Stock",
      link: "https://argos.co.uk",
      deliveryTime: "Same day",
      condition: "New",
      bnpl: true
    },
    {
      name: "Sony PlayStation 5 Console",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
      category: "Gaming",
      description: "Next-gen gaming with 4K graphics, ray tracing, and ultra-fast SSD.",
      hotDeal: false,
      trending: false,
      store: "eBay - Used",
      price: 399,
      oldPrice: null,
      stock: "In Stock",
      link: "https://ebay.co.uk",
      deliveryTime: "5-7 days",
      condition: "Used",
      bnpl: false
    },
    {
      name: "Dyson V15 Detect Vacuum",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
      category: "Appliances",
      description: "Most powerful cordless vacuum with laser dust detection and LCD screen.",
      hotDeal: true,
      trending: false,
      store: "John Lewis",
      price: 599,
      oldPrice: 699,
      stock: "In Stock",
      link: "https://johnlewis.com",
      deliveryTime: "Free delivery",
      condition: "New",
      bnpl: false
    },
    {
      name: "Dyson V15 Detect Vacuum",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
      category: "Appliances",
      description: "Most powerful cordless vacuum with laser dust detection and LCD screen.",
      hotDeal: false,
      trending: false,
      store: "Very",
      price: 629,
      oldPrice: null,
      stock: "In Stock",
      link: "https://very.co.uk",
      deliveryTime: "Next day",
      condition: "New",
      bnpl: true
    },
    {
      name: "Nike Air Max 270 Trainers",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      category: "Kids",
      description: "Iconic Air Max cushioning with breathable mesh upper.",
      hotDeal: false,
      trending: true,
      store: "JD Sports",
      price: 119,
      oldPrice: 139,
      stock: "In Stock",
      link: "https://jdsports.co.uk",
      deliveryTime: "Free delivery",
      condition: "New",
      bnpl: true
    },
    {
      name: "IKEA Malm Bed Frame Double",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
      category: "Bedroom",
      description: "Minimalist bed frame with 2 storage drawers. White stained oak veneer.",
      hotDeal: false,
      trending: false,
      store: "IKEA",
      price: 179,
      oldPrice: null,
      stock: "In Stock",
      link: "https://ikea.com",
      deliveryTime: "Click & collect",
      condition: "New",
      bnpl: false
    },
    {
      name: "Samsung 55\" QLED 4K TV",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
      category: "Living Room",
      description: "Quantum Dot technology with 100% colour volume and HDR10+.",
      hotDeal: true,
      trending: false,
      store: "Amazon",
      price: 549,
      oldPrice: 699,
      stock: "In Stock",
      link: "https://amazon.co.uk",
      deliveryTime: "Free delivery",
      condition: "New",
      bnpl: true
    },
    {
      name: "Weber Spirit II BBQ",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
      category: "Garden",
      description: "3-burner gas barbecue with GBS cooking system and iGrill 3 ready.",
      hotDeal: false,
      trending: true,
      store: "B&Q",
      price: 399,
      oldPrice: 449,
      stock: "Low Stock",
      link: "https://diy.com",
      deliveryTime: "Home delivery",
      condition: "New",
      bnpl: false
    }
  ];

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
