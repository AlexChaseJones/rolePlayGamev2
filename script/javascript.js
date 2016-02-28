
	// Character objects
var starfox = {
	name: "Star Fox",
	indexNum: 0,
	picture: "images/starfox.png",
	health: 150,
	baseAttack: 4,
	currentAttack: 0,
	attack: function(){
		this.currentAttack += 4;
	},
	counter: 24,
};

var mario = {
	name: "Mario",
	indexNum: 1,
	picture: "images/mario.png",
	health: 120,
	baseAttack: 6,
	currentAttack: 0,
	attack: function(){
		this.currentAttack += 6;
	},
	counter: 30,
};

var link = {
	name: "Link",
	indexNum: 2,
	picture: "images/link.png",
	health: 150,
	baseAttack: 5,
	currentAttack: 0,
	attack: function(){
		this.currentAttack += 5;
	},
	counter: 20,
};

var donkeyKong = {
	name: "Donkey Kong",
	indexNum: 3,
	picture: "images/donkeyKong.png",
	health: 190,
	baseAttack: 3,	
	currentAttack: 0,
	attack: function(){
		this.currentAttack += 3;
	},
	counter: 35, 
};

var charArray = [starfox, mario, link, donkeyKong];

function start(){
	for (var i = 0; i < charArray.length; i++) {
		var choiceView = function(){
		return "<h1>" + this.name + "</h1><img src='" + this.picture + "' /><h2>Health Points: <br/>" + this.health + "</h2><h3>Base Attack: " + this.baseAttack + "</h3>"
		};
		charArray[i].choiceCode = choiceView;

		var battleView = function(){
		return "<div class='headBar'><h1>" + this.name + "</h1><h2>" + this.health + "HP</h2><div class='clearfix'></div></div><img src='" + this.picture + "' />" 
		};	
		charArray[i].battleCode = battleView;