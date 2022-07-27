const productDesc = document.querySelector(".product-desc");
const cardBtn = document.querySelector("button");

cardBtn.addEventListener("mouseenter", () => {
  productDesc.style.fontSize = "1.1rem";
})

cardBtn.addEventListener("mouseleave", () => {
  productDesc.style.fontSize = "1.2rem";
});
