let productsInCart = localStorage.getItem("products");
let allProducts = document.querySelector(".row");

let product = JSON.parse(productsInCart);
if (productsInCart) {
  drawCartItems(product);
}

function drawCartItems(products) {
  let allProductsInCart = products
    .map((product) => {
      return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card text-center">
                <img src=${product.imgUrl} class="card-img-top" alt="${
        product.name
      }">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: is ${product.price} L.E</p>
                    <div class="quantity-controls">
                        <button class="btn decrease text-light" onClick="changeQuantity(${
                          product.id
                        }, 'decrease')">-</button>
                        <span class="quantity">${product.quantity || 1}</span>
                        <button class="btn increase text-light" onClick="changeQuantity(${
                          product.id
                        }, 'increase')">+</button>
                    </div>
                    <p class="card-text">Total Price: <span class="total-price"> ${
                      product.price * (product.quantity || 1)
                    }  L.E</span></p>
                    <button class="btn remove-from-cart" id="remove-from-cart-${
                      product.id
                    }" onClick="RemoveFromCart('cart', ${
        product.id
      })">Remove from cart</button>
                </div>
            </div>
        </div>`;
    })
    .join("");
  allProducts.innerHTML = allProductsInCart;
}

function changeQuantity(productId, action) {
  product = product.map((item) => {
    if (item.id === productId) {
      if (action === "increase") {
        item.quantity = (item.quantity || 1) + 1;
      } else if (action === "decrease" && item.quantity > 1) {
        item.quantity -= 1;
      }
      item.totalPrice = item.price * item.quantity;
    }
    return item;
  });

  localStorage.setItem("products", JSON.stringify(product));
  drawCartItems(product);
}

function RemoveFromCart(from, id) {
  if (from === "cart") {
    product = product.filter((item) => item.id !== id);
    localStorage.setItem("products", JSON.stringify(product));
    drawCartItems(product);
  } else if (from === "favour") {
    favouriteProduct = favouriteProduct.filter((item) => item.id !== id);
    localStorage.setItem("favouriteProducts", JSON.stringify(favouriteProduct));
    drawFavoriteProducts(favouriteProduct);
  }
}

let carouselItems = document.querySelector("#carouselExampleIndicators");
let AllfavouriteProducts = localStorage.getItem("favouriteProducts");
let favourTitle = document.querySelector(".favour-title ");

let favouriteProduct = JSON.parse(AllfavouriteProducts);
if (AllfavouriteProducts) {
  drawFavoriteProducts(favouriteProduct);
}

function drawFavoriteProducts(favouriteProducts) {
  if (favouriteProducts.length === 0) {
    carouselItems.style.display = "none";
    favourTitle.style.display = "none";
  } else {
    carouselItems.style.display = "block";

    let favour = favouriteProducts
      .map((product, index) => {
        let activeClass = index === 0 ? "active" : "";
        return `
            <div class="carousel-item ${activeClass}">
               <div class="col-12 col-md-6 col-lg-4">
                <div class="card text-center">
                    <img src="${product.imgUrl}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Price: $${product.price}</p>
                        <button class="btn remove-from-cart" id="remove-from-favour-${product.id}" onClick="RemoveFromCart('favour', ${product.id})">Remove from cart</button>
                    </div>
                </div> 
            </div>        
            </div>`;
      })
      .join("");

    carouselItems.querySelector(".carousel-inner").innerHTML = favour;
  }
}
