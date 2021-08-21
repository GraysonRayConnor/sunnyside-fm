const hamburger = document.querySelector("#hamburger");
const navList = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
	navList.classList.toggle("show");
});
