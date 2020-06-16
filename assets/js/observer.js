const sections = document.querySelectorAll("section");

const options = {
	threshold: 0.7,
};

window.addEventListener("resize", setThreshold);

function setThreshold() {
	if (window.innerWidth > 768) {
		options.threshold = 0.7;
		console.log(options.threshold);
	} else {
		options.threshold = 0.3;
		console.log(options.threshold);
	}
}

let slide;

const observer = new IntersectionObserver(ctaCheck, options);

function ctaCheck(entries) {
	entries.forEach((entry) => {
		const currentSlide = entry.target.getAttribute("id");

		if (!entry.isIntersecting) {
			entry.target.classList.remove("show");
		} else if (entry.isIntersecting) {


			const section1color = "#2364AA";
			const section2color = "#3DA5D9";
			const section3color = "#73BFB8";

			const section4color = "#ca9d00";
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
			} else if (currentSlide == "team") {
				root.style.setProperty("--sectionColor", section4color);
			} else {
				root.style.setProperty("--sectionColor", section5color);
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

const home = document.querySelector("#home").getAttribute("id");
const nextButton = document.querySelector("#next-container");

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
		const nextSlide = document.getElementById(nextSectionId).offsetTop;

		window.scrollTo(0, nextSlide);
	}
}

// window.addEventListener("resize", obs.setThreshold);

// obs.sections.forEach((section) => {
// 	obs.observer.observe(section);
// });

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
