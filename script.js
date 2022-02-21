function changeColor(e) {
  e.target.style.backgroundColor = "black";
}

const bigContainer = document.querySelector("#column");

for (let rowNumber = 1; rowNumber < 17; rowNumber++) {
  const row = document.createElement("div");
  row.classList.add("row");
  bigContainer.appendChild(row);
  for (let squareNumber = 1; squareNumber < 17; squareNumber++) {
    const div = document.createElement("div");
    div.classList.add("square");
    row.appendChild(div);
  }
}

const squares = Array.from(document.querySelectorAll(".square"));
squares.forEach(square => square.addEventListener("mouseenter", changeColor));