const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
////////////////////
function caesar(input, shift, encode = true) {
  if (encode === true) {
    if (shift===0 || shift > 25 || shift < -25 || !shift) return false;
      let string = input.toLowerCase();
      let caes = "";
      let stringArr = []; 
    
      for (let i=0; i<string.length; i++) {
          stringArr.push(string.charAt(i));
      }
    
      for (let j=0; j<stringArr.length; j++) {
        let char = stringArr[j];

        if (alphabet.includes(char)) {
          let index = alphabet.indexOf(char);
          let newInd = index + shift;

          if (newInd>25) newInd = newInd - 26;
          if (newInd<0) newInd = newInd + 26;
          stringArr[j] = alphabet[newInd]
        }
    }
      return stringArr.join("");
  } else {
//function deCaesar (input, shift, encode = false) {
      return caesar(input, shift*-1);
    }
}
  return {
    caesar,
  };
})();
  
module.exports = { caesar: caesarModule.caesar };