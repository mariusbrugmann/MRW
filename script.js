// Get all the sections (Home and About)
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");

// Get the close buttons for both sections
const closeHome = document.getElementById("closeHome");
const closeAbout = document.getElementById("closeAbout");

// Handle clicks on the navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Hide all sections
    homeSection.style.display = "none";
    aboutSection.style.display = "none";

    // Show the clicked section
    if (this.href.includes("#home")) {
      homeSection.style.display = "block";
    } else if (this.href.includes("#about")) {
      aboutSection.style.display = "block";
    }
  });
});

// Close the Home popup when the close button is clicked
closeHome.addEventListener("click", function () {
  homeSection.style.display = "none";
});

// Close the About popup when the close button is clicked
closeAbout.addEventListener("click", function () {
  aboutSection.style.display = "none";
});
