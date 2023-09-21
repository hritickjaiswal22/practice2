const container = document.querySelector("#container");
const list = [
  {
    heading: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam libero ipsa ex totam quos sequi, quod sunt inventore commodi.",
  },
  {
    heading: 2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam libero ipsa ex totam quos sequi, quod sunt inventore commodi.",
  },
  {
    heading: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam libero ipsa ex totam quos sequi, quod sunt inventore commodi.",
  },
  {
    heading: 4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam libero ipsa ex totam quos sequi, quod sunt inventore commodi.",
  },
];

function createAccordion(el, list) {
  const fragment = document.createDocumentFragment();

  list.forEach((item, i) => {
    const body = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const info = document.createElement("div");

    body.className = "accordion__body";
    label.className = "accordion__checkbox--label";
    input.className = "accordion__checkbox";
    info.className = "accordion__info";

    input.id = i;
    input.type = "checkbox";
    label.htmlFor = i;
    label.innerText = item.heading;
    info.innerText = item.content;

    body.appendChild(label);
    body.appendChild(input);
    body.appendChild(info);
    fragment.appendChild(body);
  });

  el.innerHTML = "";
  el.appendChild(fragment);
}

createAccordion(container, list);
