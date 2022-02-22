function setBlack(e) {
  e.target.style.backgroundColor = "black";
}

function createGrid(gridSize, firstGrid = false) {
  if (!firstGrid) {
    const previousRows = Array.from(document.querySelectorAll("#column .row"));
    previousRows.forEach(row => bigContainer.removeChild(row))
  }

  for (let rowNumber = 0; rowNumber < gridSize; rowNumber++) {
    const row = document.createElement("div");
    row.classList.add("row");
    bigContainer.appendChild(row);
    for (let squareNumber = 0; squareNumber < gridSize; squareNumber++) {
      const div = document.createElement("div");
      div.classList.add("square");
      row.appendChild(div);
    }
  }
  const squares = Array.from(document.querySelectorAll(".square"));
  squares.forEach(square => square.addEventListener("mouseenter", setBlack));
}
const bigContainer = document.querySelector("#column");

createGrid(16, true)

const squares = Array.from(document.querySelectorAll(".square"));

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => squares.forEach(square => square.style.backgroundColor = "white"));

const sizeButtons = Array.from(document.querySelectorAll("#buttons button"));
sizeButtons.forEach(button => button.addEventListener("click", () => {
  const size = parseInt(button.id);
  createGrid(size);
}));//createGrid