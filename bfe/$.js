class $Class {
  element;
  constructor(el) {
    this.element = el;
  }

  css(property, value) {
    this.element.style[property] = value;

    return this;
  }
}

function $(el) {
  return new $Class(el);
}

$("btn").css("color", "white").css("backgroundColor", "#000");

console.log($("btn").css);
