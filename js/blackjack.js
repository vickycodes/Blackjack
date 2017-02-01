var cards = [
  ["img/2-Clubs.png","img/2-Hearts.png", "img/2-Spades.png", "img/2-Diamonds.png" ],
  ["img/3-Clubs.png","img/3-Hearts.png", "img/3-Spades.png", "img/3-Diamonds.png" ],
  ["img/4-Clubs.png","img/4-Hearts.png", "img/4-Spades.png", "img/4-Diamonds.png" ],
  ["img/5-Clubs.png","img/5-Hearts.png", "img/5-Spades.png", "img/5-Diamonds.png" ],
  ["img/6-Clubs.png","img/6-Hearts.png", "img/6-Spades.png", "img/6-Diamonds.png" ],
  ["img/7-Clubs.png","img/7-Hearts.png", "img/7-Spades.png", "img/7-Diamonds.png" ],
  ["img/8-Clubs.png","img/8-Hearts.png", "img/8-Spades.png", "img/8-Diamonds.png" ],
  ["img/9-Clubs.png","img/9-Hearts.png", "img/9-Spades.png", "img/9-Diamonds.png" ],
  ["img/10-Clubs.png","img/10-Hearts.png", "img/10-Spades.png", "img/10-Diamonds.png"],
  ["img/11-Clubs.png","img/11-Hearts.png", "img/11-Spades.png", "img/11-Diamonds.png"],
  ["img/12-Clubs.png","img/12-Hearts.png", "img/12-Spades.png", "img/12-Diamonds.png"],
  ["img/13-Clubs.png","img/13-Hearts.png", "img/13-Spades.png", "img/13-Diamonds.png"],
  ["img/1-Clubs.png","img/1-Hearts.png", "img/1-Spades.png", "img/1-Diamonds.png"],

];



function BlackJackGame () {
  // this.dealer = 0;
  this.playerCards = 0;
  this.card = 0;
  this.total = 0;
}

var player = new BlackJackGame();

// GENERATE CARD

BlackJackGame.prototype._getRandomCard = function(){
  var randomCard = Math.floor(Math.random()*13)+1;
    console.log("randomCard: ", randomCard);
    if (randomCard === 1) {
    this.total +=  10;
    console.log("Card is an Ace ");
  } else if (randomCard === 11) {
      this.total = this.total + 10;
    console.log("Card is a Jack ");
  } else if (randomCard === 12) {
      this.total +=  10;
    console.log("Card is a Queen ");
  } else if (randomCard === 13) {
      this.total += 10;
    console.log("Card is a King ");

  } else { return randomCard;}

  return this.total += randomCard;


};


// WITH THE HIT FUNCTION CALLING THE _getRandomCard FUNCTION -ALSO DECLARE SHOWN CarDPICTURE
BlackJackGame.prototype.hit = function(){
  var card = this._getRandomCard();
  var randomPicture = Math.floor(Math.random()*3);
  var picturePicked = "";
    if (card === 2){
        picturePicked += cards[0][randomPicture];
    } else if (card === 3){
      picturePicked += cards[1][randomPicture];
    } else if (card === 4){
      picturePicked += cards[2][randomPicture];
    } else if (card === 5){
      picturePicked += cards[4][randomPicture];
    } else if (card === 6){
      picturePicked += cards[5][randomPicture];
    } else if (card === 7){
      picturePicked += cards[6][randomPicture];
    } else if (card === 8){
      picturePicked += cards[7][randomPicture];
    } else if (card === 9){
      picturePicked += cards[8][randomPicture];
    } else if (card === 11){
      picturePicked += cards[9][randomPicture];
    } else if (card === 12){
      picturePicked += cards[10][randomPicture];
    } else if (card === 13){
      picturePicked += cards[11][randomPicture];
    } else if (card === 1) {
      picturePicked += cards[12][randomPicture];
    } else {return "The card does not exist"; }

console.log(picturePicked);

};


// FOR EVERY NEW "HIT" IT IS ESSENTIAL TO CHECK IF GAME IS ALREADY LOST OR NOT
BlackJackGame.prototype.isMoreThanTwentyOne = function(){
  if (this.total>21){
    return true;
  }else {
    return false;
  }
};

// THE PLAYER CAN STILL "HIT" IF HIS TOTAL IS NOT MORE THAN 21
while(!player.isMoreThanTwentyOne()){
  player.hit();
}
document.getElementById("gamestatus").innerHTML = player.total;





//_____________________________________HTML INTERACTIONS________________________________
var blackJackGame;
$(document).ready(function(){
  blackJackGame = new BlackJackGame();
    var html = '';

    // $('#img-card')
    // var image = "./img/" + random + ".png";
    // $(".deck").after($('<img class ="card">').attr("src", image));

    $("#NewGame").click(function(){
        player.hit();
      var image = "./img/" + ".png";
        $(".cardDeck").after($('<img class ="cardImg">').attr("src", image));

        $('<img src="css/img/"+picturePicked>').appendTo($(".cardDeck"));
    });

      });


//     this.nextCard = function () {
//       this.card = parseInt((Math.random()*13) + 1);
//       console.log("Next Card is a " + this.card);
//

//
//
// //Deal Cards
//
//     this.play = function(){
//       this.nextCard();
//       this.total += this.card;
//       this.checkResult();
//     };
//     this.stand = function() {
//       this.total = 0;
//       console.log("Let's start again");
//     };
//     this.checkResult = function() {
//       console.log("Total = " + this.total);
//       if (this.total > 21) {
//         // console.log("You lose! Play Again?");
//         this.total = 0;
//       } else if (this.total == 21) {
//         // console.log("You Win!  Play Again?");
//         this.total = 0;
//       }
//
//   };
// }
//
//   var myGame = new BlackJackGame();
//   myGame.play();
//   myGame.play();
