// 1. Select the heading with getElementById()
const heading = document.getElementById("heading");
const changeBtn = document.getElementById("changeBtn");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const outputArea = document.getElementById("outputArea");

// 2, 3 & 4. Change text with textContent and style property on click
changeBtn.addEventListener("click", () => {
  heading.textContent = "The heading text has been changed!";
  heading.style.color = "blue";
});

// 5. Create a new element and append it
addBtn.addEventListener("click", () => {
  const newElement = document.createElement("p");
  newElement.textContent = "This is a new element.";
  outputArea.appendChild(newElement);
});

// 6. Add a second control that removes the new element
removeBtn.addEventListener("click", () => {
  if (outputArea.lastElementChild) {
    outputArea.lastElementChild.remove();
  }
});
