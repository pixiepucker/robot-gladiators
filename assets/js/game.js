//GAME STATES
//"WIN" - Player robot has defeated al enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//create function
var fight = function(enemyName) {
    //alert players to round start
    window.alert("Welcome to Robot Gladiators!");
    
    //added prompt to see if player would like to fight or skip round
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //log a result message to console so we know that worked
    //console.log(promptFight);

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight == "FIGHT") {

        //subtract playerAttack value from enemyHealth to update the enemyHealth variable value
        enemyHealth = enemyHealth - playerAttack;

        //log a resulting message to console so we know that worked
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " healthy left.");
        }

        //subtract enemyAttack value from playerHealth to update the playerHealth variable value
        playerHealth = playerHealth - enemyAttack;
        //log a resulting message to console so we know that worked
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    //if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight() again
    else {
        fight();
    }
    //if player didn't chose fight or skip
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
};

//execute function
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
