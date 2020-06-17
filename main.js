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
