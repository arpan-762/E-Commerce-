let products = [
    {
        id : 1,
        name : "Laptop",
        category : "Computers",
        brand : "ExampleBrand",
        price : 799.99,
        actualPrice : 999.99,
        stock : 50,
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ipsum?",
        image : "gaming laptop.png"
    },
    {
        id : 2,
        name : "Smartphone",
        category : "Mobiles",
        brand : "TechGadget",
        price : 499.99,
        actualPrice : 699.99,
        stock : 100,
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ipsum?",
        image : "s24.png"
    },
    {
        id : 3,
        name : "Wireless Headphones",
        category : "Audio",
        brand : "SoundBeats",
        price : 149.99,
        actualPrice : 599.99,
        stock : 30,
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ipsum?",
        image : "headphone1.png"
    },
    {
        id : 4,
        name : "Watches",
        category : "Wearables",
        brand : "FitTech",
        price : 199.99,
        actualPrice : 599.99,
        stock : 20,
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ipsum?",
        image : "smartwatch.png"
    },
    {
        id : 5,
        name : "Speaker",
        category : "Audio",
        brand : "SoundBeats",
        price : 199.99,
        actualPrice : 399.99,
        stock : 30,
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ipsum?",
        image : "speaker.png"
    },
    {
        id : 6,
        name : "T.V",
        category : "Video",
        brand : "Samsung",
        price : 999.99,
        actualPrice : 1299.99,
        stock : 12,
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ipsum?",
        image : "samsung tv.png"
    }
]; 

const productContainer = document.querySelector(".products-container");
const productTemplate = document.querySelector("template");

products.forEach(product => {
    const clone = productTemplate.content.cloneNode(true);

    clone.querySelector(".card-category").textContent = product.category;
    clone.querySelector("img").src = product.image;
    clone.querySelector(".card-product-name").textContent = product.name;
    clone.querySelector(".card-product-description").textContent = product.description;
    clone.querySelector(".card-productPrice").textContent = `$${product.price}`;
    clone.querySelector(".card-productActualPrice").textContent = `$${product.actualPrice}`;
    clone.querySelector(".card-productStock").textContent = product.stock;

    productContainer.appendChild(clone);
});

const incrementButtons = document.querySelectorAll(".cartIncrement");
const decrementButtons = document.querySelectorAll(".cartDecrement");
const quantities = document.querySelectorAll(".card-productQuantity");
const stocks = document.querySelectorAll(".card-productStock");

incrementButtons.forEach((incrementButton, index) => {
    incrementButton.addEventListener("click", () => {

        let currentQuantity = parseInt(quantities[index].textContent);
        let stockValue = parseInt(stocks[index].textContent);

        
        if (currentQuantity < stockValue) {
            currentQuantity++;
            quantities[index].textContent = currentQuantity < 10 ? `0${currentQuantity}` : currentQuantity;
        } else {
            alert("Cannot add more than available stock");
        }
    });
});

decrementButtons.forEach((decrementButton, index) => {
    decrementButton.addEventListener("click", () => {
       
        let currentQuantity = parseInt(quantities[index].textContent);
        if (currentQuantity > 1) {
            currentQuantity--;
            quantities[index].textContent = currentQuantity < 10 ? `0${currentQuantity}` : currentQuantity;
        }
    });
});
