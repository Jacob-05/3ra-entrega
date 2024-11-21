
let producto = {
    Title: "Nike Boys Fleece Hoodie with Kangaroo Pocket and Swoosh Logo",
    Price: 30.00,
    description: "This Nike Boys Fleece Hoodie is perfect for everyday wear. It features a kangaroo pocket, a Swoosh logo, and a comfortable fleece lining.",
    Size: ["S", "M", "L", "XL"],
    Color: ["Negro", "Gris", "Azul"],
    Disponible: 10,
    Photo: "https://raw.githubusercontent.com/juanjoseholguin/Parcial-2/main/Nike%20hoodie.jpg"
    ,const: html = `
    <img src="${producto.Photo}" alt="https://raw.githubusercontent.com/juanjoseholguin/Parcial-2/main/Nike%20hoodie.jpg" style="width: 200px;">`,
  }
  ag
  
  function mostrarProducto() {
    const contenedor = document.getElementById("producto");
    contenedor.innerHTML = `
      <h2>${producto.Title}</h2>
      <p>Price: $${producto.Price}</p>
      <p>Description: ${producto.description}</p>
      <p>Size: ${producto.Size.join(", ")}</p>
      <p>Color: ${producto.Color.join(", ")}</p>
      <p>Disponible: ${producto.Disponible}</p>
      <img src="${producto.Photo}" alt="https://raw.githubusercontent.com/juanjoseholguin/Parcial-2/main/Nike%20hoodie.jpg">

    `;
  }
  
  
  mostrarProducto();