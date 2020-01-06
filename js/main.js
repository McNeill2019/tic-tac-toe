// tic tac toe project 0.

var $box1 = $(".topLine1");
var $box2 = $(".topLine2");
var $box3 = $(".topLine3");
var $box4 = $(".midLine1");
var $box5 = $(".midLine2");
var $box6 = $(".midLine3");
var $box7 = $(".bottomLine1");
var $box8 = $(".bottomLine2");
var $box9 = $(".bottomLine3");

var $playerPrompt = $("span");
var $par = $("<p></p>");
$par.css("font-size", "2vw");
$par.css("margin", "1px, 0px, 1px, 0px");
$par.css("color", "blue");
$par.css("background-color", "white");
$par.css("border-radius", "50px");
$par.css("border", "8px solid #1E90FF");
$par.css("padding", "5px");
$par.css("box-shadow", "3px 3px 5px 6px #949494");
$("#playerOneScore").html("0");  $("#playerTwoScore").html("0");

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let player = true;

$('.box').on('click', function() {

  // if the square has already been clicked do nothing

  let cellContents = $(this)[0].innerHTML;

  // if the cellContents variable is not false
  // if the cell is empty then run this:
  if ( ! cellContents ) {

    console.log('running code');

    if ( player ) {
      // update the current box with player x symbol.
      var $p = $("<p></p>");
      $p.css("font-size", "3vw");
      $p.css("vertical-align", "center");
      $p.html("X");
      $(this).append($p);
      $playerPrompt.html("Player Two");
      winningCombos()

    } else {
      var $p = $("<p></p>");
      $p.css("font-size", "3vw");
      $p.css("vertical-align", "center");
      $p.html("0");
      $p.css("font-size", "3vw")
      $(this).append($p);
      $playerPrompt.html("Player One");
      winningCombos()
      // player is O do something
    }
    // change the player
    player = ! player;

  }// end of ! cell if statement


}); // end of on click function

//reset settings:

$("button").on('click', function() {
  $(".box").html("");
});

$("button").on('click', function() {
 $par.html("");
 $par.css("display", "none");
 // $par.css("background-color", "transparent");
 // $par.css("box-shadow", "none");
 player = true; // re-setting to true so always starts with player one.
 console.log("player", player);

});

$("button").on('click', function() {
$playerPrompt.html("Player One");
});
//end of reset

var player1Score = 0;
var player2Score = 0;

const winningCombos = function() {

  const winningCombinations = [

    [ $box1.text(), $box2.text() , $box3.text() ],

    [ $box4.text(), $box5.text() , $box6.text() ],

    [ $box7.text(), $box8.text() , $box9.text() ],

    [ $box1.text(), $box4.text() , $box7.text() ],

    [ $box2.text(), $box5.text() , $box8.text() ],

    [ $box3.text(), $box6.text() , $box9.text() ],

    [ $box1.text(), $box5.text() , $box9.text() ],

    [ $box3.text(), $box5.text() , $box7.text() ]

  ]

const drawSquares = [$box1.text(), $box2.text() , $box3.text(), $box4.text(), $box5.text() , $box6.text(), $box7.text(), $box8.text() , $box9.text()];


for (var i = 0; i < winningCombinations.length; i++) {
  var innerArr = winningCombinations[i];

  if (innerArr.join("") === "XXX") {
    console.log('WINNER FOR XXX');
      $par.css("display", "block");
      $par.css("background-color", "white");
      $par.css("border-radius", "50px");
      $par.css("border", "8px solid #1E90FF");
      $par.css("padding", "5px");
      $par.html("Player one wins!!!");
      $(".winnerAlert").append($par);
      player1Score += 1;
      $("#playerOneScore").html(player1Score);
      return;
  } else if (innerArr.join("") === "000") {

      console.log('WINNER FOR 000');
      $par.css("display", "block");
      $par.css("background-color", "white");
      $par.css("border-radius", "50px");
      $par.css("border", "8px solid #1E90FF");
      $par.css("padding", "5px");
      $par.html("Player two wins!!!");
      $(".winnerAlert").append($par);
      player2Score += 1;
      $("#playerTwoScore").html(player2Score);
      return;
  } else if ( drawSquares.includes('') ) {

    console.log('There are more moves to play');

  } else {
      // The game is a draw
      console.log('The game is a draw');
      $par.css("display", "block");
      $par.css("background-color", "white");
      $par.css("border-radius", "50px");
      $par.css("border", "8px solid #1E90FF");
      $par.css("padding", "5px");
      $par.html("Its a draw!!!");
      $(".winnerAlert").append($par);
      return;
    }
  }
};
