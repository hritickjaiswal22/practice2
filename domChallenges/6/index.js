const container = document.querySelector(".container");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const n = 5;
let score = 0;
const timeLimit = 500;
let result = [];
let currentIndex = 0;
let highestScore = 0;

function createboxes() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < n; i++) {
    const box = document.createElement("div");

    box.classList.add("box");
    box.dataset.id = i;

    fragment.appendChild(box);
  }

  container.innerHTML = "";
  container.appendChild(fragment);
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateScore() {
  highestScore = Math.max(highestScore, score);
  h1.innerText = score;
}

function toggleColor(index, color = "blue") {
  container.children[index].style.backgroundColor = color;
  setTimeout(() => {
    container.children[index].style.backgroundColor = "transparent";
  }, timeLimit);
}

function startGame() {
  result = [];
  currentIndex = 0;

  for (let i = 0; i < score + 1; i++) {
    const randomIndex = randomIntFromInterval(0, n - 1);
    result.push(randomIndex);

    setTimeout(() => toggleColor(randomIndex), i * (timeLimit + 200));
  }

  console.log(result);
}

function clickHandler(e) {
  const target = e.target;

  if (target && target.classList.contains("box")) {
    const clickedIndex = Number(target.getAttribute("data-id"));
    console.log(currentIndex);

    if (clickedIndex === result[currentIndex]) {
      currentIndex++;
    } else {
      score = 0;
      updateScore();
      toggleColor(clickedIndex, "red");
      container.classList.add("shake");
      setTimeout(() => container.classList.remove("shake"), timeLimit + 200);
    }

    if (currentIndex >= result.length) {
      score++;
      updateScore();

      startGame();
    }
  }
}

createboxes();
btn.addEventListener("click", startGame);
container.addEventListener("click", clickHandler);
