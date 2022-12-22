// item array
var itemArray = [
  {
    image: "./images/img-1.png",
    description:
      "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    price: "R$ 2.813,99",
    priceReduced: "R$ 2.599,00",
    credits: "10x de R$ 259,90",
  },
  {
    image: "./images/img-2.jpg",
    description:
      "Monitor Acer 28 IPS, 60 Hz, 4K UHD, HDMI/DisplayPort, VESA, FreeSync - KG282K",
    price: "R$ 2.444,43",
    priceReduced: "R$ 2.199,00",
    credits: "10x de R$ 219,90",
  },
  {
    image: "./images/img-3.png",
    description:
      "MONITOR GAMER SAMSUNG LED CURVO, 27 POL, FULL HD, 240HZ, GSYNC, LC27RG50FQLXZD",
    price: "R$ 3.559,90",
    priceReduced: "R$ 2.587,00",
    credits: "10x de R$ 258,70",
  },
];

// create vars elements
let app = document.getElementById("app");
let itemContainer = document.createElement("section");
let item;
let itemBody;
let itemImg;
let img;
let wishlist;
let itemContent;
let description;
let itemPrices;
let price;
let price_Reduced;
let credits;
let itemBtn;

itemContainer.classList.add("item-container");
app.appendChild(itemContainer);

/// add classes
function classAdd() {
  itemContainer.classList.add("item-container");
  item.classList.add("item");
  itemBody.classList.add("item-body");
  itemImg.classList.add("item-img");
  wishlist.classList.add("wishlist");
  itemContent.classList.add("item-content");
  description.classList.add("item-description");
  itemPrices.classList.add("item-prices");
  price.classList.add("price");
  price_Reduced.classList.add("price-reduced");
  credits.classList.add("credits");
  itemBtn.classList.add("item-btn");
}

//add the html of item
function createItem() {
  item = document.createElement("div");
  itemBody = document.createElement("div");
  itemImg = document.createElement("div");
  img = document.createElement("img");
  wishlist = document.createElement("div");
  itemContent = document.createElement("div");
  description = document.createElement("div");
  itemPrices = document.createElement("div");
  price = document.createElement("p");
  price_Reduced = document.createElement("p");
  credits = document.createElement("p");
  itemBtn = document.createElement("div");
}

// append the created itens in html
function appendHTML() {
  itemContainer.appendChild(item);
  item.appendChild(itemBody);
  itemBody.appendChild(itemImg);
  itemImg.appendChild(wishlist);
  itemImg.appendChild(img);
  itemBody.appendChild(itemContent);
  itemContent.appendChild(description);
  itemContent.appendChild(itemPrices);
  itemPrices.appendChild(price);
  itemPrices.appendChild(price_Reduced);
  itemPrices.appendChild(credits);
  itemContent.appendChild(itemBtn);
}

//load the items

function loadItems() {
  for (let i = 0; i < itemArray.length; i++) {
    createItem();
    classAdd();

    // use array data
    img.src = itemArray[i].image;
    wishlist.innerHTML = `<svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.1494 2.85655C22.5629 2.26797 21.8667 1.80107 21.1003 1.48251C20.334 1.16396 19.5126 1 18.6831 1C17.8535 1 17.0321 1.16396 16.2658 1.48251C15.4994 1.80107 14.8032 2.26797 14.2167 2.85655L12.9997 4.07749L11.7826 2.85655C10.5981 1.66822 8.99152 1.00062 7.31633 1.00062C5.64114 1.00062 4.03455 1.66822 2.85001 2.85655C1.66547 4.04489 1 5.65662 1 7.33718C1 9.01774 1.66547 10.6295 2.85001 11.8178L4.06705 13.0387L12.9997 22L21.9323 13.0387L23.1494 11.8178C23.7361 11.2295 24.2015 10.531 24.519 9.76219C24.8366 8.99339 25 8.16936 25 7.33718C25 6.50499 24.8366 5.68096 24.519 4.91216C24.2015 4.14336 23.7361 3.44486 23.1494 2.85655V2.85655Z" fill="#F2F3F6" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>`;
    wishlist.id = "btn-" + i;
    description.innerHTML = itemArray[i].description;
    price.innerHTML = itemArray[i].price;
    price_Reduced.innerHTML = itemArray[i].priceReduced;
    credits.innerHTML =
      "em até " + `<b>` + itemArray[i].credits + `</b>` + " sem juros";
    itemBtn.innerHTML = "ADICIONAR";
    itemBtn.id = "item-btn-" + i;

    appendHTML();

    // buttons animations
    document.getElementById("btn-" + i).addEventListener("click", function () {
      if ($("#btn-" + i).hasClass("wishlist-checked")) {
        document
          .getElementById("btn-" + i)
          .classList.remove("wishlist-checked");
        $("#btn-" + i).css("background-color", "#E9EBEE");
        $("svg").css("fill", "#FEE5EC");
        $("path").css("stroke", "#1C1C1C");
      } else {
        document.getElementById("btn-" + i).classList.add("wishlist-checked");
        $("#btn-" + i).css("background-color", "#DA4B4F");
        $("svg").css("fill", "#fff");
        $("path").css("stroke", "#DA4B4F");
      }
    });
    document
      .getElementById("item-btn-" + i)
      .addEventListener("click", function () {
        if ($("#item-btn-" + i).hasClass("item-btn-checked")) {
          document
            .getElementById("item-btn-" + i)
            .classList.remove("item-btn-checked");
          document.getElementById("item-btn-" + i).innerHTML = "ADICIONAR";
        } else {
          document
            .getElementById("item-btn-" + i)
            .classList.add("item-btn-checked");
          document.getElementById("item-btn-" + i).innerHTML =
            `<img src="./images/check.png" height="11px" width="16px" /> ` +
            "ADICIONADO";
        }
      });
  }
}

window.onload = function load() {
  loadItems();
};
