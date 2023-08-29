const polybiusModule = (function () {

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
  const col1 = ["a", "f", "l", "q", "v"];
  const col2 = ["b", "g", "m", "r", "w"];
  const col3 = ["c", "h", "n", "s", "x"];
  const col4 = ["d", "(i/j)", "o", "t", "y"];
  const col5 = ["e", "k", "p", "u", "z"];
  const polySquare = [col1, col2, col3, col4, col5];
  ////////////////////
  function polybius(input, encode = true) {
    let string = input.toLowerCase();
      if (encode === false) {
        let noSpaces = [];
        let dePoly = "";
  
        for (let j=0; j<string.length; j++) {
          if (string[j] !== " ") {
            noSpaces.push(string[j]);
          }
        }
        if (!Number.isInteger(noSpaces.length/2)) return false;
        
        for (let i=0; i<string.length; i+=0) {
          if (string[i]===" ") {
            dePoly += " "
            i += 1;
          } else {
          let col = Number(string[i])
          let row = Number(string[i+1]);
          let letter = polySquare[col-1][row-1];
            
          dePoly += letter;
          i += 2;
            }
        }
       return dePoly; 
      }    
    
    let poly = "";
    
    for (let i=0; i<string.length; i++) {   //iterates across string to select individual characters
      if (string.charAt(i) === " ") {
        poly = poly + " ";
      } else {
          let char = string.charAt(i);
        
          if (char === "i" || char === "j") {
            poly = poly + "42";
          } else {
              for (let j=0; j<polySquare.length; j++) {   //iterates through columns of polySquare
                if (polySquare[j].includes(char)) {  //selects columns containing desired character
                  let col = j+1;   
                  
                  for (let k=0; k<polySquare[j].length; k++) {    //iterates through values w/in columns
                    if(char === polySquare[j][k]) {     //finds desired character in selected column, converts coordinates to string, then adds to coded message string
                    let row = k+1;
                    let coordinates = col + "" + row;
                      
                    poly = poly + coordinates;
                    }
                  }
                }
              }
            }
        }
    }
      return poly;
  }    
    return {
      polybius,
    };
  })();
  
  module.exports = { polybius: polybiusModule.polybius };
  