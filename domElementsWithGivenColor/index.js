function getComputedColor(colorCode) {
  const div = document.createElement("div");
  div.style.color = colorCode;
  document.body.appendChild(div);
  const computedStyles = window.getComputedStyle(div);
  const { color } = computedStyles;
  document.body.removeChild(div);
  return color;
}

function domElementsWithSameColor(color) {
  function find(domElement) {
    if (getComputedColor(domElement.style.color) === commonStandardColor)
      result.push(domElement);

    const children = domElement.children;

    for (const child of children) {
      find(child);
    }
  }

  const commonStandardColor = getComputedColor(color);
  const result = [];
  find(document.querySelector("#root"));

  return result;
}

console.log(domElementsWithSameColor("black"));
