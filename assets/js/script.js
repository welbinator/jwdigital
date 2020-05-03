function showNav() {
	const navbars = document.querySelectorAll(".line-container");
	const menuIcon = document.querySelector(".menu-icon");
	document.querySelector("nav").classList.toggle("show-nav");

	menuIcon.classList.toggle("nav-open");
	console.log("success!");
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
			console.log("YESS" + image);
			console.log(image);
			image.style.opacity = ".6";
		}
	});

	card.addEventListener("mouseout", function () {
		const image = card.childNodes[1];
		if (image.nodeName == "IMG") {
			console.log("YESS" + image);
			console.log(image);
			image.style.opacity = ".5";
		}
	});
});

// rotate icons on hover

const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
	icon.addEventListener("mouseover", function () {
		icon.classList.add("play-animation");
		console.log("spin");
	});
	icon.addEventListener("mouseout", function () {
		icon.classList.remove("play-animation");
		console.log("unspin");
	});
});
