const substitutionModule = (function () {

    const trueAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    ////////////////////
    function substitution(input, alphabet = "", encode = true) {
      let string = input.toLowerCase();
      let key = alphabet;
      let keyArr = key.split("");
      let codeArr = string.split("");
      
      if (!alphabet) return false;  
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
            let index = keyArr.indexOf(char);
            codeArr[i] = trueAlphabet[index];
          }
        }
        return codeArr.join(""); 
      }
      
      let messageArr = string.split("");
      
      for (let i=0; i<keyArr.length; i++) {
        let char = messageArr[i];
    
        if (trueAlphabet.includes(char)) {
          let index = trueAlphabet.indexOf(char);
          messageArr[i] = keyArr[index];
        }  
      }   
      return messageArr.join("");
    }
      return {
        substitution,
      };
    })();
    
    module.exports = { substitution: substitutionModule.substitution };
    