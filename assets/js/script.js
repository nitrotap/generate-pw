// random number generator
var randomNum = function (min, max) {
  var a = Math.floor(Math.random() * (max - min + 1) + min);
  return a;
};

function setLength() {
  // returns length
  var inputLength = window.prompt("What length password? 8-128 characters");
  if (inputLength >= 8 && inputLength <= 128) {
    var length = inputLength;
  } else {
    window.alert(
      "Incorrect Length! You entered: " +
        inputLength +
        ". You need to enter a number between 8 and 128."
    );
    var length = setLength();
  }
  return length;
}

function setLowerCase() {
  // returns lowerCase
  var input = window.prompt(
    "Should your password include lowercase letters? Y or N"
  );
  var inputLowerCase = input.toLowerCase();
  console.log(inputLowerCase);
  switch (inputLowerCase) {
    case "yes":
    case "y":
      var lowerCase = true;
      break;
    case "no":
    case "n":
      var lowerCase = false;
      break;
    default:
      window.alert("Input not recognized. Please enter Y or N.");
      var lowerCase = setLowerCase();
  }
  // window.alert("lowercase use: " + lowerCase);
  return lowerCase;
}

// get a random lowercase letter
function getLowerCase() {
  // 26 letters in the alpabet - UTF codes 97-122
  // get letter number and use String.fromCharCode() to get actual letter
  var letter = String.fromCharCode(randomNum(97, 122));
  return letter;
}

function setUpperCase() {
  // returns upperCase
  var inputUpperCase = window.prompt(
    "Should your password include UPPERCASE letters? Y or N"
  );
  var inputUpperCase = inputUpperCase.toLowerCase();
  if (inputUpperCase === "yes" || inputUpperCase === "y") {
    var upperCase = true;
  } else if (inputUpperCase === "n" || inputUpperCase === "no") {
    var upperCase = false;
  } else {
    window.alert("Input not recognized. Please enter Y or N.");
    var upperCase = setUpperCase();
  }
  // window.alert("uppercase use: " + upperCase);
  return upperCase;
}

function getUpperCase() {
  // returns letter
  var letter = String.fromCharCode(randomNum(65, 90));
  return letter;
}

function setNumeric() {
  // returns isNumeric
  var input = window.prompt("Should your password include numbers 0-9? Y or N");
  var inputNumeric = input.toLowerCase();
  switch (inputNumeric) {
    case "yes":
    case "y":
      var isNumeric = true;
      break;
    case "n":
    case "no":
      var isNumeric = false;
      break;
    default:
      window.alert("Input not recognized. Please enter Y or N.");
      var isNumeric = setNumeric();
  }
  //window.alert("Integer use: " + isNumeric);
  return isNumeric;
}

function getNumeric() {
  var number = String.fromCharCode(randomNum(48, 57));
  return number;
}

function setSpecialCharacter() {
  // returns setSpecialCharacters
  var input = window.prompt(
    "Should your password include special characters? Y or N"
  );
  var inputSpecialCharacters = input.toLowerCase();
  switch (inputSpecialCharacters) {
    case "yes":
    case "y":
      var setSpecialCharacters = true;
      break;
    case "no":
    case "n":
      var setSpecialCharacters = false;
      break;
    default:
      window.alert("Input not recognized. Please enter Y or N.");
      var setSpecialCharacters = setSpecialCharacter();
  }
  console.log("special char use: " + setSpecialCharacters);
  // window.alert("Special Character use: " + setSpecialCharacters);
  return setSpecialCharacters;
}

function getSpecialCharacter() {
  // 4 "buckets" of special characters
  // 1st bucket is 33-47
  var bucket = randomNum(1, 4);
  console.log("bucket: " + bucket);
  switch (bucket) {
    case 1:
      var spIndex = randomNum(33, 47);
      console.log(spIndex);
      break;
    case 2:
      var spIndex = randomNum(58, 64);
      console.log(spIndex);
      break;
    case 3:
      var spIndex = randomNum(91, 96);
      console.log(spIndex);
      break;
    case 4:
      var spIndex = randomNum(123, 126);
      console.log(spIndex);
      break;
    default:
      console.log("Unexpected value in getSpecialCharacter()");
      getSpecialCharacter();
  }
  var spChar = String.fromCharCode(spIndex);
  console.log(spChar);
  return spChar;
}

// length 8-128 chars
// charTypes lowercase, uppercase, numeric, and/or special characters
function generatePassword(length) {
  console.log("test log");
  var length = setLength();
  var useLowerCase = setLowerCase(); // method 1
  var useUpperCase = setUpperCase(); // method 2
  var useNumeric = setNumeric(); // method 3
  var useSpChar = setSpecialCharacter(); // method 4
  var password = "";
  var methods = new Array();

  if (useLowerCase === true) {
    methods.push(1);
  }
  if (useUpperCase === true) {
    methods.push(2);
  }
  if (useNumeric === true) {
    methods.push(3);
  }
  if (useSpChar === true) {
    methods.push(4);
  }

  console.log(methods);

  console.log("starting generate password");
  for (var i = 0; i < length; i++) {
    // pick at random a function from chosen methods
    methodNum = methods[Math.floor(Math.random() * methods.length)];
    console.log(methodNum);

    console.log("selected method: " + methodNum);
    switch (methodNum) {
      case 1:
        var newChar = getLowerCase();
        password += newChar;
        console.log(password);
        break;
      case 2:
        // get upper case
        var newChar = getUpperCase();
        password += newChar;
        break;
      case 3:
        // get numeric value
        var newChar = getNumeric();
        password += newChar;
        break;
      case 4:
        // get special character
        var newChar = getSpecialCharacter();
        password += newChar;
        break;
      default:
        console.log("error in methodNum switch");
        window.alert("No appropriate options selected! Please try again.");
        var password = generatePassword();
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
