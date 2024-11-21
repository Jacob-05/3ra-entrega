const params = new URLSearchParams(window.location.search);
const namefromUrl = params.get('name');

function getProduct(name) {
  for (let i = 0; i < data.length; i++) {
    let map = data[i];
    if (map["Title"] === name) {
      let product = new Product(map["Title"], map["Price"], map["Description"], map["Size"], map["Color"], map["Image"], map["CategoryName"]);
      return product;
    }
  }
  return null;
}

function renderProduct() {
  let productt = getProduct(namefromUrl);

  if (productt) {
    let h1Title = document.getElementById("title");
    if (h1Title) h1Title.innerHTML = productt.Title;

    let h3Title = document.getElementById("Price");
    if (h3Title) h3Title.innerHTML = `$${productt.Price} USD`; 

    let pDescription = document.getElementById("Description");
    if (pDescription) pDescription.innerHTML = productt.Description;

    let mainImg = document.getElementById("main-img");
    if (mainImg) mainImg.src = productt.Image;
  } else {
    console.log("Product not found");
  }
}

window.onload = renderProduct;
