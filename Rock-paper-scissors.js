/**
 * Created by rrao on 12/10/18.
 */


$(document).ready(function() {
    function randomGen(){
        var num = Math.round(Math.random()* (3 - 1) + 1);

        if(num == 1 ){
            return "Rock";
        } else if(num == 2){
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    function revealResult(p,c){
        if( p == c){
            $("#result p").text("Its a tie try again");
        } else {

            var choices =[p,c];
            var rock = $.inArray( "Rock", choices );
            var paper = $.inArray( "Paper", choices);
            var scissors= $.inArray("Scissors", choices);

            if(rock >= 0 && paper >= 0){
                rock < paper ? $("#result p").text("I won, Human lost"): $("#result p").text("You won, not bad");
            }
            else if (rock >= 0 && scissors >= 0) {
                rock < scissors ? $("#result p").text("You won, not bad"): $("#result p").text("I won, Human lost");
            } else if (paper >=0 && scissors >=0) {
                scissors < paper ? $("#result p").text("You won, not bad"): $("#result p").text("I won, Human lost");
            }
        }
    }

    function styleResultBoxes($this, playersChoice, computersChoice) {
        //adding border when clicked
        $("#options p").removeClass("highlighted");
        $this.addClass("highlighted");

        //adding text in result boxes
        $("#players-choice p").text(playersChoice);
        $("#computers-choice p").text(computersChoice);

        //adding background img
        $("#players-choice, #computers-choice").removeClass("rock-background paper-background scissors-background");
        if(playersChoice == "Rock"){
            $("#players-choice").addClass("rock-background");
        } else if(playersChoice == "Paper") {
            $("#players-choice").addClass("paper-background");
        } else {
            $("#players-choice").addClass("scissors-background");
        }

        if(computersChoice == "Rock"){
            $("#computers-choice").addClass("rock-background");
        } else if(computersChoice == "Paper") {
            $("#computers-choice").addClass("paper-background");
        } else {
            $("#computers-choice").addClass("scissors-background");
        }
    }

    $( "p" ).click(function(e) {
        var playersChoice = $(this).html();
        var computersChoice = randomGen();
        styleResultBoxes($(this),playersChoice,computersChoice);
        revealResult(playersChoice,computersChoice);
    });
});

