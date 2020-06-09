import * as slider from "./slider.js";
import * as obs from "./observer.js";
import * as nav from "./shownav.js";

/////////////////////////////////////////////////////////////////////
///////// slider.js
/////////////////////////////////////////////////////////////////////

slider.prev.addEventListener("click", function () {
	prevSlide();
	updateCircleIndicator();
	resetTimer();
});

slider.next.addEventListener("click", function () {
	nextSlide();
	updateCircleIndicator();
	resetTimer();
});

slider.circleIndicator();

/////////////////////////////////////////////////////////////////////
////////// observer.js
/////////////////////////////////////////////////////////////////////

window.addEventListener("resize", obs.setThreshold);

obs.sections.forEach((section) => {
	obs.observer.observe(section);
});

function addClassesToSections() {
	// adds class section1, section2 etc to each section
	const sectionsCount = document.querySelectorAll("section");
	let sectionsIteration = 1;
	sectionsCount.forEach((section) => {
		if (sectionsIteration < sectionsCount.length + 1) {
			section.classList.add("section" + sectionsIteration);
			sectionsIteration++;
		}
	});
}
addClassesToSections();

/////////////////////////////////////////////////////////////////////
//showNav
/////////////////////////////////////////////////////////////////////

nav.navLinks.forEach((link) => {
	link.addEventListener("click", nav.showNav);
});

/////////////////////////////////////////////////////////////////////
// cards hover
/////////////////////////////////////////////////////////////////////

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

const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
	// rotate icons on hover
	icon.addEventListener("mouseover", function () {
		icon.classList.add("spin");
	});
	icon.addEventListener("mouseout", function () {
		icon.classList.remove("spin");
	});
});

// team section

// function onHoverDevin() {
// 	const infocard = document.querySelector(".devin.infocardContainer");
// 	const infocardDivs = document.querySelectorAll(".devin.infocardContainer div");

// 	infocard.addEventListener("mouseover", () => {
// 		infocard.classList.add("active");
// 		infocardDivs.forEach((card) => {
// 			card.classList.add("active");
// 		});
// 	});

// 	infocard.addEventListener("mouseout", () => {
// 		infocard.classList.remove("active");
// 		infocardDivs.forEach((card) => {
// 			card.classList.remove("active");
// 		})
// 	});

// 	infocard.addEventListener("touchstart", () => {
// 		infocard.classList.toggle("active");
// 		infocardDivs.forEach((card) => {
// 			card.classList.toggle("active");
// 		})
// 	})

// };

// onHoverDevin();


// function onHoverJames() {
// 	const infocard = document.querySelector(".james.infocardContainer");
// 	const infocardDivs = document.querySelectorAll(".james.infocardContainer div");

// 	infocard.addEventListener("mouseover", () => {
// 		infocard.classList.add("active");
// 		infocardDivs.forEach((card) => {
// 			card.classList.add("active");
// 		});
// 	});

// 	infocard.addEventListener("mouseout", () => {
// 		infocard.classList.remove("active");
// 		infocardDivs.forEach((card) => {
// 			card.classList.remove("active");
// 		})
// 	});
// 	infocard.addEventListener("touchstart", () => {
// 		infocard.classList.toggle("active");
// 		infocardDivs.forEach((card) => {
// 			card.classList.toggle("active");
// 		})
// 	})

// };

// onHoverJames();
