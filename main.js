var guesses;
var toGuess;
var guessed;
var max;
var hangMan = new Array("--------\n|      |\n|\n|\n|\n|\n=====", "--------\n|      O\n|\n|\n|\n|\n=====", "--------\n|      O\n|      |\n|\n|\n|\n=====", "--------\n|      O\n|     \\|\n|\n|\n|\n=====", "--------\n|      O\n|     \\|/\n|\n|\n|\n=====", "--------\n|      O\n|     \\|/\n|      |\n|\n|\n=====", "--------\n|      O\n|     \\|/\n|      |\n|     /\n|\n=====", "--------\n|      O\n|     \\|/\n|      |\n|     / \\\n|\n=====");
var guessChoices = new Array("KEVIN", "AARON", "WARREN", "COLE", "BOCEN");
var start = function () {
    guesses = 0;
    max = hangMan.length - 1;
    guessed = " ";
    var len;
    len = guessChoices.length - 1;
    toGuess = guessChoices[Math.round(len * Math.random())].toUpperCase();
    displayHangman();
    displayToGuess();
    displayGuessed();
};
function stayAway() {
    var gameId;
    gameId = document.getElementById("game");
    gameId.elements[3].focus();
    alert("Don't mess with this form element!");
}
function displayHangman() {
    var statusid;
    statusid = document.getElementById("status");
    statusid.value = hangMan[guesses];
}
var displayToGuess = function () {
    var pattern;
    pattern = "";
    for (var i = 0; i < toGuess.length; ++i) {
        if (guessed.indexOf(toGuess.charAt(i)) != -1)
            pattern += (toGuess.charAt(i) + " ");
        else
            pattern += "_ ";
    }
    var togusId;
    togusId = document.getElementById("toGuess");
    togusId.value = pattern;
};
function displayGuessed() {
    var guessedId;
    guessedId = document.getElementById("guessedid");
    guessedId.value = guessed;
}
function badGuess(s) {
    if (toGuess.indexOf(s) == -1)
        return true;
    return false;
}
function winner() {
    for (var i = 0; i < toGuess.length; ++i) {
        if (guessed.indexOf(toGuess.charAt(i)) == -1)
            return false;
    }
    return true;
}
function guess(s) {
    if (guessed.indexOf(s) == -1)
        guessed = s + guessed;
    if (badGuess(s))
        ++guesses;
    displayHangman();
    displayToGuess();
    displayGuessed();
    if (guesses >= max) {
        alert("You Lose! Try again? The word you missed was " + toGuess + ".");
        start();
    }
    if (winner()) {
        alert("You win!");
        start();
    }
}
//# sourceMappingURL=main.js.map