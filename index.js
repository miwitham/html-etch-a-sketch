document.addEventListener("DOMContentLoaded", () => {
  const Container = document.createElement("div");
  Container.classList.add("etch-a-sketch-container");

  document.body.appendChild(Container);

  for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.classList.add("etch-a-sketch-cell");
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
    Container.appendChild(cell);
  }
});

// camelCase
// PascalCase
// snake_case
// kebab-case

// const a = "Apple";
// const b = "Banana";
// const c = "Cherry";
// const d = "Date";
// const e = "Elderberry";

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

const arr2 = ["apple", "banana", "cherry", "date", "elderberry"];
arr2.forEach((item) => {
  console.log(item);
});

const num = 0;
const str = "Stephanie";
const bool = true;

// Objects and Arrays
const obj = { name: "Stephanie" };
const arr = [1, 2, 3, 4, 5];

// Function
const sayHello = (name) => {
  console.log("Hello", name, "!");
};

sayHello("Stephanie");
sayHello("Michael");
