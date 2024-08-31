let userInfo = document.querySelector("#user-info");
let links = document.querySelector("#links");
let logOut = document.querySelector("#log-out");
let logOutBtn = document.querySelector("#logout");
let allProducts = document.querySelector(".row");

//================= remove login and register ==========
if (localStorage.getItem("firstName")) {
  links.remove();

  userInfo.innerHTML = `<p class="mb-0">welcome ${localStorage.getItem(
    "firstName"
  )}</p>`;
  logOut.innerHTML = `log out <i class="fas fa-sign-out-alt"></i>`;
}

//==================check login====================
function isLoggedIn() {
  return localStorage.getItem("firstName") !== null;
}

// ==================products items===============
productsItems = [0
  {
    id: 1,
    name: "cup",
    imgUrl: "images/cup17.jpg",
    category: "cups",
    price: 300,
  },
  {
    id: 2,
    name: "cup",
    imgUrl: "images/cup2.jpg",
    category: "cups",
    price: 200,
  },
  {
    id: 3,
    name: "cup",
    imgUrl: "images/cup3.jpg",
    category: "cups",
    price: 350,
  },
  {
    id: 4,
    name: "cup",
    imgUrl: "images/cup4.jpg",
    category: "cups",
    price: 400,
  },
  {
    id: 5,
    name: "cup",
    imgUrl: "images/cup5.jpg",
    category: "cups",
    price: 300,
  },
  {
    id: 6,
    name: "cup",
    imgUrl: "images/cup6.jpg",
    category: "cups",
    price: 300,
  },
  {
    id: 7,
    name: "cup",
    imgUrl: "images/cup7.jpg",
    category: "cups",
    price: 250,
  },
  {
    id: 8,
    name: "cup",
    imgUrl: "images/cup8.jpg",
    category: "cups",
    price: 400,
  },
  {
    id: 9,
    name: "cup",
    imgUrl: "images/cup9.jpg",
    category: "cups",
    price: 450,
  },
  {
    id: 10,
    name: "cup",
    imgUrl: "images/cup10.jpg",
    category: "cups",
    price: 150,
  },
  {
    id: 11,
    name: "cup",
    imgUrl: "images/cup11.jpg",
    category: "cups",
    price: 200,
  },
  {
    id: 12,
    name: "cup",
    imgUrl: "images/cup12.jpg",
    category: "cups",
    price: 350,
  },
  {
    id: 13,
    name: "cup",
    imgUrl: "images/cup13.jpg",
    category: "cups",
    price: 400,
  },
  {
    id: 14,
    name: "cup",
    imgUrl: "images/cup14.jpg",
    category: "cups",
    price: 420,
  },
  {
    id: 15,
    name: "cup",
    imgUrl: "images/cup15.jpg",
    category: "cups",
    price: 300,
  },
  {
    id: 16,
    name: "cup",
    imgUrl: "images/cup16.jpg",
    category: "cups",
    price: 300,
  },
  {
    id: 17,
    name: "cup",
    imgUrl: "images/cup1.jpg",
    category: "Accessories",
    price: 350,
  },
  {
    id: 18,
    name: "Accessory",
    imgUrl: "images/accsses1.jpg",
    category: "Accessories",
    price: 100,
  },
  {
    id: 19,
    name: "Accessory",
    imgUrl: "images/accsses2.jpg",
    category: "Accessories",
    price: 50,
  },
  {
    id: 20,
    name: "Accessory",
    imgUrl: "images/accsses3.jpg",
    category: "Accessories",
    price: 150,
  },
  {
    id: 21,
    name: "Accessory",
    imgUrl: "images/accsses4.jpg",
    category: "Accessories",
    price: 200,
  },
  {
    id: 22,
    name: "Accessory",
    imgUrl: "images/accsses5.jpg",
    category: "Accessories",
    price: 150,
  },
  {
    id: 23,
    name: "Accessory",
    imgUrl: "images/accsses6.jpg",
    category: "Accessories",
    price: 250,
  },
  {
    id: 24,
    name: "hair piece accessory",
    imgUrl: "images/accsses7.jpg",
    category: "Accessories",
    price: 300,
  },
  {
    id: 25,
    name: "hair piece accessory",
    imgUrl: "images/accsses8.jpg",
    category: "Accessories",
    price: 350,
  },
  {
    id: 26,
    name: "Accessory",
    imgUrl: "images/accsses9.jpg",
    category: "Accessories",
    price: 150,
  },
  {
    id: 27,
    name: "Accessory",
    imgUrl: "images/accsses10.jpg",
    category: "Accessories",
    price: 200,
  },
  {
    id: 28,
    name: "Accessory",
    imgUrl: "images/accsses11.jpg",
    category: "Accessories",
    price: 150,
  },
  {
    id: 29,
    name: "hat accessory",
    imgUrl: "images/accsses13.jpg",
    category: "Accessories",
    price: 100,
  },
  {
    id: 30,
    name: "hat accessory",
    imgUrl: "images/accsses14.jpg",
    category: "Accessories",
    price: 150,
  },
  {
    id: 31,
    name: "Accessory",
    imgUrl: "images/accsses15.jpg",
    category: "Accessories",
    price: 180,
  },
  {
    id: 32,
    name: "Accessory",
    imgUrl: "images/accsses16.jpg",
    category: "Accessories",
    price: 150,
  },
  {
    id: 33,
    name: "Accessory",
    imgUrl: "images/accsses17.jpg",
    category: "Accessories",
    price: 100,
  },
  {
    id: 34,
    name: "hat accessory",
    imgUrl: "images/access12.jpg",
    category: "Accessories",
    price: 200,
  },
  {
    id: 35,
    name: "mini me accessory",
    imgUrl: "images/minime1.jpg",
    category: "Accessories",
    price: 300,
  },
  {
    id: 36,
    name: "mini me cup",
    imgUrl: "images/minime2.jpg",
    category: "Accessories",
    price: 400,
  },
  {
    id: 37,
    name: "mini me accessory",
    imgUrl: "images/minime3.jpg",
    category: "Accessories",
    price: 200,
  },
  {
    id: 38,
    name: "mini me cup",
    imgUrl: "images/minime4.jpg",
    category: "Accessories",
    price: 250,
  },
  {
    id: 39,
    name: "mini me cup",
    imgUrl: "images/minime5.jpg",
    category: "Accessories",
    price: 150,
  },
  {
    id: 40,
    name: "mini me accessory",
    imgUrl: "images/minime6.jpg",
    category: "Accessories",
    price: 100,
  },
  {
    id: 41,
    name: "mini me cup",
    imgUrl: "images/minime7.jpg",
    category: "Accessories",
    price: 150,
  },
  {
    id: 42,
    name: "mini me cup",
    imgUrl: "images/minime8.jpg",
    category: "Accessories",
    price: 150,
  },
  {
    id: 43,
    name: "mini me accessory",
    imgUrl: "images/minime9.jpg",
    category: "Accessories",
    price: 180,
  },
  {
    id: 44,
    name: "wedding accessory",
    imgUrl: "images/wedding.jpg",
    category: "wedding",
    price: 400,
  },
  {
    id: 45,
    name: "flowers",
    imgUrl: "images/wedding1.jpg",
    category: "wedding",
    price: 450,
  },
  {
    id: 46,
    name: "wedding accessory",
    imgUrl: "images/wedding2.jpg",
    category: "wedding",
    price: 300,
  },
  {
    id: 47,
    name: "wedding accessory",
    imgUrl: "images/wedding3.jpg",
    category: "wedding",
    price: 150,
  },
  {
    id: 48,
    name: "wedding accessory",
    imgUrl: "images/wedding4.jpg",
    category: "wedding",
    price: 250,
  },
  {
    id: 49,
    name: "wedding accessory",
    imgUrl: "images/wedding5.jpg",
    category: "wedding",
    price: 250,
  },
  {
    id: 50,
    name: "flowers",
    imgUrl: "images/wedding6.jpg",
    category: "wedding",
    price: 500,
  },
  {
    id: 51,
    name: "wedding accessory",
    imgUrl: "images/wedding7.jpg",
    category: "wedding",
    price: 450,
  },
  {
    id: 52,
    name: "wedding accessory",
    imgUrl: "images/wedding8.jpg",
    category: "wedding",
    price: 150,
  },
  {
    id: 53,
    name: "flowers",
    imgUrl: "images/wedding9.jpg",
    category: "wedding",
    price: 200,
  },
  {
    id: 54,
    name: "wedding accessory",
    imgUrl: "images/wedding10.jpg",
    category: "wedding",
    price: 300,
  },
  {
    id: 55,
    name: "wedding accessory",
    imgUrl: "images/wedding11.jpg",
    category: "wedding",
    price: 350,
  },
  {
    id: 56,
    name: "wedding accessory",
    imgUrl: "images/wedding12.jpg",
    category: "wedding",
    price: 500,
  },
  {
    id: 57,
    name: "flowers",
    imgUrl: "images/wedding13.jpg",
    category: "wedding",
    price: 550,
  },
];

