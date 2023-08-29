const { expect } = require("chai");
const { caesar } = require("../src/caesar");

/*
  it ("should ", () => {
        const expected = ;
        const actual = caesar();
        expect(actual).to.equal(expected);
  });
*/

describe ("caesar", () => {
    it ("should 'wrap around' the alphabet when a letter is shifted to be >25 or <0 while encoding", () => {
        const expected = "cheud pdjdclqh";
        const actual = caesar("Zebra Magazine", 3);
        expect(actual).to.equal(expected);
    });
//////////  
    it ("should 'wrap around' the alphabet when a letter is shifted to be >25 or <0 while decoding", () => {
        const expected = "zebra magazine";
        const actual = caesar("cheud pdjdclqh", 3, false);
        expect(actual).to.equal(expected);
    });  
//////////  
  it ("should return 'wklqnixo' when given 'thinkful' w/ shift value 3", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should return 'thinkful' when given 'wklqnixo', shift 3, and encode = false", () => {
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected);
  });  
//////////  
  it ("should return false if shift value not present", () => {
        const expected = false;
        const actual = caesar("thinkful");
        expect(actual).to.equal(expected);
  });  
//////////  
  it ("should return 'false' for shift value of 0", () => {
        const expected = false;
        const actual = caesar("thinkful", 0);
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should return false for shift values > 25", () => {
        const expected = false;
        const actual = caesar("thinkful", 99);
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should return false for shift values < -25", () => {
        const expected = false;
        const actual = caesar("thinkful", -26);
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should ignore capital letters and maintain spaces and nonalphabetic symbols throughout when encoding", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should ignore capital letters and maintain spaces and nonalphabetic symbols throughout when decoding", () => {
        const expected = "this is a secret message!";
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
  });
});



// Write your tests here!


