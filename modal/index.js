// 20 mins
const btn = document.getElementById("btn");
const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
let modalState = false;

function showModal() {
  modal.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
}

function onModalClick(e) {
  if (e.target && e.target.id && e.target.id === "modal") hideModal();
}

btn.addEventListener("click", showModal);
modalBtn.addEventListener("click", hideModal);
modal.addEventListener("click", onModalClick);
