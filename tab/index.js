//  25 mins

const tabBtns = document.querySelectorAll(".tab-btn");
const tabs = document.getElementById("tabs");
const tabHeader = document.getElementById("tab-header");

function toggle(index) {
  for (let i = 0; i < tabHeader.children.length; i++) {
    const child = tabHeader.children[i];
    if (i === index) {
      child.classList.add("active");
    } else {
      child.classList.remove("active");
    }
  }

  for (let i = 0; i < tabs.children.length; i++) {
    const child = tabs.children[i];

    if (i === index) {
      child.style.display = "block";
    } else {
      child.style.display = "none";
    }
  }
}

tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", (e) =>
    toggle(Number(e.target.getAttribute("data-tab-id")))
  );
});

toggle(0);
