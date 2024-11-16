// Get the remaining sections (Home, About, and Contact)
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

// Get the close buttons for the remaining sections
const closeHome = document.getElementById("closeHome");
const closeAbout = document.getElementById("closeAbout");
const closeContact = document.getElementById("closeContact");

// Function to close all sections (excluding Achievements)
function closeAllSections() {
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  contactSection.style.display = "none";
}

// Function to show a specific section
function showPopup(section) {
  closeAllSections(); // Close all other sections first
  section.style.display = "block"; // Then open the selected section
}

// Open the popups when navigating
document
  .querySelector(".nav-link[href='#home']")
  .addEventListener("click", () => {
    showPopup(homeSection);
  });

document
  .querySelector(".nav-link[href='#about']")
  .addEventListener("click", () => {
    showPopup(aboutSection);
  });

document
  .querySelector(".nav-link[href='#contact']")
  .addEventListener("click", () => {
    showPopup(contactSection);
  });

// Close the popups when clicking the close button
closeHome.addEventListener("click", () => closePopup(homeSection));
closeAbout.addEventListener("click", () => closePopup(aboutSection));
closeContact.addEventListener("click", () => closePopup(contactSection));

// Close a popup section
function closePopup(section) {
  section.style.display = "none";
}
