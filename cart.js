let data = JSON.parse(localStorage.getItem("add-to-cart")) || [];
  // console.log("data:", data);

let total = 0;
let Productsprice = 0;

// let data = [
//   {
//     asin: "B077QWM132",
//     title:
//       "(Renewed) Apple MacBook Pro 13in Core i5 Retina 2.7GHz (MF840LL/A), 8GB Memory, 256GB Solid State Drive",
//     image: "https://m.media-amazon.com/images/I/718L2WEaryL._AC_UY218_.jpg",
//     full_link: "https://www.amazon.com/dp/B077QWM132/?psc=1",
//     prices: {
//       current_price: 469.99,
//       previous_price: 499,
//       currency: "$",
//     },
//     reviews: {
//       total_reviews: 1088,
//       stars: 4.3,
//     },
//     prime: false,
//     sponsored: false,
//     amazon_choice: false,
//     out_of_stock: false,
//   },
//   {
//     asin: "B09JQL8KP9",
//     title:
//       "2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Silver",
//     image: "https://m.media-amazon.com/images/I/61cCf94xIEL._AC_UY218_.jpg",
//     full_link: "https://www.amazon.com/dp/B09JQL8KP9/?psc=1",
//     prices: {
//       current_price: 1999,
//       previous_price: -1,
//       currency: "$",
//     },
//     reviews: {
//       total_reviews: 143,
//       stars: 4.7,
//     },
//     prime: false,
//     sponsored: false,
//     amazon_choice: false,
//     out_of_stock: false,
//   },
//   {
//     asin: "B07ZFZ33SK",
//     title:
//       "Apple Macbook Pro MJLQ2LL/A 15-inch Laptop, Intel Core i7 Processor, 16GB RAM, 256GB SSD, Mac OS X (Renewed)",
//     image: "https://m.media-amazon.com/images/I/81VbWDN53oL._AC_UY218_.jpg",
//     full_link: "https://www.amazon.com/dp/B07ZFZ33SK/?psc=1",
//     prices: {
//       current_price: 729.99,
//       previous_price: -1,
//       currency: "$",
//     },
//     reviews: {
//       total_reviews: 405,
//       stars: 4.3,
//     },
//     prime: true,
//     sponsored: false,
//     amazon_choice: false,
//     out_of_stock: false,
//   },
//   {
//     asin: "B07MWJBFVM",
//     title:
//       "Apple MacBook Pro 13 MD101LL/A (4GB RAM, 500GB HD, macOS 10.13) - 1 Pack (Refurbished)",
//     image: "https://m.media-amazon.com/images/I/71P25wQd49L._AC_UY218_.jpg",
//     full_link: "https://www.amazon.com/dp/B07MWJBFVM/?psc=1",
//     prices: {
//       current_price: 324.72,
//       previous_price: -1,
//       currency: "$",
//     },
//     reviews: {
//       total_reviews: 366,
//       stars: 3.8,
//     },
//     prime: false,
//     sponsored: false,
//     amazon_choice: false,
//     out_of_stock: false,
//   },
//   {
//     asin: "B0795941T3",
//     title:
//       "Apple MacBook Pro 13.3-Inch Laptop 2.6GHz (MGX72LL/A) Retina, 8GB Memory, 256GB Solid State Drive (Renewed)",
//     image: "https://m.media-amazon.com/images/I/315CQ1KmlwL._AC_UY218_.jpg",
//     full_link: "https://www.amazon.com/dp/B0795941T3/?psc=1",
//     prices: {
//       current_price: 549,
//       previous_price: -1,
//       currency: "$",
//     },
//     reviews: {
//       total_reviews: 1469,
//       stars: 4.2,
//     },
//     prime: true,
//     sponsored: false,
//     amazon_choice: false,
//     out_of_stock: false,
//   },
// ];

if (data == "") {
  let container = document.querySelector("#working-div");
  let hh = document.createElement("h2");
  hh.innerText = "Your list is currently empty";
  container.append(hh);
} else {
  appenddata(data);
}

function appenddata(data) {
  //   document.getElementById("bb2").innerHTML = "";
  total = 0;
  Productsprice = 0;
  document.querySelector("#working-div").innerHTML = "";

  data.forEach((ele, i) => {
    let div = document.createElement("div");
    // div.style.display = "flex";
    // div.style.margin = "15px";

    // Product image
    let img = document.createElement("img");
    img.setAttribute("src", ele.image);
    // img.style.width = "10%";

    //Product title
    let title = document.createElement("p");
    title.innerText = ele.title;
    title.setAttribute("class", "hell");

    //Quantity
    let quan = document.createElement("select");
    let opt1 = document.createElement("option");
    opt1.innerText = "Quanitity";
    let opt = document.createElement("option");
    opt.innerText = 1;
    opt.value = 1;
    let opt2 = document.createElement("option");
    opt2.innerText = 2;
    opt2.value = 2;
    quan.setAttribute("id", "bus");

    quan.append(opt, opt2);

    quan.addEventListener("change", function () {
      let quu = document.getElementById("bus").value;
      sumhow(ele, quu);
    });

    //remove

    let div2 = document.createElement("div");
    div2.setAttribute("class", "div2");
    let remove = document.createElement("p");
    remove.innerText = "Remove";

    remove.addEventListener("click", function () {
      Rmovedata(ele, i);
    });

    // let save = document.createElement("p");
    // save.innerText = "Save";

    // save.addEventListener("click", function () {
    //   console.log("Save");
    // });

    div2.append(remove);

    //Price of Products

    let price = document.createElement("p");
    price.innerText = `$ ${quan.value * ele.prices.current_price}`;
    // console.log(total);
    price.setAttribute("class", "pri");

    // hardcode

    // append

    div.append(img, title, quan, div2, price);
    document.querySelector("#working-div").append(div);

    //product price ;

    let Productprice = document.getElementById("total");
    Productsprice += ele.prices.current_price;

    Productprice.innerText = `Product Price :- ${Productsprice.toFixed(2)}`;

    // free

    let Store = document.getElementById("free");
    Store.innerText = "Store Pickup :- FREE";

    // tax
    let tax1 = document.getElementById("tax");
    tax1.innerText = ` Estimated Sales Tax :-  ${"$"}${4.71}`;

    // totalall

    totalall = document.getElementById("totalall");
    total += 1 * ele.prices.current_price + 4.71;

    totalall.innerText = `Total Price :- ${total.toFixed(2)}`;
  });
}

function Rmovedata(ele, i) {
  data.splice(i, 1);
  localStorage.setItem("add-to-cart", data);
  appenddata(data);
}

function sumhow(ele, quan) {
  // console.log('quan:', quan)

  if (quan == 2) {
    // curr

    let Productprice = document.getElementById("total");

    Productsprice += ele.prices.current_price;
    // console.log(Productsprice);
    Productprice.innerText = `Product Price :- ${Productsprice.toFixed(2)}`;

    // total
    totalall = document.getElementById("totalall");
    total = quan * (ele.prices.current_price + 4.71);

    totalall.innerText = `Total Price :- ${total.toFixed(2)}`;
  } else if (quan == 1) {
    // curr

    let Productprice = document.getElementById("total");

    Productsprice -= ele.prices.current_price;
    // console.log(Productsprice);
    Productprice.innerText = `Product Price :- ${Productsprice.toFixed(2)}`;

    // total
    totalall = document.getElementById("totalall");
    total -= quan * (ele.prices.current_price + 4.71);

    totalall.innerText = `Total Price :- ${total.toFixed(2)}`;
  }
}
