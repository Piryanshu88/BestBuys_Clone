let data = JSON.parse(localStorage.getItem("add-to-cart")) || [];
  console.log("data:", data);

let total = 0;
let Productsprice = 0;

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
    img.setAttribute("src", ele.thumbnail);
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
    price.innerText = `$ ${quan.value * ele.price.current_price}`;
    // console.log(total);
    price.setAttribute("class", "pri");

    // hardcode

    // append

    div.append(img, title, quan, div2, price);
    document.querySelector("#working-div").append(div);

    //product price ;

    let Productprice = document.getElementById("total");
    Productsprice += ele.price.current_price;

    Productprice.innerText = `Product Price :- ${Productsprice.toFixed(2)}`;

    // free

    let Store = document.getElementById("free");
    Store.innerText = "Store Pickup :- FREE";

    // tax
    let tax1 = document.getElementById("tax");
    tax1.innerText = ` Estimated Sales Tax :-  ${"$"}${4.71}`;

    // totalall

    totalall = document.getElementById("totalall");
    total += 1 * ele.price.current_price + 4.71;

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

    Productsprice += ele.price.current_price;
    // console.log(Productsprice);
    Productprice.innerText = `Product Price :- ${Productsprice.toFixed(2)}`;

    // total
    totalall = document.getElementById("totalall");
    total = quan * (ele.price.current_price + 4.71);

    totalall.innerText = `Total Price :- ${total.toFixed(2)}`;
  } else if (quan == 1) {
    // curr

    let Productprice = document.getElementById("total");

    Productsprice -= ele.price.current_price;
    // console.log(Productsprice);
    Productprice.innerText = `Product Price :- ${Productsprice.toFixed(2)}`;

    // total
    totalall = document.getElementById("totalall");
    total -= quan * (ele.price.current_price + 4.71);

    totalall.innerText = `Total Price :- ${total.toFixed(2)}`;
  }
}
