const slides = document.getElementsByClassName("images");
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById("next").addEventListener("click", moveToNextSlide);
document.getElementById("prev").addEventListener("click", moveToPrevSlide);

function hideSlides(){
    for(slide of slides){
        slide.classList.remove("visible-img")
        slide.classList.add("hidden-img")
    };
};

function moveToNextSlide(){
    hideSlides();
    if (slidePosition === totalSlides -1){
        slidePosition = 0;   
    }else{
        slidePosition++;
    };
    slides[slidePosition].classList.add("visible-img") 
};

function moveToPrevSlide(){
    hideSlides();
    if(slidePosition === 0){
        slidePosition = totalSlides - 1;
    }else{
        slidePosition--;
        
    };
    slides[slidePosition].classList.add("visible-img")
};

