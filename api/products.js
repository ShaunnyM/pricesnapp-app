export default function handler(req, res) {
  const products = [
    {
      id: 1, name: "iPhone 15 Pro 256GB", category: "Tech", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
      description: "Apple iPhone 15 Pro with A17 Pro chip", isHotDeal: true, isTrending: true,
      prices: [
        { store: "Amazon", price: 849, oldPrice: 999, url: "https://amazon.co.uk/dp/B0CHX1W1XY?tag=YOUR-AWIN-ID", storeStatus: "green", condition: "new", delivery: "Tomorrow", stock: "In Stock", bnpl: ["Pay Monthly"] },
        { store: "Currys", price: 849, oldPrice: 999, url: "https://currys.co.uk/gbuk/phones/iphone-15-pro", storeStatus: "green", condition: "new", delivery: "2 days", stock: "In Stock", bnpl: ["Klarna", "PayPal Pay in 3"] },
        { store: "Argos", price: 879, oldPrice: 999, url: "https://argos.co.uk/product/12345", storeStatus: "green", condition: "new", delivery: "1 day", stock: "In Stock", bnpl: ["Klarna", "Clearpay"] },
        { store: "eBay - New", price: 750, oldPrice: 999, url: "https://ebay.co.uk/itm/123?campid=5339157410", storeStatus: "green", condition: "new", delivery: "1-3 days", stock: "In Stock", bnpl: ["Klarna", "Clearpay"] },
        { store: "eBay - Refurbished", price: 699, oldPrice: 999, url: "https://ebay.co.uk/itm/456?campid=5339157410", storeStatus: "green", condition: "refurbished", delivery: "2-4 days", stock: "Certified Refurb", bnpl: ["Klarna"] },
        { store: "eBay - Auction", price: 620, url: "https://ebay.co.uk/itm/789?campid=5339157410", storeStatus: "orange", condition: "auction", delivery: "3-5 days", stock: "Auction", bnpl: [] },
        { store: "eBay - Used", price: 650, oldPrice: 999, url: "https://ebay.co.uk/itm/101?campid=5339157410", storeStatus: "green", condition: "used", delivery: "2-3 days", stock: "Used - Good", bnpl: ["Clearpay"] },
        { store: "Apple", price: 999, url: "https://apple.com/uk/iphone-15-pro", storeStatus: "green", condition: "new", delivery: "1-2 days", stock: "In Stock", bnpl: ["0% Finance"] },
        { store: "CEX", price: 620, oldPrice: 999, url: "https://uk.webuy.com/product/123", storeStatus: "green", condition: "used", delivery: "3 days", stock: "Grade A", bnpl: [] }
      ]
    },
    {
      id: 2, name: "Ninja Foodi Air Fryer 7.5L", category: "Appliances", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400",
      description: "9-in-1 Air Fryer", isHotDeal: true, isTrending: false,
      prices: [
        { store: "Amazon", price: 129, oldPrice: 179, url: "#", storeStatus: "green", condition: "new", delivery: "Tomorrow", stock: "In Stock", bnpl: ["Pay Monthly"] }
      ]
    },
    {
      id: 3, name: "Emma Original Mattress King", category: "Bedroom", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400",
      description: "Award-winning mattress", isHotDeal: true, isTrending: false,
      prices: [
        { store: "Emma", price: 429, oldPrice: 599, url: "#", storeStatus: "green", condition: "new", delivery: "3 days", stock: "In Stock", bnpl: ["Klarna"] }
      ]
    },
    {
      id: 4, name: "IKEA EKTORP 3-Seat Sofa", category: "Living Room", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
      description: "Comfortable 3-seat sofa", isHotDeal: true, isTrending: false,
      prices: [
        { store: "IKEA", price: 295, oldPrice: 349, url: "#", storeStatus: "green", condition: "new", delivery: "5 days", stock: "In Stock", bnpl: [] }
      ]
    },
    {
      id: 5, name: "LEGO Star Wars Millennium Falcon", category: "Kids", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400",
      description: "Ultimate Collector Series", isHotDeal: true, isTrending: true,
      prices: [
        { store: "LEGO", price: 149, oldPrice: 199, url: "#", storeStatus: "green", condition: "new", delivery: "2 days", stock: "In Stock", bnpl: [] }
      ]
    },
    {
      id: 6, name: "Sony WH-1000XM5", category: "Tech", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
      description: "Wireless Noise Cancelling Headphones", isHotDeal: false, isTrending: true,
      prices: [
        { store: "Amazon", price: 279, oldPrice: 349, url: "#", storeStatus: "green", condition: "new", delivery: "Tomorrow", stock: "In Stock", bnpl: ["Pay Monthly"] },
        { store: "eBay - Refurbished", price: 229, oldPrice: 349, url: "#", storeStatus: "green", condition: "refurbished", delivery: "2-4 days", stock: "Certified Refurb", bnpl: ["Klarna"] }
      ]
    }
  ];
  res.status(200).json({ products });
}
