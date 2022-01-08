function setLowerCase() { // returns lowerCase
    var input = window.prompt(
        "Should your password include lowercase letters? Y or N"
    );
    console.log(input);
    inputLowerCase = input.toLowerCase;
    console.log(inputLowerCase);
}

setLowerCase();


function setSpecialCharacter() { // returns setSpecial
    var input = window.prompt(
      "Should your password include special characters? Y or N"
    );
    var inputSpecialCharacters = input.toLowerCase();
    debugger;
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
        setSpecialCharacter();
    }
    console.log("special char use: " + setSpecialCharacters);
    // window.alert("Special Character use: " + setSpecialCharacters);
    return setSpecialCharacters;
  }