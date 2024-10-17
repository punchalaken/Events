import image from "../../img/goblin.png";

export default class Goblin {
  constructor() {
    this._element = document.createElement("img");
    this._element.classList.add("goblin");
    this._element.src = image;
  }

  setParent(parent) {
    parent.appendChild(this._element);
  }
}
