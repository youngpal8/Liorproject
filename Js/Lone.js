const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'liorhomes.com';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

document.querySelector('.flip-card').addEventListener('click', function() {
  this.querySelector('.flip-card-inner').classList.toggle('flipped');
});



const boxes = document.querySelectorAll('.box');
const image = document.querySelector('.image img');


boxes.forEach((box, index) => {
    box.addEventListener('mouseover', () => {
        box.style.transform = `scale(${1.05 + index * 0.01}) rotate(${index % 2 === 0 ? '-2' : '2'}deg)`;
        box.style.backgroundColor = `rgba(255, 215, 0, 0.3)`;
        box.style.boxShadow = `0 8px 16px rgba(0, 0, 0, 0.2)`;
    });

    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1) rotate(0deg)';
        box.style.backgroundColor = '#fff';
        box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});


image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
    image.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
});

image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
    image.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
});


var lightbox = document.getElementById("lightbox");


var lightboxImg = document.getElementById("lightbox-img");
var captionText = document.getElementById("caption");

document.querySelectorAll('.portfolio-item img').forEach(function(img) {
    img.onclick = function(){
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

