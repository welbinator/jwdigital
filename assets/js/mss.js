// gives numbered classes to each slide and activates slide1

const colors = ["#2176FF", "#33A1FD", "#FDCA40", "#F79824", "#31393C"];
const slides = document.querySelectorAll(".mss-slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const mssInterval = 4000;
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




function toNextSlide() {

    document.querySelector(".mss-slide.slide" + slideIndex).classList.remove("active");
    if (slideIndex == slides.length) {
        slideIndex = 1;
        console.log("back to " + slideIndex)
    } else {
        slideIndex++;
        console.log("next slide is" + slideIndex)
    }
    document.querySelector(".mss-slide.slide" + slideIndex).classList.add("active");


    setTimeout(toNextSlide, mssInterval);

}






setTimeout(toNextSlide, 3000);


nextButton.addEventListener("click", () => {
    clearTimeout(timeoutHandle);
    timeoutHandle();


})

// prevButton.addEventListener("click", () => {
//     toPrevSlide();
// })


// function toPrevSlide() {
//     document.querySelector(".slide.slide" + slideIndex).classList.remove("active");
//     if (slideIndex == 1) {
//         slideIndex = slides.length;

//     } else {
//         slideIndex--;
//     }
//     document.querySelector(".slide.slide" + slideIndex).classList.add("active");

//     setTimeout(toNextSlide, 3000);
// }
