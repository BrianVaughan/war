$(document).ready(function() {

	//what does this do?
	//This convert the number to face cards
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?
	//this creates a deck of cards.  each card is a number and a string hearts, diamonds spades and clubs
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//shuffle the deck
	

	var shuffled_deck = _.shuffle(deck);
	
	var cards_player_1 = [];
	var cards_player_2 = [];
	//divide out the cards into the two arrays
	cards_player_1 = shuffled_deck.slice(0,26);
	cards_player_2 = shuffled_deck.slice(26);
	

	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	function war(card_1,card_2) {
          if (card_1.number > card_2.number){
          	return true;
          } else {
          	return false;
          }

	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
		var card_1 = cards_player_1[0];
		var card_2 = cards_player_2[0];
		var outcome = war(card_1,card_2);
		if (outcome ==false){
			cards_player_2.push(card_1);
			cards_player_2.push(card_2);
			cards_player_1.slice(0,0);
		}else{
			cards_player_1.push(card_1);
			cards_player_1.push(card_2);
			cards_player_2.push(0,0);
		}
		
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});