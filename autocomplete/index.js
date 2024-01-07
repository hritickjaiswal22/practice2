// Around 20 mins

const suggestions = ["apple", "banana", "cat"];
const input = document.getElementById("input");
const list = document.getElementById("list");

function renderSuggestions(filteredSuggestions) {
  list.innerHTML = "";
  const fragment = document.createDocumentFragment();

  for (const suggestion of filteredSuggestions) {
    const listItem = document.createElement("div");
    listItem.className = "list-item";
    listItem.addEventListener("click", listItemClickHandler);

    listItem.innerText = suggestion;
    fragment.appendChild(listItem);
  }

  list.appendChild(fragment);
}

function filter(value) {
  let filteredSuggestions = [];
  if (!value) filteredSuggestions = [];
  else {
    filteredSuggestions = suggestions.filter((str) => str.indexOf(value) >= 0);
  }

  renderSuggestions(filteredSuggestions);
}

function inputChangeHandler(e) {
  filter(e.target.value);
}

function listItemClickHandler(e) {
  input.value = e.target.innerText;
  renderSuggestions([]);
}

input.addEventListener("input", inputChangeHandler);
filter("");
