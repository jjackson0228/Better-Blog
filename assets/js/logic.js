const toggleButton = document.getElementById("toggle-mode");
const body = document.body;
const backBtn = document.getElementById("back-button");

toggleButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});

backBtn.addEventListener("click", function () {
  window.history.back();
});
