export const sections = document.querySelectorAll("section");

export const options = {
	threshold: 0.7,
};

window.addEventListener("resize", setThreshold);

export function setThreshold() {
	if (window.innerWidth > 768) {
		options.threshold = 0.7;
		console.log(options.threshold);
	} else {
		options.threshold = 0.3;
		console.log(options.threshold);
	}
}

export let slide;

export const observer = new IntersectionObserver(ctaCheck, options);

export function ctaCheck(entries) {
	entries.forEach((entry) => {
		const currentSlide = entry.target.getAttribute("id");

		if (!entry.isIntersecting) {
			entry.target.classList.remove("show");
		} else if (entry.isIntersecting) {
			// const section1color = "#01A1E5";
			// const section2color = "#f78259";
			// const section3color = "#eb4559";
			// const section4color = "#FFBC42";

			const section1color = "#2364AA";
			const section2color = "#3DA5D9";
			const section3color = "#73BFB8";
			const section4color = "#FEC601";
			const section5color = "#EA7317";

			const sections = document.querySelectorAll("section");

			const root = document.documentElement;
			const nextArrow = document.querySelector(".next-arrow");
			const lastSlide = document
				.querySelector("section:last-child")
				.getAttribute("id");
			slide = entry.target.getAttribute("slide");

			entry.target.classList.add("show");
			if (currentSlide == "home") {
				root.style.setProperty("--sectionColor", section1color);
			} else if (currentSlide == "about") {
				root.style.setProperty("--sectionColor", section2color);
			} else if (currentSlide == "portfolio") {
				root.style.setProperty("--sectionColor", section3color);
			} else {
				root.style.setProperty("--sectionColor", section4color);
			}

			if (currentSlide == lastSlide) {
				nextArrow.classList.add("flip");
			} else {
				nextArrow.classList.remove("flip");
			}
		}
	});
}

sections.forEach((section) => {
	observer.observe(section);
});

//////////////////////////////
// next section button
/////////////////////////////

export const home = document.querySelector("#home").getAttribute("id");
export const nextButton = document.querySelector("#next-container");

let nextSection;
let nextSectionId;

nextButton.addEventListener("click", jump);
export function jump(s) {
	slide = parseInt(slide, 10);
	nextSection = slide + 1;
	nextSection = document.querySelector(".section" + nextSection);

	if (slide == sections.length) {
		window.scrollTo(0, home);
	} else {
		nextSectionId = nextSection.getAttribute("id");
		const nextSlide = document.getElementById(nextSectionId).offsetTop;

		window.scrollTo(0, nextSlide);
	}
}
