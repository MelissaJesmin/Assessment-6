const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  //check that it returns an array of the same length as the argument sent in
  test('check that it returns an array of the same length as the argument sent in',() => {
    let arr = [1,2,3,4,5,6,7,8]
   // let result = [8,3,7,4,1,6,2,5]
    expect(shuffle(arr)).toHaveLength(arr.length)
  })

  test('check that shuffle returns an array', () => {
    let arr = [1,2,3,4,5,6,7,8]
    expect(Array.isArray(shuffle(arr))).toBe(true);
  }) 
});
