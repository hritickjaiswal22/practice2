const btn = document.querySelector("button");
const popoverContent = document.getElementById("popover-content");
let showPopover = false;

function togglePopover() {
  showPopover = !showPopover;

  if (showPopover) {
    popoverContent.classList.remove("hide");
  } else {
    popoverContent.classList.add("hide");
  }
}

btn.addEventListener("click", togglePopover);
