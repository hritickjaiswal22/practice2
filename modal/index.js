// 20 mins
const btn = document.getElementById("btn");
const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content-body");

function showModal() {
  if (modalContent.clientHeight >= window.innerHeight) {
    modalContent.style.marginTop = `${
      modalContent.clientHeight - window.innerHeight + 32
    }px`;
  } else {
    modalContent.style.marginTop = "0";
  }

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
