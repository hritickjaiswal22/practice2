const element = document.getElementById("root");
const container = document.getElementById("container");

function getVirtualDOM(node) {
  const virtualTree = {};
  const props = {};
  let children = [];

  virtualTree.type = node.tagName.toLowerCase();

  if (node.hasAttributes()) {
    const attributes = node.attributes;
    for (let i = 0; i < attributes.length; i++) {
      const name = attributes[i].name;
      const value = attributes[i].value;

      props[name === "class" ? "className" : name] = value;
    }
  }

  virtualTree.props = props;

  if (node.childNodes.length > 0) {
    node.childNodes.forEach((childNode) => {
      if (childNode.nodeType === 3) {
        if (childNode.textContent.trim())
          children.push(childNode.textContent.trim());
      } else children.push(getVirtualDOM(childNode));
    });
  }

  if (children.length === 1) children = children[0];

  virtualTree.children = children;

  return virtualTree;
}

console.log(getVirtualDOM(element));

function render(node) {
  if (node.type) {
    const element = document.createElement(node.type);

    if (node.props && Object.keys(node.props).length) {
      Object.keys(node.props).forEach((key) =>
        element.setAttribute(key, node.props[key])
      );
    }

    if (node.children && node.children.length) {
      for (const child of node.children) {
        element.appendChild(render(child));
      }
    }

    return element;
  } else {
    return document.createTextNode(node);
  }
}

container.appendChild(render(getVirtualDOM(element)));
