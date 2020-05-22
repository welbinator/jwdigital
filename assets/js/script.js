// adds class section1, section2 etc to each section

function addClassesToSections() {
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

//shows nav when you click on hamburger icon

function showNav() {
	//   const navbars = document.querySelectorAll('.line-container');
	const menuIcon = document.querySelector(".menu-icon");
	document.querySelector("nav").classList.toggle("show-nav");

	menuIcon.classList.toggle("nav-open");
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

// rotate icons on hover

const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
	icon.addEventListener("mouseover", function () {
		icon.classList.add("spin");
	});
	icon.addEventListener("mouseout", function () {
		icon.classList.remove("spin");
	});
});

// next section button

const home = document.querySelector("#home").getAttribute("id");
const nextButton = document.querySelector("#next-container");
// let currentSection;
// let currentSectionId;
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

// team section

// function onHover() {
//   const devinCard = document.querySelector('#devin');
//   const devinCardDivs = document.querySelectorAll('#devin div');

//   const jamesCard = document.querySelector('#james');
//   const jamesCardDivs = document.querySelectorAll('#james div');

//   devinCard.addEventListener('mouseover', function() {
//     devinCard.classList.add('active');
//     devinCardDivs.forEach((card) => {
//       card.classList.add('active');
//     });
//   });

//   devinCard.addEventListener('mouseout', function() {
//     devinCard.classList.remove('active');
//     devinCardDivs.forEach((card) => {
//       card.classList.remove('active');
//     });
//   });

//   jamesCard.addEventListener('mouseover', function() {
//     jamesCard.classList.add('active');
//     jamesCardDivs.forEach((card) => {
//       card.classList.add('active');
//     });
//   });

//   jamesCard.addEventListener('mouseout', function() {
//     jamesCard.classList.remove('active');
//     jamesCardDivs.forEach((card) => {
//       card.classList.remove('active');
//     });
//   });
// }

// onHover();

// find stroke length of paths in SVG
// const logo = document.querySelectorAll("#logo-anim path");
// for (let i = 0; i < logo.length; i++) {
// 	console.log(`light blue path ${i} is ${logo[i].getTotalLength()}`);
// }
