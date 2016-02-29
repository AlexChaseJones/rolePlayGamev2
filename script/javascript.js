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
		newAttack: function(){
			this.currentAttack += 4;
			return this.currentAttack;
		},
		counterAttack: 7,
	},
	mario: {
		name: "Mario",
		indexNum: 1,
		picture: "images/mario.png",
		health: 120,
		baseAttack: 6,
		currentAttack: 0,
		newAttack: function(){
			this.currentAttack += 4;
			return this.currentAttack;
		},
		counterAttack: 8,
	},
	link: {
		name: "Link",
		indexNum: 2,
		picture: "images/link.png",
		health: 150,
		baseAttack: 5,
		currentAttack: 0,
		newAttack: function(){
			this.currentAttack += 4;
			return this.currentAttack;
		},
		counterAttack: 11,
	},
	donkeyKong: {
		name: "Donkey Kong",
		indexNum: 3,
		picture: "images/donkeyKong.png",
		health: 190,
		baseAttack: 3,	
		currentAttack: 0,
		newAttack: function(){
			this.currentAttack += 4;
			return this.currentAttack;
		},
		counterAttack: 10, 
	}
};
//Adds functions that build HTML code to all characters
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
function initialBuild(){
	for (var i = 0; i <characterNames.length; i++) {
		var target = characterNames[i];

		var chooseplayerDiv = $('<div class="choice">');
		$(chooseplayerDiv).html(characters[target].choiceCode());
		$(chooseplayerDiv).attr('data-index', characterNames[i]);
		$(chooseplayerDiv).appendTo('#characters');
	};
	$('.choice').on('click', playerChoice);
};

function playerChoice(){
	$('.choice').off('click');
	var target = $(this).data('index');
	playerObject = characters[target];	
	$('#characters').empty();
	removeIndex(target);
	environmentBuild(playerObject);
};

function environmentBuild(player) {
	var environment = $('#environment');

		for (var i = 0; i < characterNames.length; i++) {
			var enemyObject = characters[characterNames[i]];
			var enemyName = characterNames[i];
			renderEnemy(enemyObject, environment, enemyName)
		}
	var playerName = player.name;
	renderPlayer(player, environment, playerName);

	$('.enemy').on('click', defenderChoice);
};

function removeIndex(char) {
	var index = characterNames.indexOf(char);
	if (index != -1) {
		characterNames.splice(index, 1);
	}
};

function renderEnemy(object, position, name){
	var newRender = $('<div class="enemy">');
	$(newRender).attr('id', name);
	$(newRender).attr('data-index', name);
	$(newRender).html(object.battleCode());
	$(newRender).appendTo(position);
};

function renderPlayer(object, position, name){
	playerDiv = $('<div class="player">');
	$(playerDiv).attr('id', name);
	$(playerDiv).attr('data-index', name);
	$(playerDiv).html(object.battleCode());
	$(playerDiv).appendTo(position);
};

function defenderChoice(){
	$('.enemy').off('click');
	var target = $(this).data('index');
	defenderObject = characters[target];
	$(this).addClass('defender');
	defenderDiv = $(this);
	var button = createButton();
	$(this).after(button);

	$('#attackButton').on('click', attackSequence);
};

function createButton(){
	attackButton = $('<div id="attackButton">');
	$(attackButton).html('Attack!');
	return attackButton;
};

function attackSequence(){
	defenderObject.health = defenderObject.health - playerObject.newAttack();
	playerObject.health = playerObject.health - defenderObject.counterAttack;

	outcomeCheck();
};

function outcomeCheck(){
	if (defenderObject.health <= 0 && playerObject.health > 0) { //if the defender is dead and the player is alive,
		isDead(defenderDiv, defenderObject);

		$('.enemy').on('click', defenderChoice);

	} else if (defenderObject.health <= 0 && playerObject.health <= 0) {	//if both the player and defender are dead,
		
		isDead(defenderDiv, defenderObject);
		isDead(playerDiv, playerObject);

		if (characterNames.length <= 0) {		//check for a tie.
			alert('Tie!');
			newGame('It\'s a tie!');
		} else {
			newGame('You lose!');
		}

	} else if (defenderObject.health > 0 && playerObject.health <= 0) {	//if the defender is alive and the player is dead,
		isDead(playerDiv, playerObject);
		newGame("You lose!");
	} else {												//if the player is alive and the defender is alive.
		$(playerDiv).html(playerObject.battleCode());
		$(defenderDiv).html(defenderObject.battleCode());
	}
};

function isDead(div, object){
	object.health = 0;
	$(div).html(defenderObject.battleCode());
	$(div).appendTo('#graveyard');
	$(div).removeClass('player defender enemy');
	$(div).addClass('dead');

	$(attackButton).remove();

	removeIndex(object.name);

	$(defenderDiv).html(defenderObject.battleCode());
	$(playerDiv).html(playerObject.battleCode());
};

function newGame(message){
	playAgainDiv(message);
	$('#yes').on('click', restartGame);
	$('#no').on('click', function(){
	$('#restartPanel').remove();
	})
};

function playAgainDiv(message){
	var restartDiv = $('<div id="restartPanel">');
	$(restartDiv).html('<h1>' + message + '</h1><h2>Play Again?</h2>');
	var yesButton = $('<button id="yes">Yes</button>');
	var noButton = $('<button id="no">No</button>');
	$(restartDiv).append(yesButton);
	$(restartDiv).append(noButton);
	$('#characters').append(restartDiv);
}

function restartGame (){
	console.log('restarted!');
}

initialBuild();




// })








