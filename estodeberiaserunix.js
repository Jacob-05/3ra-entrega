let products = []

function parsedataToProducts() {
    for  (let  i = 0; i < data.length; i++) {
        let map  = data [i];
        let  product = new  Product(map["Title"], map["Price"], map["Description"], map["Size"], map["Color"], map["Image"], map["CategoryName"]);
        products.push(product);

        
}
}

function renderAllProducts() {
    let container =  document.getElementById("products");
    for  (let i = 0; i < products.length; i++) {
        let product = products[i];
        container.innerHTML  += product.htmlCard();


    }
}

function productselected(Pos) {
    let productAtPos = products[Pos];
    window.location = "./detalleproducto.html?name=" +  productAtPos.title
    

}


parsedataToProducts()
renderAllProducts()