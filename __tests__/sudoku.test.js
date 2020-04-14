import { numberChecker } from "./../src/sudoku.js";
import { Row } from "./../src/sudoku.js";

describe('number-checker', () => {

  test ('should correctly indentify if a user entry is a number or not a number', () => {
    var inputType = numberChecker(1);
    expect(inputType).toBeLessThan(10);
    expect(inputType).toBeGreaterThan(0);
  })
})

describe('pushRow', () => {
  test ('should correctly push a user entry to the row array', () => {
    var row1 = new Row ();
    row1.pushRow(7);
    expect(row1.rowArray.includes(7)).toEqual(true);
  })
})