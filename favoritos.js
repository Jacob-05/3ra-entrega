
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];


function toggleFavorite(button) {
    const productId = button.getAttribute('data-id');

    if (favoritos.includes(productId)) {
        
        favoritos = favoritos.filter(id => id !== productId);
        button.innerHTML = '<svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" class="heart-fill"/></svg>';
    } else {
        
        favoritos.push(productId);
        button.innerHTML = '<svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="orange" class="heart-fill"/></svg>';
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}


function mostrarFavoritos() {
    const favoritosContainer = document.getElementById('favorites');
    favoritosContainer.innerHTML = ''; 

    if (favoritos.length === 0) {
        favoritosContainer.innerHTML = '<p>No hay productos en favoritos.</p>';
        return;
    }

    favoritos.forEach(productId => {
        const product = products[productId];
        if (product) {
            const productElement = document.createElement('div');
            productElement.className = 'product-card';
            productElement.innerHTML = `
                <a href="detallesproducto.html?name=${encodeURIComponent(product.Title)}">
                  <img src="${product.Image}" alt="${product.Title}">
                </a>
                <div class="product-info">
                  <h3>${product.Title}</h3>
                  <p>$ ${product.Price} USD</p>
                  <button class="favorite-button" data-id="${productId}" onclick="toggleFavorite(this)">❤️ En Favoritos</button>
                </div>
            `;
            favoritosContainer.appendChild(productElement);
        }
    });
}


document.addEventListener('DOMContentLoaded', mostrarFavoritos);
