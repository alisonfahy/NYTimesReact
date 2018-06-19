
// * The random number shown at the start of the game should be between 19 - 120.
var randomNumber = Math.floor(Math.random() * 120) + 19;

// * Each crystal should have a random hidden value between 1 - 12.
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

// Set Score to 0
// var scorebox = (i=0);

// Set Wins to 0
var wins = 0;

// Set Losses to 0
var losses = 0;

var totalscore = 0;

// var youWon = "You Won!";
// var youLose = "You Lose!";

function resetGame() {
  randomNumber = Math.floor(Math.random() * 120) + 19;
  crystal1 = Math.floor(Math.random() * 12) + 1;
  crystal2 = Math.floor(Math.random() * 12) + 1;
  crystal3 = Math.floor(Math.random() * 12) + 1;
  crystal4 = Math.floor(Math.random() * 12) + 1;
  totalscore = "";
  $("#scorebox").text("");
  $("#randomNumber").text(randomNumber);
  // youWon = "";
  // youLose = "";
}

function addWins() {
  if (totalscore === randomNumber) {
    wins++;
    $("#wins").text(wins);
    // $("#youWon")
    resetGame();
}

else if (totalscore > randomNumber) {
    losses++;
    $("#losses").text(losses);
    resetGame();
}
}

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("randomNumber").innerHTML = randomNumber;

$("#crystal1").on("click", function() {
    totalscore = totalscore + crystal1;
    $("#totalscore").text(totalscore);
    console.log("Total is: " + totalscore);
    addWins();
  });

  $("#crystal2").on("click", function() {
    totalscore = totalscore + crystal2;
    $("#totalscore").text(totalscore);
    console.log("Total is: " + totalscore);
    addWins();
  });

  $("#crystal3").on("click", function() {
    totalscore = totalscore + crystal3;
    $("#totalscore").text(totalscore);
    console.log("Total is: " + totalscore);
    addWins();
  });

  $("#crystal4").on("click", function() {
    totalscore = totalscore + crystal4;
    $("#totalscore").text(totalscore);
    console.log("Total is: " + totalscore);
    addWins();
  });
