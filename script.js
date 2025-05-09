let counter = 0;
const sections = document.querySelectorAll("section");
console.log(sections);

sections[0].style.left = "0";

window.addEventListener("wheel", (e) => {
  console.log(e);
  if (e.deltaY > 0) {
    // Scrolling down
    if (counter < sections.length - 1) {
      counter++;
    } else {
      counter = 0; // Reset to the first section when at the end
    }
  } else {
    // Scrolling up
    if (counter > 0) {
      counter--;
    } else {
      counter = sections.length - 1; // Set to the last section when at the start
    }
  }

  // Move sections based on the counter
  sections.forEach((section, index) => {
    if (index < counter) {
      section.style.left = "-100vw"; // Move left
    } else if (index === counter) {
      section.style.left = "0"; // Bring current section into view
    } else {
      section.style.left = "100vw"; // Move right
    }
  });
});
