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
