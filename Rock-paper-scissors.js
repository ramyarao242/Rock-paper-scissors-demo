/**
 * Created by rrao on 12/10/18.
 */


$(document).ready(function() {
    function randomGen(){
        var num = Math.round(Math.random()* (3 - 1) + 1);

        if(num ==1 ){
            return "Rock";
        } else if(num ==2){
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    function revealResult(p,c){
        if( p == c){
            $("#result").text("Its a tie try again");
        } else {

            var choices =[p,c];
            var rock = $.inArray( "Rock", choices );
            var paper = $.inArray( "Paper", choices);
            var scissors= $.inArray("Scissors", choices);

            if(rock >= 0 && paper >= 0){
                rock < paper ? $("#result").text("I won, Human lost"): $("#result").text("You won, not bad");
            }
            else if (rock >= 0 && scissors >= 0) {
                rock < scissors ? $("#result").text("You won, not bad"): $("#result").text("I won, Human lost");
            } else if (paper >=0 && scissors >=0) {
                scissors < paper ? $("#result").text("You won, not bad"): $("#result").text("I won, Human lost");
            }
        }
    }

    $( "p" ).click(function(e) {
        var playersChoice = $(this).html();
        var computersChoice = randomGen();
        $("#players-choice").text(playersChoice);
        $("#computers-choice").text(computersChoice);

        revealResult(playersChoice,computersChoice);
    });
});

