function showNav() {
	const navbars = document.querySelectorAll(".line-container");
	const menuIcon = document.querySelector(".menu-icon");
	document.querySelector("nav").classList.toggle("show-nav");

	menuIcon.classList.toggle("nav-open");
	// navbars.forEach((navbar) => {
	// 	navbar.classList.toggle("hide");
	// });
}
