$(document).ready(function() {

	function Player(name) {
		this.name = name;
		this.sets = 0;
	}

	function Card(color, shape, number, filling) {
		this.color   = color;
		this.shape   = shape;
		this.number  = number;
		this.filling = filling;
	}

	var properties = {
		"colors":  ["red","green","purple"],
		"numbers": [1,2,3],
		"shapes":  ["oval","diamond","squiggle"],
		"shades":  ["clear","striped","solid"]
	};

	var deck = [];

	for (var i = 0; i < 3; i+=1) {
		for (var j = 0; j < 3; j+=1) {
			for (var k = 0; k < 3; k+=1) {
				for (var l = 0; l < 3; l+=1) {
					deck.push(new Card(properties.colors[i],properties.numbers[j],properties.shapes[k],properties.shades[l]));
				}
			}
		}
	}
});