// ===================search input================
let searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  let searchTerm = searchInput.value.toLowerCase();
  filterProductsByCategory(searchTerm);
});

// ================filter after search ================
function filterProductsByCategory(term) {
  let filteredProducts = productsItems.filter((product) =>
    product.category.toLowerCase().includes(term)
  );
  updateProductDisplay(filteredProducts);
}

// ===================draw layout================
function updateProductDisplay(products) {
  let everyProduct = products
    .map((product) => {
      return `
            <div class="col-12 col-md-6 col-lg-4 mb-3">
                <div class="card text-center">
                    <img src=${product.imgUrl} class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Price is: ${product.price}</p>
                        <button id="add-to-cart-${product.id}" class="btn add-to-cart-btn" onClick="addToCart(${product.id})">Add to cart</button>
                        <i class="fas fa-heart heart" id="favourite-${product.id}" onClick="addToFavorite(${product.id})"></i>
                    </div>
                </div> 
            </div>`;
    })
    .join("");

  allProducts.innerHTML = everyProduct;
}

updateProductDisplay(productsItems);

let cartProductDiv = document.querySelector(".carts-products div");
let cartItems = [];
let badgeSpan = document.querySelector(".badge");

// ===================add to cart ================
function addToCart(id) {
  let choosenItem = productsItems.find((item) => item.id === id);
  let existingItem = cartItems.find((item) => item.id === id);
  let addToCartButton = document.getElementById(`add-to-cart-${id}`);
  if (existingItem) {
    cartItems = cartItems.filter((item) => item.id !== id);
    addToCartButton.textContent = "Add to cart";
    addToCartButton.style.backgroundColor = "";
    +badgeSpan.innerHTML--;
  } else {
    cartItems.push({
      ...choosenItem,
      quantity: 1,
    });
    localStorage.setItem("products", JSON.stringify(cartItems));
    +badgeSpan.innerHTML++;
    addToCartButton.textContent = "Remove from cart";
    addToCartButton.style.backgroundColor = "red";
    addToCartButton.style.color = "white";
  }

  updateCartUI();
}

