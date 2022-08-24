let arr = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462988_sd.jpg;maxHeight=640;maxWidth=550",
    dis: "Chefman TurboFry 9 Qt. Digital Touch Dual Basket Air Fryer - Matte Black",
    price: "$69.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6390/6390676_sd.jpg;maxHeight=640;maxWidth=550",
    dis: "GE - 250 Sq. Ft. 6,000 BTU Window Air Conditioner with Remote - White",
    price: "$189.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450270_sd.jpg;maxHeight=640;maxWidth=550",
    dis: "Filtrete - 150 Sq. Ft. Smart Air Purifier for Medium Rooms - White",
    price: "$209.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409000_sd.jpg;maxHeight=640;maxWidth=550",
    dis: "Belkin - SoundForm Elite Hi-Fi Smart Speaker + Wireless Charger with Google Assistant - Black",
    price: "$89.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6269/6269220_sd.jpg;maxHeight=640;maxWidth=550",
    dis: "Compustar - 2-Way Remote Start System - Installation Required",
    price: "$299.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6348/6348375_sd.jpg;maxHeight=640;maxWidth=550",
    dis: "Altec Lansing - RockBox XL Portable Bluetooth Speaker - Steel Gray",
    price: "$129.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464740cv11d.jpg;maxHeight=640;maxWidth=550",
    dis: "Bella Pro Series - 5-qt. All-in-One Electric Skillet - Matte Black",
    price: "$99.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6709/6709101cv11d.jpg;maxHeight=640;maxWidth=550",
    dis: "Cuisinart - 12 PC Knife Set - Multi",
    price: "$12.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6463/6463872_sd.jpg;maxHeight=640;maxWidth=550",
    dis: "WD - easystore 1TB External USB 3.0 Portable SSD",
    price: "$89.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502590_sd.jpg;maxHeight=640;maxWidth=550",
    dis: "Vankyo - Leisure 470 Pro Native 1080P Projector, Full HD 5G Wireless Mini Projector - White",
    price: "$139.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6359/6359271_sd.jpg;maxHeight=640;maxWidth=550",
    dis: "Shark Rotator DuoClean with Self-Cleaning Brushroll Lift-Away Pro Upright Vacuum - Sage Green",
    price: "$219.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510188_rd.jpg;maxHeight=640;maxWidth=550",
    dis: "Hover-1 - Blast Electric Self-Balancing Scooter w/3 mi Max Operating Range & 7 mph Max Speed - Black",
    price: "$89.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6463/6463512_rd.jpg;maxHeight=640;maxWidth=550",
    dis: "Philips Norelco - Series 3000 Rechargeable Wet/Dry Electric Shaver - Modern Steel Metallic",
    price: "$39.99",
  },
];

let container = document.getElementById("products");
function call(arr) {
  arr.forEach((el) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image;
    let p = document.createElement("p");
    p.innerText = el.dis;
    let diss = document.createElement("h4");
    diss.innerText = `Save $30`;
    let price = document.createElement("h2");
    price.innerText = el.price;
    let btn = document.createElement("button");
    btn.innerText = `Add to Cart`;
    div.append(img, p, price, btn);
    container.append(div);
  });
}
call(arr);

let arr1 = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/FeaturedDeals_Blue_Solid_Lg_RGB-104799.png;maxHeight=140;maxWidth=140",
    title: "Featured Deals",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74179_BTS-icon-af0937da-e729-4ad0-bb3d-ea559a996e78.png;maxHeight=140;maxWidth=140",
    title: "Back to School",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6504/6504387_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Laptops and computers",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501543_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Tv & Projectors",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6466/6466883_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Video Games",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443321_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Apple",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464698cv11d.jpg;maxHeight=140;maxWidth=140",
    title: "Tablets",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443974_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Pc Gaming ",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510541_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Hedphones ",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6168/6168626_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Major appliances ",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6357/6357404_rd.jpg;maxHeight=140;maxWidth=140",
    title: "Small kitchen Appliances",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494419_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Cell phones",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72491_totaltechnavicon-3ca79aa6-0c73-400f-b724-cdde58f413ca.jpg;maxHeight=140;maxWidth=140",
    title: "Totla tech members Deal",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6213/6213100_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Cameras & camcorder",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420000_rd.jpg;maxHeight=140;maxWidth=140",
    title: "Sound Bars and Speakers",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428878_rd.jpg;maxHeight=140;maxWidth=140",
    title: "Smart Home security & wifi",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/6510873_TopDeals-Icon-5444f6bb-9fce-477b-b9e1-955f517f47cc.jpg;maxHeight=140;maxWidth=140",
    title: "Wearable Technology",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6498/6498058_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Floor care and Home air quality",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6507/6507704_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Movies Music & Straming Subscription",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6503/6503996ld.jpg;maxHeight=140;maxWidth=140",
    title: "Toys games and collectible",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6319/6319479_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Car electronics adn gps",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6400/6400555cv11d.jpg;maxHeight=140;maxWidth=140",
    title: "Health fitness",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501632_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Home outdoor",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6496/6496495ld.jpg;maxHeight=140;maxWidth=140",
    title: "Personal care & Beauty",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6480/6480937_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Video streaming media player",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6489/6489376_rd.jpg;maxHeight=140;maxWidth=140",
    title: "Electric Transportation & Recreation",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6444/6444370_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Baby care",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6370/6370209_sd.jpg;maxHeight=140;maxWidth=140",
    title: "Gift cards",
  },
];
let container1 = document.getElementById("topdeals");

function call1(arr1) {
  arr1.forEach(({ image, title }) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = image;
    let p = document.createElement("a");
    p.innerText = title;
    div.append(img, p);
    container1.append(div);
  });
}
call1(arr1);
