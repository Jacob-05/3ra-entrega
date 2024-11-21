let products = []; 

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productIndex = params.get("product"); 

 
  parseDataToProducts(); 

  if (productIndex !== null) {
    const product = products[productIndex]; 

    if (product) {
      document.getElementById("main-img").src = product.Image; 
      document.querySelector("h1").textContent = product.Title; 
      document.querySelector(".price").textContent = `$${product.Price} USD`;
      document.querySelector(".description").textContent = product.Description; 

      const sizeSelect = document.getElementById("size");
      sizeSelect.innerHTML = ''; 
      product.Size.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option); 
      });

      const colorList = document.querySelector(".product-details");
      colorList.innerHTML = ''; 
      product.Color.forEach(color => {
        const li = document.createElement("li");
        li.textContent = `Color: ${color}`;
        colorList.appendChild(li); 
      });
    } else {
      console.error("Producto no encontrado.");
    }
  } else {
    console.error("Índice de producto no proporcionado.");
  }
});


function parseDataToProducts() {
  products = []; 
  data.forEach((item, index) => {
    let product = new Product(
      item.Title,
      item.Price,
      item.description || item.Description,
      item.Size,
      item.Color,
      item.Image
    );
    products.push(product);
  });
}
