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


// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = "block";
        lightboxImg.src = item.getElementsByTagName('img')[0].src;
        captionText.innerHTML = item.getElementsByClassName('overlay')[0].innerHTML;
    });
});

closeBtn.onclick = function() {
    lightbox.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
}
