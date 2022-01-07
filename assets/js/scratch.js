function setLowerCase() { // returns lowerCase
    var input = window.prompt(
        "Should your password include lowercase letters? Y or N"
    );
    console.log(input);
    inputLowerCase = input.toLowerCase;
    console.log(inputLowerCase);
}

setLowerCase();
