# rolePlayGamev2

View the game here: https://pure-badlands-40464.herokuapp.com/

second attempt at building the game, first attempt was almost there, but It failed and it was a result of a lot of a horribly designed foundation that I couldn't go back and fix.

----notes for me----
Role Play Game.

The game will be divided up into 3 catagories: click events, functions, and condition checks.

Lets run through how the game will work, from beginning to end.

When the page is loaded, I will write to the ‘characters’ html element all four characters. there will be a click event on these characters, and when it is activated it will store which character the user clicked into a variable. the ‘characters’ html element will then be deleted, and all the characters will be placed in the ‘environment’ html element. the player character will have different styling than the enemy characters, and each enemy character will have its on ‘id’ and data-index number. Next, when an enemy is clicked on, it is turned into a defender, once an enemy is turned into a defender, all other enemies need to be made inactive by some means. A button will now pop up that says attack. When this button is clicked, it checks the attack of the current player and subtracts it from the defenders health, and subtracts the defenders counter attack from the attackers health. a conditional statement is ran that checks if the enemies health is below zero. if it is, then that enemy is removed, and the other characters are re-activated. There should also be a check to see if the players health has dropped below zero, and if so the game is reset. When the other enemies are added back onto the page, the event listener will be reactivated that looks for an enemy to be clicked. this will continue until either all enemies are deleted, or players health reaches zero.

EVENT LISTENERS NEEDED

A listener on the characters for choosing a player.

A listener on enemies for choosing a defender,

A listener on attack button for attacking defender.
——
The character listener should do a couple things: Store the player, store enemies, and make and append the divs to the environment. It should add classes to the enemies that the next event listener can listen for.

The defender listener should do a couple things: Remove all traces of the listener so that another defender cannot be chosen. store the enemy clicked on in a variable so that it can be worked on. Add an attack button.

The attack button listener should do a couple things: It should activate a function that takes in player and defender, subtracts whats needed, and then updates the health. The conditional statements should be in here as well. When the button is clicked and the attack function is run, it should check the health of the player and the defender and decide what to do.

CONDITIONAL STATEMENTS

I will need one conditional statement to check if the players health is 0, or if the defenders health is 0. 

I will also need to check if there are no enemies left to battle. I can do this by storing all characters in an array, and removing them when they are picked(player) or killed as a defender, then checking the length of the array. This statement should be checked in the attack button listener.
