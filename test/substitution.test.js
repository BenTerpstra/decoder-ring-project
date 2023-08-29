const { expect } = require("chai");
const { substitution } = require("../src/substitution");

/*
  it ("should ", () => {
        const expected = ;
        const actual = substitution();
        expect(actual).to.equal(expected);
  });
*/

describe ("substitution", () => {
    it ("should encode to 'ykrrpik' when given ('message', 'plmoknijbuhvygctfxrdzeswaq', true) as arguments", () => {
        const expected = "ykrrpik";
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq", true);
        expect(actual).to.equal(expected)
    });
//////////  
  it ("should decode to 'message' when given ('ykrrpik', 'plmoknijbuhvygctfxrdzeswaq', false)", () => {
        const expected = "message";
        const actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);
        expect(actual).to.equal(expected);
  });    
//////////  
  it ("should ignore capital letters when encoding", () => {
        const expected = "ykrrpik";
        const actual = substitution("MeSsAgE", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
  });  
//////////  
  it ("should ignore capital letters when decoding", () => {
        const expected = "message";
        const actual = substitution("YkRrPiK", "plmoknijbuhvygctfxrdzeswaq", false);
        expect(actual).to.equal(expected);
  });    
//////////  
  it ("should work for multiple different alphabet keys", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
  });  
//////////  
  it ("should maintain spaces throuhgout when encoding", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
  });  
//////////  
  it ("should maintain spaces throuhgout when decoding", () => {
        const expected = "you are an excellent spy";
        const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
  });    
//////////  
  it ("should allow for non-alphabetic symbols in alphabet key when encoding", () => {
        const expected = "y&ii$r&";
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
  });  
//////////  
  it ("should allow for non-alphabetic symbols in input code when decoding", () => {
        const expected = "message";
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
  });    
//////////  
  it ("should return false when given an alphabet key of length shorter than 26", () => {
        const expected = false;
        const actual = substitution("thinkful", "short");
        expect(actual).to.equal(expected);
  });  
//////////  
  it ("should return false when given an alphabet key of length longer than 26", () => {
        const expected = false;
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev123");
        expect(actual).to.equal(expected);
  });    
//////////  
  it ("should return false when encoding if given an alphabet key with repeated characters", () => {
        const expected = false;
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
  });
//////////  
  it ("should return false when encoding if given an alphabet key with repeated characters when decoding", () => {
        const expected = false;
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz", false);
        expect(actual).to.equal(expected);
  });    
});