function invert(node) {
  if (!node) return null;

  const temp = node.left;
  node.left = node.right;
  node.right = temp;

  invert(node.left);
  invert(node.right);
}
