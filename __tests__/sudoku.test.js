import { numberChecker } from "./../src/sudoku.js";

describe('number-checker', () => {

  test ('should correctly indentify if a user entry is a number or not a number', () => {
    var inputType = numberChecker(1);
    expect(inputType).toBeLessThan(10);
    expect(inputType).toBeGreaterThan(0);
  })
})