window.addEventListener("load", function () {
  var name = document.getElementById("name");
  name.addEventListener("keydown", debounce(productSuggestion, 1000));
});

var products = [];

function addProduct() {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var supplier = document.getElementById("supplier").value;
  var img = document.getElementById("image").value;
  var tag = document.getElementById("tag").value;
  tag = tag.split(",");
  var desc = document.getElementById("description").value;
  var mrp = document.getElementById("mrp").value;

  var product = {
    name: name,
    supplier: supplier,
    img: img,
    tags: tag,
    desc: desc,
    mrp: mrp,
  };

  products.push(product);
}

//create order
var orders = [];

function createOrder() {
  var name = document.getElementById("name").value;
  var quantity = document.getElementById("quantity").value;
  var desc = document.getElementById("description");
  var payment = document.getElementById("payment");

  var order = {
    name: name,
    quantity: quantity,
    desc: desc,
    payment: payment,
  };

  orders.push();
}

//suggest product name alreay added in products
function productSuggestion() {
  var name = document.getElementById("name").value;
  var list = products.map(function (product) {
    if (product.name.indexOf(name) != -1) {
      return product.name;
    }
  });
  console.log(name);
}

//general debounce function
function debounce(func, delay) {
  var timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

//generate quotation
var quotationArr = [];

function generateQuotation() {
  event.preventDefault();
  var customerName = document.getElementById("customerName").value;
  var customerAddress = document.getElementById("address").value;
  var companyName = document.getElementById("company").value;
  var compnayAdress = document.getElementById("companyAddress").value;
  var products = document.querySelectorAll(".productName");
  var quantity = document.querySelectorAll(".quantity");
  var desc = document.querySelectorAll(".description");

  var productList = [];
  for (var i = 0; i < products.length; i++) {
    productList.push(products[i].value);
  }

  var quantities = [];
  for (var i = 0; i < quantity.length; i++) {
    quantities.push(quantity[i].value);
  }

  var descList = [];
  for (var i = 0; i < desc.length; i++) {
    descList.push(desc[i].value);
  }

  var quotation = {
    customerName: customerName,
    customerAddress: customerAddress,
    companyName: companyName,
    companyAddress: compnayAdress,
    productList: productList,
    quantities: quantities,
    descList: descList,
  };

  quotationArr.push(quotation);
}

// create product list html layout
var productListBtn = document.getElementById("addProductList");
productListBtn.addEventListener("click", addProductList);

function addProductList() {
  var productsList = document.querySelector(".productsList");
  var list = document.createElement("div");
  list.innerHTML = productsList.innerHTML;
  productsList.append(list);
}

// Add suppliers

var suppliers = [];

function addSuppliers() {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var desc = document.getElementById("description").value;

  var supplier = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    desc: desc,
  };
  suppliers = JSON.parse(window.localStorage.getItem("supplier")) || [];
  suppliers.push(supplier);
  window.localStorage.setItem("supplier", JSON.stringify(suppliers));
}
