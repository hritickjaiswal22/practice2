const iconBtn = document.querySelector(".icon-btn");
let activeBtn = false;

function toggleBtnState() {
  activeBtn = !activeBtn;

  const children = iconBtn.children;

  if (activeBtn) toggleIcon(children[1], children[0]);
  else toggleIcon(children[0], children[1]);
}

function toggleIcon(el1, el2) {
  el1.classList.remove("hide");
  el2.classList.add("hide");
}

iconBtn.addEventListener("click", toggleBtnState);
