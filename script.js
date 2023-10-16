function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get a reference to the button element
const resumeButton = document.getElementById('resumeButton');

// Add a click event listener to open the PDF file when the button is clicked
resumeButton.addEventListener('click', function() {
  window.open('./assets/Resume_namanSinghParihar.pdf');
});