function updateCartUI() {
  cartProductDiv.innerHTML = "";
  cartItems.forEach((item) => {
    cartProductDiv.innerHTML += `
            <ul>
                <li>
                    ${item.name} <span class="addNumberSpan">${item.quantity}</span>
                    <button class="btn btn-primary increase" onClick="increaseQuantity(${item.id})">+</button>
                    <button class="btn btn-primary decrease " onClick="decreaseQuantity(${item.id})">-</button>
                </li>
            </ul>`;
  });
}

function increaseQuantity(id) {
  let item = cartItems.find((item) => item.id === id);
  if (item) {
    item.quantity += 1;
    updateCartUI();
  }
}

function decreaseQuantity(id) {
  let item = cartItems.find((item) => item.id === id);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else if (item && item.quantity === 1) {
    cartItems = cartItems.filter((item) => item.id !== id);
    // لو ال الأيتم موجود وكمان الكوانتيتي بتاعته بواحد معناها إن مفيش غير نسخة واحدة منه يبقى هتعمل فلتر و هترجعلي كل الأيتمز ما عدا الأيتم صاحب ال آي دي ده

    let addToCartButton = document.getElementById(`add-to-cart-${id}`);
    addToCartButton.textContent = "Add to cart";
    addToCartButton.style.backgroundColor = "";
  }
  updateCartUI();
}

// ========================favourite items inhome=======================
let favouriteItems = [];
function addToFavorite(id) {
  let favourite = document.getElementById(`favourite-${id}`);
  let FavouriteChoosenItem = productsItems.find((item) => item.id === id);
  let existingFavouriteItem = favouriteItems.find((item) => item.id === id);

  if (existingFavouriteItem) {
    favouriteItems.filter((item) => item.id !== id);
    favourite.style.color = "";
  } else {
    favouriteItems.push(FavouriteChoosenItem);
    favourite.style.color = "red";
    localStorage.setItem("favouriteProducts", JSON.stringify(favouriteItems));
  }
}

// =======================toggle view products div=================
let shoppingCartIcon = document.querySelector(".shopping-cart");
let cartsProducts = document.querySelector(".carts-products");
let cartText = document.querySelector(".cart-text");
let angleDown = document.querySelector("#angle-down");
let angleUp = document.querySelector("#angle-up");

shoppingCartIcon.addEventListener("click", toggleCart);
cartText.addEventListener("click", toggleCart);

function toggleCart() {
  if (cartProductDiv.innerHTML !== "") {
    if (
      cartsProducts.style.display === "block" ||
      cartsProducts.style.display === ""
    ) {
      cartsProducts.style.display = "none";
    } else {
      cartsProducts.style.display = "block";
    }
  }
}

// =====================intial layout with check login=====================
function drawItems() {
  let everyProduct = productsItems
    .map((product) => {
      let isDisabled = !isLoggedIn() ? "disabled" : "";
      return `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card text-center">
            <img src=${product.imgUrl} class="card-img-top" alt="${
        product.name
      }">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">Some quick example text to build</p>
              <button id="add-to-cart-${
                product.id
              }" class="btn add-to-cart-btn ${isDisabled}" onClick="${
        isDisabled ? "" : `addToCart(${product.id})`
      }">Add to cart</button>
              <i class="fas fa-heart ${isDisabled}" id="favourite-${
        product.id
      }" onClick="${isDisabled ? "" : `addToFavorite(${product.id})`}"></i>
            </div>
          </div>
        </div>`;
    })
    .join("");

  allProducts.innerHTML = everyProduct;
}
function handleUserInteractions() {
  let isUserLoggedIn = isLoggedIn();
  if (!isUserLoggedIn) {
    // Hide or disable cart and favorites functionalities
    let cartButtons = document.querySelectorAll(".add-to-cart-btn");
    let favoriteIcons = document.querySelectorAll(".fas.fa-heart");
    cartButtons.forEach((button) => button.classList.add("disabled"));
    favoriteIcons.forEach((icon) => icon.classList.add("disabled"));
  }
}
handleUserInteractions();
