$(document).ready(function(){

  var player = new BlackJackGame();
  var dealer = new BlackJackGame();

  // dealer._getDealerCard();
  // console.log("Dealer", dealer.dealerCard);
  // console.log("Dealer Total:" + dealer.dealerTotal);
  //


  $("#Hit").click(function(){
    if (!player.isMoreThanTwentyOne()){
      player.hit();
      $(".cardDeck").append(`<img src="css/${player.getPictureCard()}">`);
      $("#gamestatusTotal").html(player.total);
    }

      console.log(dealer.dealerTotal);

      if(dealer.isLess17()){
        dealer._getDealerCard();
      }


      if (player.is21() && dealer.dealerTotal < 21){
      $("#gamestatus").html("!!Black Jack!!");
      $("#dealerTotal").html(dealer.dealerTotal);
      }else if(player.isMoreThanTwentyOne()){
      $("#gamestatus").html("Game Over!!");
      $("#dealerTotal").html(dealer.dealerTotal);
    } else if (dealer.is21()){
      $("#gamestatus").html("You lost!");
      $("#dealerTotal").html("Blackjack");
    } else if (dealer.isMoreThanTwentyOne() && !player.isMoreThanTwentyOne()){
      $("#gamestatus").html("You won!");
      $("#dealerTotal").html(dealer.dealerTotal);

      }
    });


  $("#NewGame").click(function(){
    player.reset();
    dealer.reset ();
    $("#gamestatusTotal").html("0");
    $("#dealerTotal").html("0");
    $(".cardDeck").empty();
    $("#gamestatus").empty();
    $('#Hit').prop('disabled', false);

    dealer._getDealerCard();
    console.log("Dealer Card1:" + dealer.dealerCard);
    dealer._getDealerCard();
    console.log("Dealer Card2:" + dealer.dealerCard);
    console.log("Dealer total of 2 cards " + dealer.dealerTotal);
    $("#dealerTotal").html(dealer.dealerTotal);

    player.hit();
    $(".cardDeck").append(`<img src="css/${player.getPictureCard()}">`);
    player.hit();
    $(".cardDeck").append(`<img src="css/${player.getPictureCard()}">`);
    $("#gamestatusTotal").html(player.total);

  });

  $("#Stand").click(function(){
    $('#Hit').prop('disabled', true);
    $("#dealerTotal").html(dealer.dealerTotal);
    if (player.is21()){
      $("#gamestatus").html("!!!!Black Jack!!!!");
      console.log("You wiiiiin");
    } else if (player.total === dealer.dealerTotal){
      $("#gamestatus").html("It's a tie!!");
      $("#dealerTotal").html(dealer.dealerTotal);
      console.log("It's a tie");
    } else if (player.total < dealer.dealerTotal){
      $("#gamestatus").html("You lost");
      $("#dealerTotal").html(dealer.dealerTotal);
    } else if (player.total > dealer.dealerTotal && !player.isMoreThanTwentyOne()){
      $("#gamestatus").html("You won!");
      $("#dealerTotal").html(dealer.dealerTotal);
    } else {
      $("#dealerTotal").html("Dealer won!!" + dealer.dealerTotal);
      $("#gamestatus").html("You loose! Play Again?");
    }

  });
});
