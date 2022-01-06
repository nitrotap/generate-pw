// Assignment code here


function setLength() {
  var inputLength = window.prompt("What length password? 8-128 characters");
  if (inputLength >= 8 && inputLength <= 128) {
    length = inputLength;
  } else {
    window.alert("Incorrect Length! You entered: " + inputLength + ". You need to enter a number between 8 and 128.");
    setLength();
  }

}

function setLowerCase() {
  var inputLowerCase = window.prompt(
    "Should your password include lowercase letters? Y or N"
  );
  switch (inputLowerCase) {
    case "yes":
    case "Y":
    case "y":
    case "YES":
      lowerCase = true;
      break;
    default:
      lowerCase = false;  
  }
  window.alert("lowercase use: " + lowerCase);
}

function setUpperCase() {
  var inputUpperCase = window.prompt(
    "Should your password include UPPERCASE letters? Y or N"
  );
  if (inputUpperCase === "yes" || inputUpperCase === "YES" || inputUpperCase === "Y" || inputUpperCase === "y") {
    upperCase = true;
  } else {
    upperCase = false;
  }
  window.alert("uppercase use: " + upperCase);
}

function useInteger() {
  var inputInteger = window.prompt(
    "Should your password include numbers 0-9? Y or N"
  );
}


// length 8-128 chars
// charTypes lowercase, uppercase, numeric, and/or special characters
function generatePassword(length, charTypes) {

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
}
