$(document).ready(function(){

  var player = new BlackJackGame();
  var dealer = new BlackJackGame();


//ON CLICK OF THE "HIT" BUTTON
  $("#Hit").click(function(){

    if (!player.isMoreThanTwentyOne()){
      player.hit();
      $(".cardDeck").append(`<img src="css/${player.getPictureCard()}">`);
      $("#gamestatusTotal").html(player.total);
    }
      if(dealer.isLess17()){
        dealer._getDealerCard();
      }
        console.log("Next Dealer Card:" + dealer.dealerCard);
      if (player.is21() && dealer.dealerTotal < 21){
      $("#gamestatus").html("BLACK JACK - YOU WON!");
      $("#dealerTotal").html(dealer.dealerTotal);
      $('#Hit').prop('disabled', true);
      $('#Stand').prop('disabled', true);
      } else if(player.isMoreThanTwentyOne()){
      $("#gamestatus").html("BUSTED!!");
      $("#dealerTotal").html(dealer.dealerTotal);
      } else if(player.isMoreThanTwentyOne() && dealer.isMoreThanTwentyOne()){
      $("#gamestatus").html("It's a tie");
      $("#dealerTotal").html(dealer.dealerTotal);
      } else if (player.is21()){
        $("#gamestatus").html("BLACK JACK - YOU WON!");
      } else if (dealer.dealerTotal === 21){
        $("#gamestatus").html("You lost!!!");
        $("#Blackjack").html("Blackjack");
      } else if (dealer.isMoreThanTwentyOne() && !player.isMoreThanTwentyOne()){
        $("#gamestatus").html("YOU WON!");
        $("#dealerTotal").html(dealer.dealerTotal);

      }
    });

//ON CLICK OF THE "New Game" BUTTON
  $("#NewGame").click(function(){
    player.reset();
    dealer.reset ();
    $("#gamestatusTotal").html("0");
    $("#dealerTotal").html("0");
    $("#Blackjack").html("");
    $(".cardDeck").empty();
    $("#gamestatus").empty();
    $('#Hit').prop('disabled', false);
    $('#Stand').prop('disabled', false);

    dealer._getDealerCard();
    $("#dealerTotal").html(dealer.dealerTotal);
    console.log("Dealer Card1:" + dealer.dealerCard);
    dealer._getDealerCard();
    console.log("Dealer Card2:" + dealer.dealerCard);
    console.log("Dealer total of 2 cards " + dealer.dealerTotal);


    player.hit();
    $(".cardDeck").append(`<img src="css/${player.getPictureCard()}">`);
    player.hit();
    $(".cardDeck").append(`<img src="css/${player.getPictureCard()}">`);
    $("#gamestatusTotal").html(player.total);
    if (player.is21()){
      dealer._getDealerCard();
      $("#dealerTotal").html(dealer.dealerTotal);
      $("#gamestatus").html("BLACK JACK - YOU WON!");
      $('#Hit').prop('disabled', true);
      $('#Stand').prop('disabled', true);
    }

  });

$('#Stand').prop('disabled',false);
//ON CLICK OF THE "Stand" BUTTON
  $("#Stand").click(function(){
    $('#Hit').prop('disabled', true);
    // dealer._getDealerCard();
    $("#dealerTotal").html(dealer.dealerTotal);

    if (player.is21()){
      $("#gamestatus").html("!!! BLACK JACK - YOU WON !!!");
      // console.log("You wiiiiin");
    } else if (player.total === dealer.dealerTotal){
      $("#gamestatus").html("   It's a tie!! ");
      $("#dealerTotal").html(dealer.dealerTotal);
      // console.log("It's a tie");
    } else if (dealer.dealerTotal === 21){
        $("#Blackjack").html("BLACK JACK!");
        $("#gamestatus").html("   You lost!");
        // console.log("You wiiiiin");
    } else if (player.total < dealer.dealerTotal && dealer.dealerTotal < 21){
      $("#gamestatus").html("   You lost!");
      $("#dealerTotal").html(dealer.dealerTotal);
    } else if (player.total < dealer.dealerTotal && dealer.dealerTotal > 21){
      $("#gamestatus").html(" !!!  YOU WON  !!!  ");
      $("#dealerTotal").html(dealer.dealerTotal);
    } else if (dealer.isMoreThanTwentyOne()){
      $("#gamestatus").html("!!!  YOU WON  !!! ");
      $("#dealerTotal").html(dealer.dealerTotal);
    } else if (player.total > dealer.dealerTotal && !player.isMoreThanTwentyOne()){
      $("#gamestatus").html("!!!  YOU WON  !!! ");
      $("#dealerTotal").html(dealer.dealerTotal);
    // } else if ()
    //   $("#dealerTotal").html(dealer.dealerTotal);
    //   $("#gamestatus").html("You lost!!!");
}
});
});
