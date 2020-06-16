const navClick = document.querySelector("#navClick");
navClick.addEventListener("click", showNav);

function showNav() {
	const menuIcon = document.querySelector(".menu-icon");
	document.querySelector("nav").classList.toggle("show-nav");

	menuIcon.classList.toggle("nav-open");
}

const navLinks = document.querySelectorAll("nav ul li");

navLinks.forEach((link) => {
	link.addEventListener("click", showNav);
});

const menuItems = document.querySelectorAll(".nav__item");

menuItems.forEach((item) => {
	item.addEventListener("mouseover", () => {
		item.classList.add("active")
	});
	item.addEventListener("mouseout", () => {
		item.classList.remove("active")
	});

})