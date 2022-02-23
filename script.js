function paint(e) {

  // if rainbow toggle is activated, paint black
  if (!toggleRainbowButton.classList.contains("active")) {
    e.target.style.backgroundColor = "black";
    return;
  }

  // get 3 random values from 0 to 255 to create a random rgb color
  const randomNumber1 = Math.floor(Math.random() * 256); // red amount
  const randomNumber2 = Math.floor(Math.random() * 256); // green amount
  const randomNumber3 = Math.floor(Math.random() * 256); // blue amount
  e.target.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}

function createGrid(gridSize, firstGrid = false) {
  // if this is not the first grid, delete previous childs of bigContainer
  if (!firstGrid) {
    const previousRows = Array.from(document.querySelectorAll("#column .row"));
    previousRows.forEach(row => bigContainer.removeChild(row))
  }

  // create gridSize rows, all these rows are childs of bigContainer
  for (let rowNumber = 0; rowNumber < gridSize; rowNumber++) {
    const row = document.createElement("div");
    row.classList.add("row");
    bigContainer.appendChild(row);

    // create gridSize squares, each row has gridSize childs, each one being a square
    for (let squareNumber = 0; squareNumber < gridSize; squareNumber++) {
      const div = document.createElement("div");
      div.classList.add("square");
      row.appendChild(div);
    }
  }

  // all of the squares created, have a background color of white
  // if mouse enters a square, paint the square
  const squares = Array.from(document.querySelectorAll(".square"));
  squares.forEach(square => {
    square.style.backgroundColor = "white"; 
    square.addEventListener("mouseenter", paint);
  });

  // if the button "clear" is clicked, each square's background color turns to white
  const clearButton = document.querySelector("#clear-button");
  clearButton.addEventListener("click", () => squares.forEach(square => square.style.backgroundColor = "white"));

  // if the button "toggle grid lines" is clicked, the class grid-lines is toggled for each square
  toggleGridButton.addEventListener("click", () => squares.forEach(square => square.classList.toggle("grid-lines")))
  if (toggleGridButton.classList.contains("active")) {
    squares.forEach(square => square.classList.toggle("grid-lines"));
  }
}


const bigContainer = document.querySelector("#column");
const toggleGridButton = document.querySelector("#toggle-grid-lines");
const toggleRainbowButton = document.querySelector("#toggle-rainbow");
const sizeButtons = Array.from(document.querySelectorAll("#size-buttons button"));

toggleRainbowButton.addEventListener("click", () => toggleRainbowButton.classList.toggle("active"));
toggleGridButton.addEventListener("click", () => toggleGridButton.classList.toggle("active"));

createGrid(16, true);

// if a size button is clicked, a grid is created with size button.id
sizeButtons.forEach(button => button.addEventListener("click", () => {
  const size = parseInt(button.id);
  createGrid(size);
}));