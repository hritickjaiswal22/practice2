function getValues(parent) {
  function find(i, obj, keys, value) {
    if (i === keys.length) return value;

    obj[keys[i]] = find(i + 1, obj[keys[i]] ? obj[keys[i]] : {}, keys, value);

    return obj;
  }

  const form = document.getElementById(parent);
  let hash = {};

  if (form) {
    const children = form.children;

    for (const child of children) {
      const name = child.getAttribute("name");

      const keys = name.split(".");

      find(0, hash, keys, child.value);
    }
  }

  return hash;
}

console.log(getValues("parent"));
