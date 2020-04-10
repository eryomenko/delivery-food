// var but = document.getElementById("cart-button");

// but.onclick = openBasket;

// function openBasket(eventObj) {
//     var b = eventObj.target;
//     b.setAttribute("class", "is-open");
// }

const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const cancel = document.querySelector(".button-cancel");

// анонимная функция
cartButton.addEventListener("click", function (event) {
    modal.classList.add("is-open");
});

close.addEventListener("click", function (event) {
    modal.classList.remove("is-open");
});

cancel.addEventListener("click", function (event) {
    modal.classList.remove("is-open");
});

new WOW().init();