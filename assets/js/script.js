function showNav() {
	const navbars = document.querySelectorAll(".line-container");
	document.querySelector("nav").classList.toggle("show-nav");

	navbars.forEach((navbar) => {
		navbar.classList.toggle("hide");
	});
}
