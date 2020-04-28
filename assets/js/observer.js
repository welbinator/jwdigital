const sections = document.querySelectorAll("section");

const options = {
	threshold: 0.7,
};

let observer = new IntersectionObserver(ctaCheck, options);

function ctaCheck(entries) {
	entries.forEach((entry) => {
		const newClass = entry.target.className;

		if (entry.isIntersecting) {
			console.log(newClass);

			const section1 = "#01A1E5";
			const section2 = "#f78259";
			const section3 = "#eb4559";

			let root = document.documentElement;

			if (newClass == "section1") {
				root.style.setProperty("--sectionColor", section1);
			} else if (newClass == "section2") {
				root.style.setProperty("--sectionColor", section2);
			} else {
				root.style.setProperty("--sectionColor", section3);
			}
		}
	});
}

sections.forEach((section) => {
	observer.observe(section);
});
