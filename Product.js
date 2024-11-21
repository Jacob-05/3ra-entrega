class Product {
  constructor(Title, Price, Description, Size, Color, Image) {
    this.Title = Title;
    this.Price = Price;
    this.Description = Description;
    this.Size = Size;
    this.Color = Color;
    this.Image = Image;
  }

  htmlCard(pos) {
    const isFavorited = favoritos.includes(pos.toString()); 

    return `
      <div class="product-card">
        <a href="#">
          <img src="${this.Image}" alt="${this.Title}">
        </a>
        <div class="product-info">
          <h3>${this.Title}</h3>
          <p>$ ${this.Price} USD</p>
        </div>
        <div class="actions">
          <button class="heart-button" data-id="${pos}" onclick="toggleFavorite(this)">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${isFavorited ? 'orange' : 'none'}" class="heart-fill"/>
            </svg>
          </button>
          <a href="#" onclick="productselected(${pos})" class="button-ver">Ver detalles</a>
        </div>
      </div>
    `;
  }
}

  



