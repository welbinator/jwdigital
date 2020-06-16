// gives numbered classes to each slide and activates slide1

// const colors = ["#2176FF", "#33A1FD", "#FDCA40", "#F79824", "#31393C"];
const slides = document.querySelectorAll(".mss-slide");
// const nextButton = document.querySelector(".next");
// const prevButton = document.querySelector(".prev");
const mssInterval = 5500;
let slideIndex = 1;


function slidesInit() {
    slides.forEach((slide) => {
        slide.classList.add("slide" + slideIndex);
        // slide.style.backgroundColor = colors[slideIndex - 1];
        slideIndex++;
    })
    slideIndex = 1;
    document.querySelector(".mss-slide.slide" + slideIndex).classList.add("active");
}
slidesInit();

let timerRef;


var toNextSlide = function () {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    if (slideIndex == slides.length) {
        slideIndex = 1;
        document.querySelector(".mss-slide.slide" + slideIndex).classList.add("active");
    } else {
        slideIndex++;
        document.querySelector(".mss-slide.slide" + slideIndex).classList.add("active");
    }

}

clearInterval(timerRef);
timerRef = setInterval(toNextSlide, 5500);













