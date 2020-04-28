// GLOBAL VARIABLES ESTABLISHED ====================================================

var wins = 0
var losses = 0

newRound()

function newRound() {
    score = 0
    targetNumber = Math.floor(Math.random() * 101) + 19
    console.log("Target Number: " + targetNumber)
    $("#score").text(score)
    $("#targetNumber").text(targetNumber)
    $("#wins").text(wins)
    $("#losses").text(losses)
    $("#crystals").empty() // <------------- issue right here?

    for (i=0; i <= 3; i++){
        var crystalValue = Math.floor(Math.random() * 12) + 1
        var imageCrystal = $("<img>")
        imageCrystal.addClass("crystal-image")
        imageCrystal.attr("src", "assets/images/crystal" + [i+1] + ".jpg")
        imageCrystal.attr("data-crystalvalue", crystalValue)
        $("#crystals").append(imageCrystal)
        console.log("Crystal " + [i+1] + " Value = " + crystalValue)
    }
} 

$(document).on("click", ".crystal-image", function(){
    console.log("CLICK")
    var increment = ($(this).attr("data-crystalvalue"));
    increment = parseInt(increment);

    score = score += increment;
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


