// Very very very important
// For positions always use getBoundingClientRect() very very imp

const container = document.getElementById("container");
const boxes = document.getElementsByClassName("box");

function handleMousedown(box, e) {
  let leftDiff = Math.abs(box.getBoundingClientRect().left - e.clientX);
  let topDiff = Math.abs(box.getBoundingClientRect().top - e.clientY);

  const handleMousemove = (evt) => {
    const left = evt.clientX - leftDiff;
    const top = evt.clientY - topDiff;

    console.log(leftDiff, topDiff);

    box.style.left = `${left}px`;
    box.style.top = `${top}px`;
  };

  const handleMouseup = (evt) => {
    console.log(box);
    box.style.left = `${evt.clientX - leftDiff}px`;
    box.style.top = `${evt.clientY - topDiff}px`;
    box?.setAttribute("clientLeft", evt.clientX - leftDiff);
    box?.setAttribute("clientTop", evt.clientY - topDiff);
    leftDiff = 0;
    topDiff = 0;

    document.removeEventListener("mousemove", handleMousemove);
    document.removeEventListener("mouseup", handleMouseup);
  };

  document.addEventListener("mousemove", handleMousemove);
  document.addEventListener("mouseup", handleMouseup);
}

for (let i = 0; i < boxes?.length; i++) {
  boxes[i]?.addEventListener("mousedown", (e) => handleMousedown(boxes[i], e));
}
