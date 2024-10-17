import GameController from "./game-controller";
import GamePlay from "./game-play/game-play";

document.addEventListener("DOMContentLoaded", () => {
  const gamePlay = new GamePlay();
  gamePlay.bindToDOM(document.querySelector(".game-container"));

  const gameController = new GameController(gamePlay);
  gameController.init();
});
