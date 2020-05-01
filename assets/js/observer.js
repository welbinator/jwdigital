const sections = document.querySelectorAll("section");

const options = {
	threshold: 0.5,
};

let observer = new IntersectionObserver(ctaCheck, options);

function ctaCheck(entries) {
	entries.forEach((entry) => {
		const newClass = entry.target.className;

		if (!entry.isIntersecting) {
			entry.target.classList.remove("show");
		} else if (entry.isIntersecting) {
			// console.log(newClass);

			const section1color = "#01A1E5";
			const section2color = "#f78259";
			const section3color = "#eb4559";
			const section4color = "#FFBC42";

			let sections = document.querySelectorAll("section");

			let root = document.documentElement;
			entry.target.classList.add("show");
			if (newClass == "section1") {
				root.style.setProperty("--sectionColor", section1color);
				console.log(newClass);
			} else if (newClass == "section2") {
				root.style.setProperty("--sectionColor", section2color);
				console.log(newClass);
			} else if (newClass == "section3") {
				root.style.setProperty("--sectionColor", section3color);
				console.log(newClass);
			} else {
				root.style.setProperty("--sectionColor", section4color);
				console.log(newClass);
			}
		}
	});
}

sections.forEach((section) => {
	observer.observe(section);
});
