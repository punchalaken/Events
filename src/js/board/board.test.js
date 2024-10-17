import Board from "./board";

describe("class Board", () => {
  test("new Board()", () => {
    const element = document.querySelector(".board");
    const size = 4;

    const board = new Board(element, size);

    expect(board._element).toEqual(element);
    expect(board._size).toBe(size);
  });
});
