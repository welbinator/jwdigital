export const navClick = document.querySelector("#navClick");
navClick.addEventListener("click", showNav);

export function showNav() {
	//   const navbars = document.querySelectorAll('.line-container');
	const menuIcon = document.querySelector(".menu-icon");
	document.querySelector("nav").classList.toggle("show-nav");

	menuIcon.classList.toggle("nav-open");
}

export const navLinks = document.querySelectorAll("nav ul li");
