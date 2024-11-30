const products = {
    "Tênis": [
      { id: 1, name: "Tênis Running Pro", price: 299.99 },
      { id: 2, name: "Tênis Casual", price: 199.99 },
      { id: 3, name: "Tênis Esportivo", price: 249.99 },
      { id: 4, name: "Tênis Fashion", price: 179.99 },
      { id: 5, name: "Tênis Premium", price: 349.99 },
      { id: 6, name: "Tênis de Corrida", price: 399.99 },
      { id: 7, name: "Tênis Leve", price: 149.99 },
      { id: 8, name: "Tênis Casual Colorido", price: 199.99 },
      { id: 9, name: "Tênis Infantil", price: 99.99 },
      { id: 10, name: "Tênis Retro", price: 219.99 },
      { id: 11, name: "Tênis Skate", price: 259.99 },
      { id: 12, name: "Tênis Caminhada", price: 179.99 },
      { id: 12, name: "Tenis do Luan", price: 20.00},
    ],
    "Camisetas": [
      { id: 11, name: "Camiseta Básica Branca", price: 49.99 },
      { id: 12, name: "Camiseta Estampada", price: 69.99 },
      { id: 13, name: "Camiseta Polo", price: 89.99 },
      { id: 14, name: "Camiseta de Algodão", price: 39.99 },
      { id: 15, name: "Camiseta Listrada", price: 59.99 },
      { id: 16, name: "Camiseta Slim Fit", price: 79.99 },
      { id: 17, name: "Camiseta Oversized", price: 99.99 },
      { id: 18, name: "Camiseta Infantil", price: 29.99 },
      { id: 19, name: "Camiseta Longline", price: 89.99 },
      { id: 20, name: "Camiseta Esportiva", price: 59.99 },
      { id: 21, name: "Camiseta Fluor", price: 59.99 },
      { id: 22, name: "Camiseta Manga Longa", price: 69.99 },
    ],
    "Bermudas": [
      { id: 21, name: "Bermuda Jeans", price: 79.99 },
      { id: 22, name: "Bermuda Moletom", price: 69.99 },
      { id: 23, name: "Bermuda Chino", price: 89.99 },
      { id: 24, name: "Bermuda Praia", price: 59.99 },
      { id: 25, name: "Bermuda Cargo", price: 99.99 },
      { id: 26, name: "Bermuda Slim", price: 89.99 },
      { id: 27, name: "Bermuda Infantil", price: 49.99 },
      { id: 28, name: "Bermuda Estampada", price: 79.99 },
      { id: 29, name: "Bermuda Esportiva", price: 69.99 },
      { id: 30, name: "Bermuda Casual", price: 89.99 },
      { id: 31, name: "Bermuda Jeans Claro", price: 79.99 },
      { id: 32, name: "Bermuda Surfe", price: 69.99 },
    ],
    "Bonés": [
      { id: 31, name: "Boné Trucker", price: 39.99 },
      { id: 32, name: "Boné Esportivo", price: 59.99 },
      { id: 33, name: "Boné Snapback", price: 49.99 },
      { id: 34, name: "Boné Liso", price: 29.99 },
      { id: 35, name: "Boné de Couro", price: 79.99 },
      { id: 36, name: "Boné Infantil", price: 19.99 },
      { id: 37, name: "Boné Aba Curva", price: 39.99 },
      { id: 38, name: "Boné Estampado", price: 49.99 },
      { id: 39, name: "Boné Colorido", price: 39.99 },
      { id: 40, name: "Boné Clássico", price: 59.99 },
      { id: 41, name: "Boné Militar", price: 49.99 },
      { id: 42, name: "Boné Vintage", price: 59.99 },
    ],
    "Acessórios": [
      { id: 41, name: "Relógio Digital", price: 199.99 },
      { id: 42, name: "Cinto de Couro", price: 99.99 },
      { id: 43, name: "Óculos de Sol", price: 149.99 },
      { id: 44, name: "Carteira", price: 59.99 },
      { id: 45, name: "Pulseira Masculina", price: 29.99 },
      { id: 46, name: "Bolsa de Ombro", price: 249.99 },
      { id: 47, name: "Meias Esportivas", price: 19.99 },
      { id: 48, name: "Chapéu Panamá", price: 89.99 },
      { id: 49, name: "Luvas de Inverno", price: 39.99 },
      { id: 50, name: "Cachecol", price: 49.99 },
      { id: 51, name: "Bracelete", price: 69.99 },
      { id: 52, name: "Anel Masculino", price: 49.99 },
    ]
};

function loadProducts() {
    const container = document.getElementById('produtos');

    for (const category in products) {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';

        // Título
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.innerText = category;
        categoryContainer.appendChild(categoryTitle);

        // container
        const productContainer = document.createElement('div');
        productContainer.className = 'produtos-container';

      //for
        products[category].forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            // Nome 
            const productName = document.createElement('h4');
            productName.className = 'product-name';
            productName.innerText = product.name;
            productCard.appendChild(productName);

            // Preço
            const productPrice = document.createElement('p');
            productPrice.className = 'product-price';
            productPrice.innerText = `R$ ${product.price.toFixed(2)}`;
            productCard.appendChild(productPrice);

            const productCarrinho = document.createElement("button");
            productCarrinho.className = 'product-carrinho';
            productCarrinho.innerHTML = "Adicionar ao carrinho";
            productCard.appendChild(productCarrinho);

            // Adiciona o cartão do produto ao container
            productContainer.appendChild(productCard);
        });

        // Adiciona o container de produtos à categoria
        categoryContainer.appendChild(productContainer);

        // Adiciona a categoria com os produtos ao container principal
        container.appendChild(categoryContainer);
    }
}

// Chama a função para carregar os produtos ao carregar a página
window.onload = loadProducts;
