/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

// JavaScript functionality
const viewCertifications = document.getElementById('viewCertifications');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const images = [ './images/Cloud_foundations_cert.png', './images/DEVOPS_foundations_cert.jpg', './images/DevOps_Foundations_IaaC_cert.jpg', './images/DevOps_foundations_CI_CD_cert.jpg', './images/FWEB_cert.jpg', './images/OpenEDG_Python_cert.jpg', './images/Knime_cert.png']; // Array of image paths
let currentIndex = 0;

// Show modal on click
viewCertifications.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block';
  modalImage.src = images[currentIndex];
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Navigate next
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImage.src = images[currentIndex];
});

// Navigate previous
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImage.src = images[currentIndex];
});

// Close modal when clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const viewgrades = document.getElementById('viewgrades');
const modal_g = document.getElementById('imageModal_g');
const modalImage_g = document.getElementById('modalImage_g');
const closeModal_g = document.querySelector('.close_g');
const nextBtn_g = document.querySelector('.next_g');
const prevBtn_g = document.querySelector('.prev_g');

const images_g = [ './images/CCA_records.png', './images/GPA_records.png' ]; // Array of image paths
let currentIndex_g = 0;

// Show modal on click
viewgrades.addEventListener('click', (event) => {
  event.preventDefault();
  modal_g.style.display = 'block';
  modalImage_g.src = images_g[currentIndex_g];
});

// Close modal
closeModal_g.addEventListener('click', () => {
  modal_g.style.display = 'none';
});

// Navigate next
nextBtn_g.addEventListener('click', () => {
  currentIndex_g = (currentIndex_g + 1) % images_g.length;
  modalImage_g.src = images_g[currentIndex_g];
});

// Navigate previous
prevBtn_g.addEventListener('click', () => {
  currentIndex_g = (currentIndex_g - 1 + images_g.length) % images_g.length;
  modalImage_g.src = images_g[currentIndex_g];
});

// Close modal when clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target === modal_g) {
    modal_g.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hexagons = document.querySelectorAll(".hex");
  hexagons.forEach((hex, index) => {
      hex.style.animationDelay = `${index * 0.03}s`;
  });
});