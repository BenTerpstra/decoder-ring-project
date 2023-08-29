// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const trueAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    
        let string = input.toLowerCase();
        let key = alphabet;
              let keyArr = key.split("")
                  let codeArr = string.split("")
        if (keyArr.length !== 26) return false;
    for (let j=0; j<keyArr.length; j++) {
        for (let k=j+1; k<keyArr.length; k++) {
            if (keyArr[j] === keyArr[k]) return false;
        }
    }


    if (encode === false) {

    if (keyArr.length !== 26) return false;

    for (let j=0; j<keyArr.length; j++) {
        for (let k=j+1; k<keyArr.length; k++) {
            if (keyArr[j] === keyArr[k]) return false;
        }
    }
    

    for (let i=0; i<keyArr.length; i++) {
        let char = codeArr[i];

        if (keyArr.includes(char)) {
            let index = keyArr.indexOf(char)
            codeArr[i] = trueAlphabet[index];
        }

    }
    return codeArr.join(""); 
    }
    


    
    //let string = input.toLowerCase();
    let messageArr = string.split("")

    for (let i=0; i<keyArr.length; i++) {
        let char = messageArr[i];

        if (trueAlphabet.includes(char)) {
            let index = trueAlphabet.indexOf(char)
            messageArr[i] = keyArr[index];
        }  

    } 

    return messageArr.join("");
    
    
    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
