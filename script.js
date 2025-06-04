let currentIndex = 0;
function openLightbox(index) {
  currentIndex = index;
  const images = document.querySelectorAll('.gallery-item');
  document.getElementById('lightbox-img').src = images[index].src;
  document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
function changeSlide(direction) {
  const images = document.querySelectorAll('.gallery-item');
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}
function showMore() {
    document.getElementById("moreImages").style.display = "block";
    document.getElementById("seeMoreBtn").style.display = "none";
  }