export const slides = document.querySelector(".my-slider").children;
export const prev = document.querySelector(".prev");
export const next = document.querySelector(".next");
export const indicator = document.querySelector(".indicator");
export let index = 0;

prev.addEventListener("click", function () {
	prevSlide();
	updateCircleIndicator();
	resetTimer();
});

next.addEventListener("click", function () {
	nextSlide();
	updateCircleIndicator();
	resetTimer();
});

export function circleIndicator() {
	// create circle indicators
	for (let i = 0; i < slides.length; i++) {
		const div = document.createElement("div");
		div.innerHTML = i + 1;
		div.setAttribute("onclick", "indicateSlide(this)");
		div.id = i;
		if (i == 0) {
			div.className = "active";
		}
		indicator.appendChild(div);
	}
}
circleIndicator();

export function indicateSlide(element) {
	index = element.id;
	changeSlide();
	updateCircleIndicator();
	resetTimer();
}

export function updateCircleIndicator() {
	for (let i = 0; i < indicator.children.length; i++) {
		indicator.children[i].classList.remove("active");
	}
	indicator.children[index].classList.add("active");
}

export function prevSlide() {
	if (index == 0) {
		index = slides.length - 1;
	} else {
		index--;
	}
	changeSlide();
}

export function nextSlide() {
	if (index == slides.length - 1) {
		index = 0;
	} else {
		index++;
	}
	changeSlide();
}

export function changeSlide() {
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
	}

	slides[index].classList.add("active");
}

export function resetTimer() {
	// when click to indicator or controls button
	// stop timer
	clearInterval(timer);
	// then started again timer
	timer = setInterval(autoPlay, 6000);
}

export function autoPlay() {
	nextSlide();
	updateCircleIndicator();
}

export let timer = setInterval(autoPlay, 8000);
