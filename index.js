let products = [];

function parseDataToProducts() {
  const productsContainer = document.getElementById("products");

  if (!productsContainer) {
    console.error("Element with id 'products' not found.");
    return;
  }

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
    productsContainer.innerHTML += product.htmlCard(index);
  });
}

function filterProducts(searchTerm) {
  const productsContainer = document.getElementById("products");

  if (!productsContainer) {
    console.error("Element with id 'products' not found.");
    return;
  }

  const filtered = products.filter(product =>
    product.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  productsContainer.innerHTML = "";
  filtered.forEach((product, index) => {
    productsContainer.innerHTML += product.htmlCard(index);
  });
}

document.querySelector(".search-bar input").addEventListener("input", (event) => {
  filterProducts(event.target.value);
});

// Función productselected definida globalmente
function productselected(pos) {
  const selectedProduct = products[pos];
  window.location.href = `detallesproducto.html?name=${encodeURIComponent(selectedProduct.Title)}`;
}

document.addEventListener("DOMContentLoaded", function() {
  parseDataToProducts();
});
