const handleAddtoCart = () => {
    const productName = document.getElementById("productName");
    const productQuantity = document.getElementById("productQuantity");


    const name = productName.value;
    const quantity = productQuantity.value;

    saveProductToLocalStorage(name , quantity);
    displayProduct(name , quantity);

    productName.value = "";
    productQuantity.value = "";
}

const displayProduct = (productName, quantity) => {
    const container = document.getElementById("productContainer");

    const li = document.createElement("li");
    li.innerText=`${productName} : ${quantity}`;


    container.appendChild(li);
}

const getProductFromLocalStorage = () => {
    let cart = {};
    const getProduct = localStorage.getItem("cart");

    if(getProduct){
        cart = JSON.parse(getProduct);
    }
    return cart;
}

const saveProductToLocalStorage = (productName , quantity) => {
    // console.log(productName , quantity)

    // const newProduct = {name: quantity};
    // localStorage.setItem("cart", JSON.stringify(newProduct))

    const cart = getProductFromLocalStorage();
    // console.log(cart)

    cart[productName] = quantity;
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart",  cartString)
}


// const product = {
//     laptop: 12
// }

// product["test"] = 100;
// console.log(product)


const displayProductFromLocalStorage = () => {
    const products = getProductFromLocalStorage();
    // console.log(products)

    for(let product in products){
        // console.log(product)
        // console.log(products[product])
        displayProduct(product, products[product])
    }
}

displayProductFromLocalStorage();