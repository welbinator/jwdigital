import { sections } from "./observer.js";
export const home = document.querySelector("#home").getAttribute("id");
export const nextButton = document.querySelector("#next-container");

let nextSection;
let nextSectionId;
let currentSlide;

export function jump(s) {
	currentSlide = parseInt(currentSlide, 10);
	nextSection = currentSlide + 1;
	nextSection = document.querySelector(".section" + nextSection);

	if (currentSlide == sections.length) {
		window.scrollTo(0, home);
	} else {
		nextSectionId = nextSection.getAttribute("id");
		const nextSlide = document.getElementById(nextSectionId).offsetTop;

		window.scrollTo(0, nextSlide);
	}
}
