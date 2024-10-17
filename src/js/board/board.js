export default class Board {
  constructor(element, size) {
    this._cells = [];
    this._element = element;
    this._size = size;
  }

  drawCells() {
    this._cells = [];
    this._element.innerHTML = "";
    this._element.style.setProperty("--board-size", this._size);

    for (let index = 0; index < this._size ** 2; index++) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("board__cell");

      this._element.appendChild(cellEl);
      this._cells.push(cellEl);
    }
  }

  get cells() {
    return this._cells;
  }
}
