const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
let currentIndex = 0;

function goToSlide(index) {
    currentIndex = index;
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
}

// Initial slide
goToSlide(currentIndex);

// Automatic slider
setInterval(nextSlide, 3000); // Change slide every 3 seconds

var tl = gsap.timeline()
tl.to(".contact .contact-item a",{
    marginLeft:'10px',
    duration:0.4,
    repeat:-4,
    yoyo:true  //1 
  
  })

