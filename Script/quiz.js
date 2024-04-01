const question1 = document.getElementById("q1");
const question2 = document.getElementById("q2");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");
const backButton1 = document.getElementById("tombolkembali");
const backButton2 = document.getElementById("tombolkembali2");

function next() {
  question1.style.display = "none";
  question2.style.display = "block";
  nextButton.style.display = "none";
  submitButton.style.display = "block";
  backButton1.style.display = "block";
  backButton2.style.display = "none";
}

function back() {
  nextButton.style.display = "block";
  submitButton.style.display = "none";
  question1.style.display = "block";
  question2.style.display = "none";
  backButton1.style.display = "none";
  backButton2.style.display = "block";
}
