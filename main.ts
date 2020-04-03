// creating HANGMAN gallows
let guesses : any;
let toGuess : any;
let guessed : string;
let max : number;

const hangMan = new Array ("--------\n|      |\n|\n|\n|\n|\n=====",
"--------\n|      O\n|\n|\n|\n|\n=====",
"--------\n|      O\n|      |\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|     /\n|\n=====",
"--------\n|      O\n|     \\|/\n|      |\n|     / \\\n|\n=====")
const guessChoices = new Array("KEVIN","AARON","WARREN","COLE","BOCEN")
const start=()=> {
 guesses = 0;
  max = hangMan.length-1;
  guessed = " ";
 let len : any; len = guessChoices.length - 1;
 toGuess = guessChoices[Math.round(len*Math.random())].toUpperCase()
 displayHangman()
 displayToGuess()
 displayGuessed()
}
function stayAway() {
    let gameId:any;
    gameId=document.getElementById("game");
    gameId.elements[3].focus();

//     let gameId=document.getElementById("game");
//     let game =gameId;
// game.elements[3].focus()
 alert("Don't mess with this form element!")
}
function displayHangman() {
    let statusid:any;
    statusid=document.getElementById("status");
    statusid.value=hangMan[guesses];
//  document.game.status.value=hangMan[guesses]
}
let displayToGuess=()=> {

    let pattern : string;
 pattern=""
 for(let i=0;i<toGuess.length;++i) {
  if(guessed.indexOf(toGuess.charAt(i)) != -1)
   pattern += (toGuess.charAt(i)+" ")
  else pattern += "_ "
 }

 let togusId:any;
 togusId=document.getElementById("toGuess");
 togusId.value=pattern;
//  document.game.toGuess.value=pattern
}
function displayGuessed() {
    let guessedId:any;
    guessedId=document.getElementById("guessedid");
     guessedId.value=guessed;

}
function badGuess(s: any) {
 if(toGuess.indexOf(s) == -1) return true
 return false
}
function winner() {
 for(let i=0;i<toGuess.length;++i) {
  if(guessed.indexOf(toGuess.charAt(i)) == -1) return false
 }
 return true
}
function guess(s: string){
 if(guessed.indexOf(s) == -1) guessed = s + guessed;
 if(badGuess(s)) ++guesses
 displayHangman()
 displayToGuess()
 displayGuessed()
 if(guesses >= max){
 alert("You Lose! Try again? The word you missed was "+toGuess+".")
  start()
 }
 if(winner()) {
  alert("You win!")
  start()
 }
}