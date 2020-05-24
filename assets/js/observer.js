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
			const section1color = "#01A1E5";
			const section2color = "#f78259";
			const section3color = "#eb4559";
			const section4color = "#FFBC42";

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
