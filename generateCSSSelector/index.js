function getCurrentSelector(domElement, index) {
  let currentSelector = "";

  if (domElement.id) currentSelector = `#${domElement.id}`;
  else
    currentSelector = `${domElement.tagName.toLowerCase()}:nth-child(${
      index + 1
    })`;

  return currentSelector;
}

function generateCSSSelector(domElement, target, index) {
  if (domElement === target) {
    const currentSelector = getCurrentSelector(domElement, index);
    return currentSelector;
  }

  const children = domElement.children;
  let temp = "";

  for (let i = 0; i < children.length; i++) {
    const returnedValue = generateCSSSelector(children[i], target, i);

    if (returnedValue) {
      temp = returnedValue;
      break;
    }
  }

  if (temp) {
    const currentSelector = getCurrentSelector(domElement, index);
    return `${currentSelector} > ${temp}`;
  }
  return "";
}

console.log(
  generateCSSSelector(
    document.getElementById("root"),
    document.getElementById("target"),
    0
  )
);
