const characters = 'uiexgfxnpqweif';

function generateKey (length, characters) {
    let newString = Array();

    for (let i=0; i < length; i++) {
        let index = Math.floor((Math.random()*characters.length));
        newString.push(characters.charAt(index));
    }

    newString = newString.join("");
    return newString;
}

console.log(generateKey(10, characters));