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

async function wikiApiCall(searchInput) {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`
    );
    //   console.log(data.query.search);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const data = await response.json();
    createCards(data.query.search);
  } catch (error) {
    errorMsg.textContent = `${error}`;
    loader.style.display = "none";
  }
}
