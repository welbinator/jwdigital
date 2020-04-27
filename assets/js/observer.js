const sections = document.querySelectorAll("section");

const options = {
	threshold: 0.7,
};

let observer = new IntersectionObserver(ctaCheck, options);

function ctaCheck(entries) {
	entries.forEach((entry) => {
		const newClass = entry.target.className;

		// const activeAnchor = document.querySelector(`[data-page=${className}]`);

		if (entry.isIntersecting) {
			console.log(newClass);
			// const ctaBtn = document.querySelector("#cta");
			// const frame = document.querySelector("#border");
			// ctaBtn.className = newClass + "_" + "btn";
			// frame.className = newClass + "_" + "border";
			const section1 = "#ea6227";
			const section2 = "#342ead";
			const section3 = "#f2a51a";
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
