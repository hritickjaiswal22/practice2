function directChildrenWithClassname(domElement, classname) {
  const result = [];
  const children = domElement.children;

  for (const child of children) {
    if (child.className === classname) result.push(child);
  }

  return result;
}

function getByClassnameHeirarchy(root, heirarchy) {
  const heirarchyArr = heirarchy.split(">");
  let domElements = [...root.querySelectorAll(`.${heirarchyArr[0]}`)];
  const result = [];

  if (heirarchy.length > 1) {
    for (let i = 1; i < heirarchyArr.length; i++) {
      const temp = [];

      for (const domElement of domElements) {
        temp.push(...directChildrenWithClassname(domElement, heirarchyArr[i]));
      }

      domElements = temp;
    }
  }

  for (const domElement of domElements) {
    result.push(domElement.id || domElement);
  }

  return result;
}

console.log(getByClassnameHeirarchy(document.getElementById("root"), "a>c"));
