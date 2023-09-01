function generateCSSSelector(domElement, targetId) {
  if (domElement.id == targetId) return `#${domElement.id}`;

  let result = "";
  const children = domElement.children;

  for (const child of children) {
    const temp = generateCSSSelector(child, targetId);

    if (temp) {
      result = temp;
      break;
    }
  }

  if (result) {
    let currentSelector = "";

    if (domElement.id) currentSelector = `#${domElement.id}`;
    else if (domElement.className) currentSelector = `.${domElement.className}`;
    else currentSelector = domElement.tagName.toLowerCase();

    return `${currentSelector} > ${result}`;
  }
  return "";
}

console.log(generateCSSSelector(document.body, "target"));
