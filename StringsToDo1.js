//  Remove Blanks
function removeBlanks(myStr) {
    var wordArray = myStr.split(" ");
    wordArray = wordArray.join("");
    return wordArray;
}
// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
// console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

// Get Digits
function getDigits(myStr) {
    var charArray = myStr.split("");
    var numberArray = [];
    for(var i=0; i<charArray.length; i++) {
        if(Number(charArray[i])) {
            numberArray.push(charArray[i]);
        }
    }
    numberArray = numberArray.join("");
    return numberArray;
}
// console.log(getDigits("1j 323 lkl1"));

// Acronyms
function acronym(myStr) {
    var wordArray = myStr.split(" ");
    var newArray = [];
    for(var i=0; i < wordArray.length; i++) {
        var temp = wordArray[i].toUpperCase();
        newArray.push(temp[0]);
    }
    return newArray.join("");
}
// console.log(acronym(" there's no free lunch - gotta pay yer way. "));
// console.log(acronym("Live from New York, it's Saturday Night!"));

//Count Non-Spaces
function countNonSpaces(myStr) {
    var arr = myStr.split(" ")
    myStr = arr.join("");
    return myStr.length;
}
// console.log(countNonSpaces("Honey pie, you are driving me crazy"));
// console.log(countNonSpaces("Hello world !"));

//Remove Shorter Strings
function removeShorterStrings(strArray, limit) {
    var newArr = [];
    for(var i=0; i<strArray.length; i++) {
        if(strArray[i].length >= limit) {
            newArr.push(strArray[i]);
        }
    }
    return newArr;
}
// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
// console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));