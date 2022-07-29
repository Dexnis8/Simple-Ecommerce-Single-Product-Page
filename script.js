const btnPlus = document.querySelector(".plus");
const btnMinus = document.querySelector(".minus");
const numShoe = document.querySelector(".zero");
const shoePrice = document.querySelector(".number1");
const cartImage = document.querySelector(".cart-icon");
const emptyCart = document.querySelector(".cart-page1");
const cartDisplay = document.querySelector(".cart-page");
const closeBtn = document.querySelectorAll(".btn-close");
const addCart = document.querySelector(".add-cart");
const numberOnCart = document.querySelector(".cart-number");
const cartTotalPrice = document.querySelector(".total-price");
const shoeNumber = document.querySelector(".shoe-quantity");
const subImages = document.querySelectorAll(".images-section");
const hiddenImages = document.querySelector(".hidden-images");
const backdrop = document.querySelector(".backdrop");
const pop = document.querySelector(".pop-image");
const closeModal = document.querySelector(".btn-close-hidden");
const prev = document.querySelector(".previousbtn");
const next = document.querySelector(".nextbtn");
const thumbnail1 = document.querySelector(".image1");
const thumbnail2 = document.querySelector(".image2");
const thumbnail3 = document.querySelector(".image3");
const thumbnail4 = document.querySelector(".image4");
const priceFixed = document.querySelector(".fixed-price");
const deleteBtn = document.querySelector(".delete");
const closeSidebar = document.querySelector(".sidebar-close");
const menu = document.querySelector(".menu-icon");
const sideBar = document.querySelectorAll(".sidebar");
////// For Price inrease and decrease
let price = 125;
let newPrice = 0;
let numberOfItems = 0;
numberOfItems += numShoe.textContent;

btnPlus.addEventListener("click", function () {
  numShoe.textContent++;
  newPrice = price * numShoe.textContent;
  shoePrice.textContent = `$${newPrice}.00`;
});
btnMinus.addEventListener("click", function () {
  if (numShoe.textContent > 0) {
    numShoe.textContent -= 1;
    newPrice -= price;
    shoePrice.textContent = `$${newPrice}.00`;
  }
});

///// View cart
let numCart = 0;
const noPrice = "$0.00";
cartImage.addEventListener("click", function () {
  if (numShoe.textContent < 1) {
    emptyCart.style.display = "block";
  }
});
deleteBtn.addEventListener("click", function () {
  emptyCart.style.display = "block";
  cartDisplay.style.display = "none";
  numberOnCart.textContent = 0;
});

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function () {
    cartDisplay.style.display = "none";
    emptyCart.style.display = "none";
  });
}
let totalPrice = 0;
addCart.addEventListener("click", function () {
  shoeNumber.textContent = numShoe.textContent;
  shoePrice.textContent = `$125.00`;
  totalPrice = shoeNumber.textContent * 125;
  cartTotalPrice.textContent = `$${totalPrice}.00`;

  if (numShoe.textContent >= 1) {
    numberOnCart.textContent = numShoe.textContent;
    cartImage.addEventListener("click", function () {
      cartDisplay.style.display = "block";
    });
  } else {
    numberOnCart.textContent = 0;
  }
  numShoe.textContent = 0;
});
closeModal.addEventListener("click", function () {
  hiddenImages.style.display = "none";
  backdrop.style.display = "none";
});
backdrop.addEventListener("click", function () {
  hiddenImages.style.display = "none";
  backdrop.style.display = "none";
});

let y = 1;
let x = 4;
next.addEventListener("click", function () {
  if (y <= 4) {
    pop.src = `image-product-${y++}.jpg`;
  } else if (y > 4) {
    y = 1;
    pop.src = `image-product-${y++}.jpg`;
  }
});
prev.addEventListener("click", function () {
  if (y >= 1 && y < 5) {
    pop.src = `image-product-${y--}.jpg`;
  } else {
    y = 4;
    pop.src = `image-product-${y--}.jpg`;
  }
});

thumbnail1.addEventListener("click", function () {
  hiddenImages.style.display = "block";
  backdrop.style.display = "block";
  pop.src = `image-product-1.jpg`;
});

thumbnail2.addEventListener("click", function () {
  hiddenImages.style.display = "block";
  backdrop.style.display = "block";
  pop.src = `image-product-2.jpg`;
});

thumbnail3.addEventListener("click", function () {
  hiddenImages.style.display = "block";
  backdrop.style.display = "block";
  pop.src = `image-product-3.jpg`;
});

thumbnail4.addEventListener("click", function () {
  hiddenImages.style.display = "block";
  backdrop.style.display = "block";
  pop.src = `image-product-4.jpg`;
});
// menu.addEventListener("click", function () {
//   sideBar.style.display = "block";
// });

// closeSidebar.addEventListener("click", function () {
//   document.querySelectorAll(".sidebar").style.display = "none";
// });
