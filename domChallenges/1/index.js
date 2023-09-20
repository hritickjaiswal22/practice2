const ratingContainer = document.getElementById("ratingContainer");
const h1 = document.querySelector(".count");
/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
function Star(el, count, callback) {
  // write logic to create star rating utility.
  let clickedStar = -1;

  function createStars() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const star = document.createElement("i");

      star.className = "fa fa-star-o";
      star.dataset.id = i;

      fragment.appendChild(star);
    }

    el.innerHTML = "";
    el.appendChild(fragment);
  }

  function mouseOverHandler(e) {
    if (e.target && e.target.classList.contains("fa")) {
      const id = Number(e.target.getAttribute("data-id"));

      unFillStars();
      fillStars(id);
    }
  }

  function mouseClickHandler(e) {
    if (e.target && e.target.classList.contains("fa")) {
      const id = Number(e.target.getAttribute("data-id"));

      clickedStar = id;
      updateCount();
    }
  }

  function fillStars(index) {
    const stars = el.children;

    if (stars) {
      for (let i = 0; i <= index; i++) {
        stars[i].classList.replace("fa-star-o", "fa-star");
      }
    }
  }

  function unFillStars() {
    const stars = el.children;

    if (stars) {
      for (let i = 0; i < stars.length; i++) {
        stars[i].classList.replace("fa-star", "fa-star-o");
      }
    }
  }

  function updateCount() {
    h1.innerHTML = clickedStar + 1;
  }

  createStars();
  el.addEventListener("mouseover", mouseOverHandler);
  el.addEventListener("mouseleave", () => {
    unFillStars();
    fillStars(clickedStar);
  });
  el.addEventListener("click", mouseClickHandler);
}

Star(ratingContainer, 5);
