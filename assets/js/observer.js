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
			const ctaBtn = document.querySelector("#cta");
			ctaBtn.className = newClass + "_" + "btn";
		}
	});
}

sections.forEach((section) => {
	observer.observe(section);
});
