const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe ("polybius", () => {
  it ("should translate 'message' to '23513434112251'", () => {          
     const expected = "23513434112251";
     const actual = polybius("message");
     expect(actual).to.equal(expected);
  });  
//////////    
  it ("should translate 'thinkful' to '4432423352125413'", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should produce output that is a string when encoding", () => {
        const expected = "string";
        const actual = typeof polybius("thinkful");
        expect(actual).to.equal(expected);
  });
//////////
  it ("should return false when decoding if number of characters (other than spaces) is odd", () => {
        const expected = false;
        const actual = polybius("12345 6789", false);
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should maintain spaces throughout when decoding", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should maintain spaces throughout when decoding", () => {
        const expected = "hello   world";
        const actual = polybius("3251131343   2543241341", false);
        expect(actual).to.equal(expected);
  });  
//////////  
  it ("should maintain spaces throughout when encoding", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("Hello world");
        expect(actual).to.equal(expected);
  });
//////////
  it ("should maintain multiple spaces throughout when encoding", () => {
        const expected = "3251131343   2543241341";
        const actual = polybius("Hello   world");
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should translate '42' into '(i/j)' when decoding", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should translate both i and j into '42' when encoding", () => {
        const expected = "42";
        const actual = polybius("i");
        expect(actual).to.equal(expected);
  });
//////////
  it ("should translate both i and j into '42' when encoding", () => {
        const expected = "42";
        const actual = polybius("j");
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should ignore capital letters when encoding", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("HeLlO wOrLd");
        expect(actual).to.equal(expected);
  });
});

