function showNav() {
	const navbars = document.querySelectorAll(".line-container");
	const menuIcon = document.querySelector(".menu-icon");
	document.querySelector("nav").classList.toggle("show-nav");

	menuIcon.classList.toggle("nav-open");
	console.log("success!");
}

const navLinks = document.querySelectorAll("nav ul li");

navLinks.forEach((link) => {
	link.addEventListener("click", showNav);
});

// find height of image and make card match it
