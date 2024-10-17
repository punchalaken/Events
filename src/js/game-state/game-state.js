export default class GameState {
  constructor(element) {
    this._element = element;
    this._hits = 0;
    this._hitsEl = undefined;
    this._misses = 0;
    this._missesEl = undefined;
  }

  drawUI() {
    this._hitsEl = document.createElement("span");
    this._hitsEl.classList.add("game-state__count");
    this._hitsEl.innerText = String(this._hits);

    const hitsParagraph = document.createElement("p");
    hitsParagraph.classList.add("game-state__paragraph");
    hitsParagraph.innerText = "Количество попаданий: ";
    hitsParagraph.appendChild(this._hitsEl);
    this._element.appendChild(hitsParagraph);

    this._missesEl = document.createElement("span");
    this._missesEl.classList.add("game-state__count");
    this._missesEl.innerText = String(this._misses);

    const missesParagraph = document.createElement("p");
    missesParagraph.classList.add("game-state__paragraph");
    missesParagraph.innerText = "Количество пропусков: ";
    missesParagraph.appendChild(this._missesEl);
    this._element.appendChild(missesParagraph);
  }

  get hits() {
    return this._hits;
  }

  set hits(hits) {
    this._hits = hits;
    this._hitsEl.innerText = String(this._hits);
  }

  get misses() {
    return this._misses;
  }

  set misses(misses) {
    this._misses = misses;
    this._missesEl.innerText = String(this._misses);
  }
}
