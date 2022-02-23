function paint(e) {
  if (!toggleRainbowButton.classList.contains("active")) {
    e.target.style.backgroundColor = "black";
    return;
  }
  const randomNumber1 = Math.floor(Math.random() * 256); 
  const randomNumber2 = Math.floor(Math.random() * 256); 
  const randomNumber3 = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
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
  squares.forEach(square => {
    square.style.backgroundColor = "white"; 
    square.addEventListener("mouseenter", paint);
  });

  const clearButton = document.querySelector("#clear-button");
  clearButton.addEventListener("click", () => squares.forEach(square => square.style.backgroundColor = "white"));

  toggleGridButton.addEventListener("click", () => squares.forEach(square => square.classList.toggle("grid-lines")))
  if (toggleGridButton.classList.contains("active")) {
    squares.forEach(square => square.classList.toggle("grid-lines"));
  }
}


const bigContainer = document.querySelector("#column");
const toggleGridButton = document.querySelector("#toggle-grid-lines");
const toggleRainbowButton = document.querySelector("#toggle-rainbow");

toggleRainbowButton.addEventListener("click", () => toggleRainbowButton.classList.toggle("active"));
toggleGridButton.addEventListener("click", () => toggleGridButton.classList.toggle("active"));

createGrid(16, true);

const sizeButtons = Array.from(document.querySelectorAll("#buttons button"));
sizeButtons.forEach(button => button.addEventListener("click", () => {
  const size = parseInt(button.id);
  createGrid(size);
}));

