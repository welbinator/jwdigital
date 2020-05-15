function showNav() {
	const navbars = document.querySelectorAll(".line-container");
	const menuIcon = document.querySelector(".menu-icon");
	document.querySelector("nav").classList.toggle("show-nav");

	menuIcon.classList.toggle("nav-open");
}

const navLinks = document.querySelectorAll("nav ul li");

navLinks.forEach((link) => {
	link.addEventListener("click", showNav);
});

// cards hover

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
	card.addEventListener("mouseover", function () {
		const image = card.childNodes[1];
		if (image.nodeName == "IMG") {
			image.style.opacity = ".6";
		}
	});

	card.addEventListener("mouseout", function () {
		const image = card.childNodes[1];
		if (image.nodeName == "IMG") {
			image.style.opacity = "1";
		}
	});
});

// rotate icons on hover

const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
	icon.addEventListener("mouseover", function () {
		icon.classList.add("spin");
	});
	icon.addEventListener("mouseout", function () {
		icon.classList.remove("spin");
	});
});

// next section button

const home = document.querySelector("#home").getAttribute("id");
const nextButton = document.querySelector("#next-container");
// let currentSection;
// let currentSectionId;
let nextSection;
let nextSectionId;

nextButton.addEventListener("click", jump);
function jump(s) {
	slide = parseInt(slide, 10);
	nextSection = slide + 1;
	nextSection = document.querySelector(".section" + nextSection);

	if (slide == sections.length) {
		window.scrollTo(0, home);
	} else {
		nextSectionId = nextSection.getAttribute("id");
		let nextSlide = document.getElementById(nextSectionId).offsetTop;

		window.scrollTo(0, nextSlide);
	}
}
