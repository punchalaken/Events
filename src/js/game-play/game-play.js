import Board from "../board/board";
import Goblin from "../goblin/goblin";
import GameState from "../game-state/game-state";

export default class GamePlay {
  constructor() {
    this._board = undefined;
    this._boardSize = 4;
    this._cellClickListeners = [];
    this._container = undefined;
    this._goblin = new Goblin();
    this._goblinCellIndex = undefined;
    this._isOver = false;
    this._state = undefined;
    this._waitingTimer = undefined;
  }

  addCellClickListener(callback) {
    this._cellClickListeners.push(callback);
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }

    this._container = container;
  }

  checkBinding() {
    if (this._container === undefined) {
      throw new Error("GamePlay not bind to DOM");
    }
  }

  checkGoblinCellIndex(index) {
    return this._goblinCellIndex === index;
  }

  drawUI() {
    this.checkBinding();

    this._container.classList.add("game-container--game-on");
    this._container.innerHTML = `
      <div class="game-container__header">
        <div class="game-container__state game-state"></div>
      </div>
      <div class="game-container__board board"></div>
    `;

    this._state = new GameState(this._container.querySelector(".game-state"));
    this._state.drawUI();

    this._board = new Board(
      this._container.querySelector(".board"),
      this._boardSize,
    );
    this._board.drawCells();

    this._board.cells.forEach((cell) => {
      cell.addEventListener("click", (event) => this.onCellClick(event));
    });
  }

  gameOver() {
    this._isOver = true;
    this._container.classList.remove("game-container--game-on");

    alert(`Игра окончена! Вы набрали ${this._state.hits} баллов`);
  }

  get isOver() {
    return this._isOver;
  }

  goblinIsCaught() {
    clearTimeout(this._waitingTimer);
    this._state.hits += 1;
  }

  onCellClick(event) {
    const index = this._board.cells.indexOf(event.currentTarget);

    this._cellClickListeners.forEach((o) => o.call(null, index));
  }

  redrawGoblinPosition() {
    let index;

    do {
      index = Math.floor(Math.random() * this._board.cells.length);
    } while (this.checkGoblinCellIndex(index));

    this._goblinCellIndex = index;
    this._goblin.setParent(this._board.cells[index]);
  }

  waitingToMove() {
    this._waitingTimer = setTimeout(() => {
      this._state.misses += 1;

      if (this._state.misses < 5) {
        this.redrawGoblinPosition();
        this.waitingToMove();
      } else {
        this.gameOver();
      }
    }, 1000);
  }
}
