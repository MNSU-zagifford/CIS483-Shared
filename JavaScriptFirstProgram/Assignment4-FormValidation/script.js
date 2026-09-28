// Assignment 4 - Form Validation

const form = document.getElementById("gradeForm");
const nameInput = document.getElementById("studentName");
const emailInput = document.getElementById("studentEmail");
const scoreInput = document.getElementById("studentScore");
const messageArea = document.getElementById("messageArea");

// 1. Listen for the form's submit event
form.addEventListener("submit", function(event) {
  // 2. Prevent default submission
  event.preventDefault();

  // 3. Trim the name
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  
  // 4. Convert score to a number
  const rawScore = scoreInput.value.trim();
  const score = Number(rawScore);

  // 5 & 6. Check required fields and score range; display clear error message
  if (name === "") {
    messageArea.style.color = "red";
    messageArea.textContent = "Error: Student name is required.";
    return;
  }

  // Challenge: Email format validation
  if (email === "" || !email.includes("@") || !email.includes(".")) {
    messageArea.style.color = "red";
    messageArea.textContent = "Error: Please enter a valid email address (e.g., student@example.com).";
    return;
  }

  if (rawScore === "" || isNaN(score)) {
    messageArea.style.color = "red";
    messageArea.textContent = "Error: Score must be a valid number.";
    return;
  }

  if (score < 0 || score > 100) {
    messageArea.style.color = "red";
    messageArea.textContent = "Error: Score must be between 0 and 100.";
    return;
  }

  // Calculate letter grade
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // 7. Display success feedback when valid
  messageArea.style.color = "green";
  messageArea.textContent = "Success! " + name + " (" + email + ") received a score of " + score + " (Grade " + grade + ").";
  
  // Reset form inputs after successful entry
  form.reset();
});
