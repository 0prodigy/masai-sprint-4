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
