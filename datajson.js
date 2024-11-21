(async function() {
    let products = [];

async function getProducts() {
    try {
        let response = await fetch("https://raw.githubusercontent.com/Jacob-05/3ra-entrega/refs/heads/main/data.json");
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let json = await response.json();
        let data = json["results"];
        parseDataToProducts(data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

function parseDataToProducts(data) {
    products = []; 
    data.forEach(item => {
        let product = new Product(
            item.Title,
            item.Price,
            item.Description,
            item.Size,
            item.Color,
            item.Image
        );
        products.push(product);
    });
    renderAllProducts();
}

function renderAllProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; // Limpiar el contenedor antes de renderizar
    products.forEach((product, index) => {
        productsContainer.innerHTML += product.htmlCard(index);
    });
}

// Llama a la función para obtener productos al cargar el script
getProducts();
})