function getComputedColor(colorCode) {
  const div = document.createElement("div");
  div.style.color = colorCode;
  document.body.appendChild(div);
  const computedStyles = window.getComputedStyle(div);
  const { color } = computedStyles;
  document.body.removeChild(div);
  return color;
}

console.log(getComputedColor("red") === getComputedColor("#f00"));
