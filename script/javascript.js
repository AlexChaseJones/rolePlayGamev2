// $(document).ready(function(){

var characterNames = ['starfox','mario','link','donkeyKong'];
//Character Builds.
	characters = {
	starfox: {
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
	},

	mario: {
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
	},

	link: {
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
	},

	donkeyKong: {
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
	}
};
//Adds functions that build HTML code to all characters.
for (var i = 0; i < characterNames.length; i++) {
	var target = characterNames[i];

	function choiceView(){
	return "<h1>" + this.name + "</h1><img src='" + this.picture + "' /><h2>Health Points: <br/>" + this.health + "</h2><h3>Base Attack: " + this.baseAttack + "</h3>"
	};

	function battleView(){
	return "<div class='headBar'><h1>" + this.name + "</h1><h2>" + this.health + "HP</h2><div class='clearfix'></div></div><img src='" + this.picture + "' />" 
	};	

	characters[target].choiceCode = choiceView;
	characters[target].battleCode = battleView;
};

//Initial setup, puts Characters into #characters.
for (var i = 0; i <characterNames.length; i++) {
	var target = characterNames[i];

	var chooseplayerDiv = $('<div class="choice">');
	$(chooseplayerDiv).html(characters[target].choiceCode());
	$(chooseplayerDiv).attr('data-index', characterNames[i]);
	$(chooseplayerDiv).appendTo('#characters');
};

$('.choice').on('click', playerChoice);

function playerChoice(){
	target = $(this).data('index');
	playerObject = characters[target];	
	$('#characters').remove();
	removeIndex(target);
	environmentBuild(playerObject);
};

function environmentBuild(player) {
	var environment = $('#environment');

	if (characterNames.length != 0) {
		for (var i = 0; i < characterNames.length; i++) {
			var enemyObject = characters[characterNames[i]];
			var enemyName = characterNames[i];
			renderEnemy(enemyObject, environment, enemyName)
		}
	} else {
		console.log("gameover");
	}
	var playerName = player.name;
	renderPlayer(player, environment, playerName);
}

function removeIndex(char) {
	var index = characterNames.indexOf(char);
	characterNames.splice(index, 1);
}

function renderEnemy(object, position, name){
	var newRender = $('<div class="enemy">');
	$(newRender).attr('id', name);
	$(newRender).attr('data-index', name);
	$(newRender).html(object.battleCode());
	$(newRender).appendTo(position);
};

function renderPlayer(object, position, name){
	var newRender = $('<div class="player">');
	$(newRender).attr('id', name);
	$(newRender).attr('data-index', name);
	$(newRender).html(object.battleCode());
	$(newRender).appendTo(position);
};

// })







