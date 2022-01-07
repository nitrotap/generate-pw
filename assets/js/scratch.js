

var randomNum = function (min, max) {
    var a = Math.floor(Math.random() * (max - min + 1) + min);
    return a;
};

console.log(String.fromCharCode(randomNum(97,122)));

