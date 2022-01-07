// Assignment code here

var randomNum = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + 1);
  return value;
}

function setLength() { // returns length
  var inputLength = window.prompt("What length password? 8-128 characters");
  if (inputLength >= 8 && inputLength <= 128) {
    length = inputLength;
  } else {
    window.alert("Incorrect Length! You entered: " + inputLength + ". You need to enter a number between 8 and 128.");
    setLength();
  }
  return length;
}

function setLowerCase() { // returns lowerCase
  var inputLowerCase = window.prompt(
    "Should your password include lowercase letters? Y or N"
  );
  inputLowerCase = inputLowerCase.toLowerCase;
  switch (inputLowerCase) {
    case "yes":
    case "y":
      lowerCase = true;
      break;
    default:
      lowerCase = false;
  }
  window.alert("lowercase use: " + lowerCase);
  return lowerCase;
}

// get a random lowercase letter
function getLowerCase() {
  // 26 letters in the alpabet - UTF codes 97-122
  // get letter number and use String.fromCharCode() to get actual letter
  letter = String.fromCharCode(randomNum(97, 122));

}

function setUpperCase() { // returns upperCase
  var inputUpperCase = window.prompt(
    "Should your password include UPPERCASE letters? Y or N"
  );
  inputUpperCase = inputUpperCase.toLowerCase;
  var upperCase = true;
  if (inputUpperCase === "yes" || inputUpperCase === "y") {
    upperCase = true;
  } else {
    upperCase = false;
  }
  window.alert("uppercase use: " + upperCase);
  return upperCase;
}

function setNumeric() { // returns setNumeric
  var inputNumeric = window.prompt(
    "Should your password include numbers 0-9? Y or N"
  );
  inputNumeric = inputNumeric.toLowerCase();
  setNumeric = true;
  switch (inputNumeric) {
    case "yes":
    case "y":
      setNumeric = true;
      break;
    default:
      setNumeric = false;
  }
  window.alert("Integer use: " + setNumeric);
  return setNumeric;
}

function setSpecialCharacter() { // returns setSpecial
  var inputSpecialCharacters = window.prompt(
    "Should your password include special characters? Y or N"
  );
  inputSpecialCharacters = inputSpecialCharacters.toLowerCase();
  switch (inputSpecialCharacters) {
    case "yes":
    case "y":
      setSpecialCharacters = true;
      break;
    default:
      setSpecialCharacters = false;
  }
  window.alert("Special Character use: " + setSpecialCharacters);
  return setSpecialCharacters;
}

// length 8-128 chars
// charTypes lowercase, uppercase, numeric, and/or special characters
function generatePassword(length, lowerCase, upperCase, setNumeric, setSpecialCharacters) {

  for (var i = 0; i < length - 1; i++) {
    // pick at random a function from 4 available methods
    methodNum = randomNum(1, 4);

    switch (methodNum) {
      case 1:
        getLowerCase();
        break;
      case 2:
        // get upper case
      
        break;
      case 3:
        // get numeric value

        break;
      case 4:
        // get special character  

        break;
      default:
        // default back up

    }





  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

while (true) {
  setLength();
  setLowerCase();
  setUpperCase();
  setNumeric();
  setSpecialCharacters;
  set
}
