function showSection(id) {
  // Hide all pop-ups
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.classList.remove("active");
  });

  // Show the selected section's pop-up
  if (id) {
    document.getElementById(id).classList.add("active");
  }
}

function closeSection(id) {
  document.getElementById(id).classList.remove("active");
}
