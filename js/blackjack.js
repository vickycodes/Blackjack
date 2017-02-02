var cards = [
  ["img/2-Clubs.png","img/2-Hearts.png", "img/2-Spades.png", "img/2-Diamonds.png" ],
  ["img/3-Clubs.png","img/3-Hearts.png", "img/3-Spades.png", "img/3-Diamonds.png" ],
  ["img/4-Clubs.png","img/4-Hearts.png", "img/4-Spades.png", "img/4-Diamonds.png" ],
  ["img/5-Clubs.png","img/5-Hearts.png", "img/5-Spades.png", "img/5-Diamonds.png" ],
  ["img/6-Clubs.png","img/6-Hearts.png", "img/6-Spades.png", "img/6-Diamonds.png" ],
  ["img/7-Clubs.png","img/7-Hearts.png", "img/7-Spades.png", "img/7-Diamonds.png" ],
  ["img/8-Clubs.png","img/8-Hearts.png", "img/8-Spades.png", "img/8-Diamonds.png" ],
  ["img/9-Clubs.png","img/9-Hearts.png", "img/9-Spades.png", "img/9-Diamonds.png" ],
  ["img/10-Clubs.png","img/10-Spades.png", "img/10-Spades.png", "img/10-Diamonds.png"],
  ["img/11-Clubs.png","img/11-Hearts.png", "img/11-Spades.png", "img/11-Diamonds.png"],
  ["img/12-Clubs.png","img/12-Hearts.png", "img/12-Spades.png", "img/12-Diamonds.png"],
  ["img/13-Clubs.png","img/13-Hearts.png", "img/13-Spades.png", "img/13-Diamonds.png"],
  ["img/1-Clubs.png","img/1-Hearts.png", "img/1-Spades.png", "img/1-Diamonds.png"],

];



function BlackJackGame () {
  this.card = 0;
  this.total = 0;
  this.picturePicked = "";
  this.dealerCard = 0;
  this.dealerTotal = 0;
}

// GENERATE CARD

BlackJackGame.prototype._getRandomCard = function(){

  this.card = Math.floor(Math.random()*13)+1;


//2 different value options for Ace
    if (this.card === 1 && this.total === 20) {
      this.total += this.card;
    console.log("randomCard:" + "Card is an Ace " + this.card);
  } else if (this.card === 1 ) {
      this.total += 11;
    console.log("randomCard:" + "Card is an Ace " + this.card);

  } else if (this.card === 11) {
      this.total += 10;
    console.log("randomCard:" + "Card is a Jack " +  this.card);
  } else if (this.card === 12) {
      this.total +=  10;
    console.log("randomCard:" + "Card is a Queen " + this.card);
  } else if (this.card === 13) {
      this.total += 10;
    console.log("randomCard:" + "Card is a King " + this.card );

  } else { this.total += this.card;}
    console.log("randomCard: ", this.card);

};


// WITH THE HIT FUNCTION CALLING THE _getRandomCard FUNCTION -ALSO DECLARE SHOWN CarDPICTURE
BlackJackGame.prototype.hit = function(){
  this._getRandomCard();

  var randomPicture = Math.floor(Math.random()*3);

    if (this.card === 2){
      this.picturePicked = cards[0][randomPicture];
    } else if (this.card === 3){
      this.picturePicked = cards[1][randomPicture];
    } else if (this.card === 4){
      this.picturePicked = cards[2][randomPicture];
    } else if (this.card === 5){
      this.picturePicked = cards[3][randomPicture];
    } else if (this.card === 6){
      this.picturePicked = cards[4][randomPicture];
    } else if (this.card === 7){
      this.picturePicked = cards[5][randomPicture];
    } else if (this.card === 8){
      this.picturePicked = cards[6][randomPicture];
    } else if (this.card === 9){
      this.picturePicked = cards[7][randomPicture];
    } else if (this.card === 10){
      this.picturePicked = cards[8][randomPicture];
    } else if (this.card === 11){
      this.picturePicked = cards[9][randomPicture];
    } else if (this.card === 12){
      this.picturePicked = cards[10][randomPicture];
    } else if (this.card === 13){
      this.picturePicked = cards[11][randomPicture];
    } else if (this.card === 1) {
      this.picturePicked = cards[12][randomPicture];
    }

    console.log(this.picturePicked);
};

BlackJackGame.prototype.getPictureCard = function(){
  return this.picturePicked;
};

BlackJackGame.prototype.reset = function(){
  this.player = 0;
  this.card = 0;
  this.total = 0;
  this.dealer = 0;
  this.dealerTotal = 0;
  this.dealerCard = 0;
  this.isWinner = 0;
};

BlackJackGame.prototype.startingHand = function (){
  this.hit();
  this.hit();

};



// FOR EVERY NEW "HIT" IT IS ESSENTIAL TO CHECK IF GAME IS ALREADY LOST OR NOT
BlackJackGame.prototype.isMoreThanTwentyOne = function(){
  if (this.total>21){
    return true;
  }else {
    return false;
  }
};


//Dealer
BlackJackGame.prototype._getDealerCard = function (){


  this.dealerCard = Math.floor(Math.random()*13)+1;



  if (this.dealerCard >= 2 && this.dealerCard <= 10) {
      this.dealerTotal += this.dealerCard;
    // console.log("Dealer card:"  + this.dealerCard);
  } else if (this.dealerCard === 1) {
      this.dealerTotal += 11;
    // console.log("Dealer card:" + "Card is an Ace " +  this.dealerCard);
  } else if (this.dealerCard === 1 && this.dealerTotal === 16){
    this.dealerTotal += 1;

  } else if (this.dealerCard  === 11) {
      this.total += 10;
    // console.log("Dealer card:" + "Card is a Jack " +  this.dealerCard);
  } else if (this.dealerCard  === 12) {
      this.dealerTotal +=  10;
    // console.log("Dealer card:" + "Card is a Queen " +  this.dealerCard);
  } else if (this.dealerCard  === 13) {
      this.dealerTotal += 10;
    // console.log("Dealer card:" + "Card is a King " +  this.dealerCard);
  }

};


BlackJackGame.prototype.isLess17 = function(){
  return this.dealerTotal > 16 ? false : true ;

};





BlackJackGame.prototype.stand = function() {
   if(player.total > 21 || player.total < dealer.dealerTotal){
    console.log("You lost");
  } else {console.log("You won");}
};




BlackJackGame.prototype.is21 = function(){
  return this.total === 21 ? true : false;
};



// BlackJackGame.prototype.isWinner = function(){
//   if (this.total === this.dealerTotal){
//       return false
//     $("#gamestatus").html("It's a tie!");
//     $("#dealerTotal").html(dealer.dealerTotal);
//   } else if (this.total < this.dealerTotal) {
//     return false
//     $("#gamestatus").html("You lost");
//     $("#dealerTotal").html(dealer.dealerTotal);
//   } else if (this.isMoreThanTwentyOne()) {
//     return false
//     $("#gamestatus").html("You lost");
//     $("#dealerTotal").html(dealer.dealerTotal);
//   } else if (this.is21()) {
//     return true
//     $("#gamestatus").html("!Blackjack!");
//     $("#dealerTotal").html(dealer.dealerTotal);
//   }
//
// };
