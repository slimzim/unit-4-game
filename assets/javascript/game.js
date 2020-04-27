// GLOBAL VARIABLES ESTABLISHED ====================================================

var wins = 0
var losses = 0
var targetNumber = ""
var score = 0

newRound()

// FUNCTIONS =======================================================================

function newRound() {
    score = 0
    targetNumber = Math.floor(Math.random() * 101) + 19
    console.log("Target Number: " + targetNumber)
    $("#score").text(score)
    $("#targetNumber").text(targetNumber)
    $("#wins").text(wins)
    $("#losses").text(losses)
}

for (i=0; i <= 3 ; i++){
var crystalValue = Math.floor(Math.random() * 12) + 1
var imageCrystal = $("<img>")
imageCrystal.addClass("crystal-image")
imageCrystal.attr("src", "assets/images/crystal" + [i+1] + ".jpg")
imageCrystal.attr("data-crystalvalue", crystalValue)
$("#crystals").append(imageCrystal)
console.log("Crystal " + [i+1] + " Value = " + crystalValue)
}

$(".crystal-image").on("click", function(){

    var increment = ($(this).attr("data-crystalvalue"));
    increment = parseInt(increment);

    score = score += increment;
    console.log(score)
    $("#score").text(score)
    if (score === targetNumber){
        alert("You win!")
        wins++;
        newRound();
    }
    else if (score >= targetNumber){
        alert("You lose!")
        losses++;
        newRound();
    }
});


