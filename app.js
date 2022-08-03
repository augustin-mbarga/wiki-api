const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMsg = document.querySelector(".error-msg");
const resultsDisplay = document.querySelector(".results-display");
const loader = document.querySelector(".loader");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  errorMsg.textContent = "";
  if (input.value === "") {
    errorMsg.textContent = "Wops, veuillez saisir un terme à rechercher";
    return;
  }
  // reset
  errorMsg.textContent = "";
  resultsDisplay.textContent = "";
  loader.style.display = "flex";
  wikiApiCall(input.value);
}
