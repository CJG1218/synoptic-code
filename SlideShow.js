/* Slideshow inspiration taken from https://www.w3schools.com/howto/howto_js_slideshow.asp*/

let slideIndex = 1;
let slideInterval;

document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(slideIndex);
    startSlideshow();
});


function plusSlides(n) {
    clearInterval(slideInterval); 
    showSlides(slideIndex += n);
    startSlideshow(); 
}


function currentSlide(n) {
    clearInterval(slideInterval); 
    showSlides(slideIndex = n);
    startSlideshow();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000); 
}
