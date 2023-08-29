//////////////////////////////
////////// Caesar //////////
//////////////////////////////
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function caesar (message, shift) {
    if (shift===0 || shift > 25 || shift < -25) return false;
    let string = message.toLowerCase();
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
}

console.log(caesar("a message", 1))
console.log(caesar("a===message", 3))
console.log(caesar("b--message", -1))
console.log(caesar("a..message", 25))

//console.log(caesar("wamp wamp", 29))

console.log(caesar("==================="))


function deCaesar (code, shift) {
    return caesar(code, shift*-1);
}
let shifted = caesar("Zebra magazine", 3);
console.log(shifted)
let deShifted = deCaesar("cheud pdjdclqh", 3);
console.log(deShifted)
console.log(deCaesar("==================="))


//////////////////////////////
////////// Polybius //////////
//////////////////////////////
// Nested arrays; I chose to nest columns inside of rows instead of vice versa bc the Polybius method selects columns first, then rows.
// Polybius Square declared as global constant
const col1 = ["a", "f", "l", "q", "v"];
const col2 = ["b", "g", "m", "r", "w"];
const col3 = ["c", "h", "n", "s", "x"];
const col4 = ["d", "i/j", "o", "t", "y"];
const col5 = ["e", "k", "p", "u", "z"];
const polySquare = [col1, col2, col3, col4, col5];

function polybius (message) {
    let string = message.toLowerCase();
    //if (typeof string !== "string") string = string.toString();
    let poly = "";

    for (let i=0; i<string.length; i++) {   //iterates across string to select individual characters
        if (string.charAt(i) === " ") {
            poly = poly + " ";
        } else {

        let char = string.charAt(i);

//        if (char = " ") {
//            poly = poly + " ";
//        } else 

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

function dePolybius (string) {
    let dePoly = ""

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

    return dePoly
}

console.log(polybius("ij"))
console.log(dePolybius("42"))
//console.log(dePolybius(42))
console.log(polybius("a mesjsage"))
console.log(dePolybius("1142 23513434112251"))
console.log(polybius("A meSsage"))

//////////////////////////////
////////// Substitution //////////
//////////////////////////////
function substitution (message, key) {
    let keyArr = key.split("")

    if (keyArr.length !== 26) return false;

    for (let j=0; j<keyArr.length; j++) {
        for (let k=j+1; k<keyArr.length; k++) {
            if (keyArr[j] === keyArr[k]) return false;
        }
    }
    
    let string = message.toLowerCase();
    let messageArr = string.split("")

    for (let i=0; i<keyArr.length; i++) {
        let char = messageArr[i];

        if (alphabet.includes(char)) {
            let index = alphabet.indexOf(char)
            messageArr[i] = keyArr[index];
        }

    }

    return messageArr.join("");
}

//let sub = substitution("MeSsage", "plmoknijbuhvygctfxrdzeswaq");
//let sub2 = substitution("message", "plmoknijbuhvygctfxrdzes");
//let sub3 = substitution("MeSsage", "plmoknijbuhvygcqfxrdzeswaq");

console.log(substitution("MeSsage", "plmoknijbuhvygctfxrdzeswaq"))
console.log(substitution("message", "plmoknijbuhvygctfxrdzes"))
console.log(substitution("MeS--sage", "plmoknijbqhvygctfxrdzeswau"))

function deSubstitution (code, key) {
    let keyArr = key.split("")

    if (keyArr.length !== 26) return false;

    for (let j=0; j<keyArr.length; j++) {
        for (let k=j+1; k<keyArr.length; k++) {
            if (keyArr[j] === keyArr[k]) return false;
        }
    }
    
    let string = code.toLowerCase();
    let codeArr = string.split("")

    for (let i=0; i<keyArr.length; i++) {
        let char = codeArr[i];

        if (keyArr.includes(char)) {
            let index = keyArr.indexOf(char)
            codeArr[i] = alphabet[index];
        }

    }

    return codeArr.join("");
}

let deSub = deSubstitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq")
console.log(deSub)

console.log(deSubstitution("message", "plmoknijbuhvygctfxrdzes"))
console.log(deSubstitution("YkR--rPik", "plmoknijbqhvygctfxrdzeswau"))


