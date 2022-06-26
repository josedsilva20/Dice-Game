

// dicee randomize
function generateDice() {
  var randomDice = Math.floor(Math.random() * 6) + 1; //  Random from 1 to 6
  return randomDice;
}

function generateName(dice){
  var randomDiceImage = "dice" + dice + ".png"; //  Sets the dice name
  var randomImgSrc = "images/" + randomDiceImage;     //  Sets the image path
  return randomImgSrc;
}

var dice1 = generateDice();
var dice2 = generateDice();

document.querySelector(".img1").setAttribute("src", generateName(dice1));
document.querySelector(".img2").setAttribute("src", generateName(dice2));

//  Telling who won the game
if (dice1 > dice2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (dice1 < dice2) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
