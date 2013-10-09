function card(color, number, shading, shape) {
	this.color   = color;
	this.number  = number;
	this.shading = shading;
	this.shape   = shape;
}

/* determines if three cards are a set */
function isASet(card1, card2, card3) {
	for (var property in card1) {
		if (!(
				/* case 1: property is the same for all three cards */
	         (card1[property] ==
				    card2[property] ==
				    card3[property])
				/* case 2: property is different for each card */
			   ||(card1[property] !=
			 	    card2[property] !=
			 	    card3[property] !=
            card1[property])
          )
			 ) {
			  return false;
		}
	}
	return true;
}

var cards = [];
for (var color in ["red", "green", "purple"]) {
	for (var number in [1, 2, 3]) {
		for (var shading in ["solid", "striped", "clear"]) {
			for (var shape in ["oval", "rhombus", "squiggle"]) {
				cards.push(new card(color, number, shading, shape));
			}
		}
	}
}

function shuffle(deck) {
	var breadcrumbs = new Array(deck.length);
	var copy = deck.slice();
	for (var i = 0; i < deck.length; i++) {
		breadcrumbs[i] = false;
	}
	for (var i = 0; i < deck.length; i++) {
		var index = Math.floor(Math.random() * deck.length);
		while (breadcrumbs[index] === true) {
		  var j = Math.floor(Math.random() * deck.length);
		}
		deck[i] = copy[j];
		breadcrumbs[j] = true;
	}
}

shuffle(cards);
