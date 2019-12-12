// on click of square console log what square was clicked
console.log("hello");

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
$par.css("font-size", "40px");
$par.css("margin", "1px, 0px, 1px, 0px");
$par.css("color", "blue");
$par.css("background-color", "white");
$par.css("border-radius", "50px");
$par.css("border", "8px solid #1E90FF");
$par.css("padding", "5px");
$par.css("box-shadow", "3px 3px 5px 6px #949494");
$("#playerOneScore").html("0");  $("#playerTwoScore").html("0");
// var enterXorO = function() {
// console.log (`the box that was clicked was ${this}`)
// },

// 1) Tell me what box i clicked on
// $('.box').on('click', function() {
//   const box = $(this)[0]
//   // console.log('.box');
//   console.log(box.id);
// })

// 2) Is the box empty // do last

// 3) whos's turn is it

// 4) based on whos turn it is, update the box with the respective players symbol & change to the other player

// 5) update state of the game

// 5.5) Check if winner


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// global player turn variable
let player = true;

$('.box').on('click', function() {
  // const box = $(this)[0]
  // // console.log('.box');
  // console.log(box.id);

  if ( player ) {
    // update the current box with player x symbol.
    var $p = $("<p></p>");
    $p.html("X");
    $(this).append($p);
    $playerPrompt.html("Player Two");
    winningCombos()

  } else {
    $playerPrompt.html("Player One");
    var $p = $("<p></p>");
    $p.html("0");
    $(this).append($p);
    winningCombos()
    // player is O do something
  }
  // change the player
  player = ! player

}); // end of on click function

$("button").on('click', function() {
  $(".box").html("");
});

$("button").on('click', function() {
 $par.html("");
});

$("button").on('click', function() {
 $par.css("border", "none");
 $par.css("background-color", "transparent");
 $par.css("box-shadow", "none");
});

$("button").on('click', function() {
$playerPrompt.html("Player One");
});
//end of reset

//Method one of checking for a winner
// const winningCombinations = function() {
//
//   const $combo1  = $box1.text() + $box2.text() + $box3.text();
//   const $combo2 = $box4.text() + $box5.text() + $box6.text();
//   const $combo3 = $box7.text() + $box8.text() + $box9.text();
//   const $combo4 = $box1.text() + $box4.text() + $box7.text();
//   const $combo5 = $box2.text() + $box5.text() + $box8.text()
//   const $combo6 = $box3.text() + $box6.text() + $box9.text()
//   const $combo7 = $box1.text() + $box5.text() + $box9.text()
//   const $combo8 = $box3.text() + $box5.text() + $box7.text()
//

//  if ($combo1 === "XXX" || $combo1 === "000") {
//    console.log("You win");
//  } else if ( $combo2 === "XXX" || $combo2 === "000") {
//    console.log("You win");
//  } else if ( $combo3 === "XXX" || $combo3 === "000") {
//    console.log("You win");
//  } else if ( $combo4 === "XXX" || $combo4 === "000") {
//    console.log("you win");
//  } else if ($combo5 === "XXX" || $combo5 === "000") {
//    console.log("you win");
//  } else if ($combo6 === "XXX" || $combo6 === "000") {
//   console.log("you win");
// } else if ($combo7 === "XXX" || $combo7 === "000") {
//   console.log("you win");
// } else if ($combo8 === "XXX" || $combo8 === "000") {
//   console.log ("you win");
// } else {
//   return;
// }
// };

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

console.log(drawSquares);
console.log(drawSquares.includes(''));

for (var i = 0; i < winningCombinations.length; i++) {
  var innerArr = winningCombinations[i];


  if (innerArr.join("") === "XXX") {
    $par.css("background-color", "white");
    $par.css("border-radius", "50px");
    $par.css("border", "8px solid #1E90FF");
    $par.css("padding", "5px");
    $par.html("Player one wins!!!");
    $(".winnerAlert").append($par);
    player1Score += 1;
    $("#playerOneScore").html(player1Score);



  } else if (innerArr.join("") === "000") {
    $par.css("background-color", "white");
    $par.css("border-radius", "50px");
    $par.css("border", "8px solid #1E90FF");
    $par.css("padding", "5px");
    $par.html("Player two wins!!!");
    $(".winnerAlert").append($par);
    player2Score += 1;
    $("#playerTwoScore").html(player2Score);

  } else if ( drawSquares.includes('') )  {

    console.log('There are more moves to play');

  } else {
    // The game is a draw
    console.log('The game is a draw');
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
