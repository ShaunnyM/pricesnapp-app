export default function handler(req, res) {
  // CHANGE pricesnap-21 TO YOUR REAL AMAZON TRACKING ID IF DIFFERENT
  const AMAZON_TAG = 'pricesnap-21'; 
  
  const products = [
    { id: 1, name: 'iPhone 15 Pro Max 256GB', category: 'Tech', price: 1099, oldPrice: 1199, store: 'Amazon', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400', rating: 4.8, hotDeal: true, trending: true, url: `https://www.amazon.co.uk/dp/B0CHX1W1XY?tag=${AMAZON_TAG}`, priceDrop: -100 },
    
    // SHAUN'S NEW IPHONE 15 PRO WITH 3 EBAY AFFILIATE LINKS
    { id: 100, name: 'iPhone 15 Pro 256GB', category: 'Tech', price: 999, oldPrice: 1099, store: 'eBay - New', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400', rating: 4.8, hotDeal: true, trending: true, url: 'https://www.ebay.co.uk/sch/i.html?_nkw=iphone+15+pro+256gb&LH_BIN=1&LH_ItemCondition=1000&LH_PrefLoc=1&mkcid=1&mkrid=710-53481-19255-0&siteid=3&campid=5339157410&customid=pricesnapiphone15pronew&toolid=10001&mkevt=1', priceDrop: -100 },
    { id: 101, name: 'iPhone 15 Pro 256GB', category: 'Tech', price: 849, oldPrice: 999, store: 'eBay - Refurbished', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400', rating: 4.7, hotDeal: true, trending: false, url: 'https://www.ebay.co.uk/sch/i.html?_nkw=iphone+15+pro+256gb&LH_BIN=1&LH_ItemCondition=2000|2010|2020|2030&LH_PrefLoc=1&mkcid=1&mkrid=710-53481-19255-0&siteid=3&campid=5339157410&customid=pricesnapiphone15prorefurb&toolid=10001&mkevt=1', priceDrop: -150 },
    { id: 102, name: 'iPhone 15 Pro 256GB', category: 'Tech', price: 750, oldPrice: 999, store: 'eBay - Auctions', storeStatus: 'orange', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400', rating: 4.6, hotDeal: true, trending: true, url: 'https://www.ebay.co.uk/sch/i.html?_nkw=iphone+15+pro+256gb&LH_Auction=1&LH_PrefLoc=1&mkcid=1&mkrid=710-53481-19255-0&siteid=3&campid=5339157410&customid=pricesnapiphone15proauction&toolid=10001&mkevt=1', priceDrop: -249 },

    { id: 2, name: 'Samsung 55" 4K Smart TV', category: 'Tech', price: 479, oldPrice: 549, store: 'Currys', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400', rating: 4.6, hotDeal: true, trending: false, url: 'https://www.currys.co.uk', priceDrop: -70 },
    { id: 3, name: 'Sony WH-1000XM5 Headphones', category: 'Tech', price: 299, oldPrice: 349, store: 'Argos', storeStatus: 'orange', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400', rating: 4.9, hotDeal: false, trending: true, url: 'https://www.argos.co.uk', priceDrop: -50 },
    { id: 4, name: 'MacBook Air M3 13"', category: 'Tech', price: 999, oldPrice: 1099, store: 'Apple', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', rating: 4.7, hotDeal: false, trending: true, url: 'https://www.apple.com/uk', priceDrop: -100 },
    { id: 6, name: 'Xbox Series X 1TB', category: 'Gaming', price: 429, oldPrice: 449, store: 'Argos', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d797?w=400', rating: 4.8, hotDeal: true, trending: true, url: 'https://www.argos.co.uk', priceDrop: -20 },
    { id: 7, name: 'Nintendo Switch OLED', category: 'Gaming', price: 299, oldPrice: 319, store: 'Amazon', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400', rating: 4.7, hotDeal: false, trending: false, url: `https://www.amazon.co.uk/dp/B098TVDYZ3?tag=${AMAZON_TAG}`, priceDrop: -20 },
    { id: 9, name: 'Dyson V15 Detect Vacuum', category: 'Appliances', price: 549, oldPrice: 599, store: 'Dyson', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400', rating: 4.8, hotDeal: true, trending: true, url: 'https://www.dyson.co.uk', priceDrop: -50 },
    { id: 10, name: 'Ninja Foodi Air Fryer 7.5L', category: 'Appliances', price: 129, oldPrice: 159, store: 'Amazon', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400', rating: 4.6, hotDeal: true, trending: false, url: `https://www.amazon.co.uk/dp/B09Y5P1RLW?tag=${AMAZON_TAG}`, priceDrop: -30 },
    { id: 13, name: 'Emma Original Mattress King', category: 'Bedroom', price: 429, oldPrice: 499, store: 'Emma', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400', rating: 4.6, hotDeal: true, trending: false, url: 'https://www.emma-sleep.co.uk', priceDrop: -70 },
    { id: 16, name: 'IKEA EKTORP 3-Seat Sofa', category: 'Living Room', price: 295, oldPrice: 329, store: 'IKEA', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', rating: 4.4, hotDeal: true, trending: false, url: 'https://www.ikea.com/gb', priceDrop: -34 },
    { id: 19, name: 'LEGO Star Wars Millennium Falcon', category: 'Kids', price: 149, oldPrice: 169, store: 'LEGO', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d-f935?w=400', rating: 4.9, hotDeal: true, trending: true, url: 'https://www.lego.com', priceDrop: -20 },
    { id: 22, name: 'Weber Spirit BBQ', category: 'Garden', price: 349, oldPrice: 399, store: 'B&Q', storeStatus: 'green', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', rating: 4.7, hotDeal: true, trending: false, url: 'https://www.diy.com', priceDrop: -50 }
  ];
  
  const search = req.query.search?.toLowerCase() || '';
  const category = req.query.category || 'All';
  const hotDeals = req.query.hotDeals === 'true';
  const trending = req.query.trending === 'true';
  
  let filtered = products;
  if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
  if (category !== 'All') filtered = filtered.filter(p => p.category === category);
  if (hotDeals) filtered = filtered.filter(p => p.hotDeal === true);
  if (trending) filtered = filtered.filter(p => p.trending === true);
  
  res.status(200).json(filtered);
}
