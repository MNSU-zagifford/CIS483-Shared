// Step 1: Get the score from the user and convert it to a number
let input = prompt("Enter your score:");
let score = Number(input);
let grade;

// Challenge: Reject non-numeric input
if (input === null || input.trim() === "" || isNaN(score)) {
  alert("Please enter a valid number.");
  console.log("Error: Input is not a number.");
}
// Step 2: Validate the score is between 0 and 100
else if (score < 0 || score > 100) {
  alert("Score must be between 0 and 100.");
  console.log("Error: Score is out of range.");
}
// Step 3: Decide the letter grade
else {
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

  // Step 4: Show the result
  alert("Your score is " + score + ". Your grade is " + grade + ".");
  console.log("Score: " + score + ", Grade: " + grade);
}
