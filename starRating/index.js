// Around 18 mins

const n = 5;
const container = document.getElementById("container");
let selectedIndex = -1;

function unfill() {
  const stars = container.children;

  for (const star of stars) {
    star.classList.remove("fa-star");
    star.classList.add("fa-star-o");
  }
}

function fill(index) {
  const stars = container.children;

  for (let i = 0; i <= index; i++) {
    const star = stars[i];

    star.classList.remove("fa-star-o");
    star.classList.add("fa-star");
  }
}

function createStars(params) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");
    star.addEventListener("click", () => (selectedIndex = i));

    star.className = "fa fa-star-o";
    star.dataset["id"] = i;

    fragment.appendChild(star);
  }

  container.innerHTML = "";
  container.appendChild(fragment);
}

function mouseOverHandler(e) {
  if (e.target.classList.contains("fa")) {
    const index = Number(e.target.getAttribute("data-id"));

    unfill();
    fill(index);
  }
}

function mouseOutHandler() {
  unfill();
  fill(selectedIndex);
}

createStars(5);
container.addEventListener("mouseover", mouseOverHandler);
container.addEventListener("mouseout", mouseOutHandler);
