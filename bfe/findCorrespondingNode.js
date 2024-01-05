const findCorrespondingNode = (rootA, rootB, target) => {
  let result = null;

  function find(nodeA, nodeB, target) {
    if (nodeA === target) {
      result = nodeB;
      return;
    }

    for (let i = 0; i < nodeA.children.length; i++) {
      find(nodeA.children[i], nodeB.children[i], target);
    }
  }

  find(rootA, rootB, target);

  return result;
};
