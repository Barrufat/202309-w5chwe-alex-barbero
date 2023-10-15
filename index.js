import CodersArray from "./Array.js";

const cellsBox = document.querySelector(".cells-box");
const iterateButton = document.querySelector(".iterate-button");

let gameObject = new CodersArray(
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
);

gameObject[5][3] = true;
gameObject[4][3] = true;
gameObject[4][4] = true;
gameObject[4][5] = true;

gameObject[8][7] = true;
gameObject[8][8] = true;
gameObject[8][9] = true;
gameObject[7][8] = true;

for (let i = 0; i < gameObject.length; i++) {
  gameObject[i].forEach((element, position) => {
    const cell = document.createElement("div");
    cell.className = `cell cell--${[i]}-${position}`;
    cellsBox.appendChild(cell);
  });
}

for (let i = 0; i < gameObject.length; i++) {
  gameObject[i].forEach((element, position) => {
    const currentCell = cellsBox.querySelector(`.cell--${[i]}-${position}`);

    if (element) {
      currentCell.classList.add("cell--alive");
      currentCell.classList.remove("cell--dead");
    } else {
      currentCell.classList.add("cell--dead");
      currentCell.classList.remove("cell--alive");
    }
  });
}

const printObject = (cells) => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].forEach((element, position) => {
      const currentCell = cellsBox.querySelector(`.cell--${[i]}-${position}`);

      if (element) {
        currentCell.classList.add("cell--alive");
        currentCell.classList.remove("cell--dead");
      } else {
        currentCell.classList.add("cell--dead");
        currentCell.classList.remove("cell--alive");
      }
    });
  }
};

const iterateGameObject = (object) => {
  const newGameObject = new CodersArray(
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  );

  for (let i = 1; i < object.length - 1; i++) {
    for (let j = 1; j < object[i].length - 1; j++) {
      let counter = 0;
      if (object[i - 1][j - 1]) {
        counter++;
      }

      if (object[i - 1][j]) {
        counter++;
      }

      if (object[i - 1][j + 1]) {
        counter++;
      }

      if (object[i][j - 1]) {
        counter++;
      }

      if (object[i][j + 1]) {
        counter++;
      }

      if (object[i + 1][j - 1]) {
        counter++;
      }

      if (object[i + 1][j]) {
        counter++;
      }

      if (object[i + 1][j + 1]) {
        counter++;
      }

      if (object[i][j]) {
        if (counter < 2) {
          newGameObject[i][j] = false;
        } else if (counter === 2) {
          newGameObject[i][j] = true;
        } else if (counter === 3) {
          newGameObject[i][j] = true;
        } else if (counter > 3) {
          newGameObject[i][j] = false;
        }
      }

      if (!object[i][j] && counter === 3) {
        newGameObject[i][j] = true;
      }
    }
  }

  gameObject = newGameObject;
  printObject(gameObject);
};

iterateButton.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  iterateGameObject(gameObject);
});
