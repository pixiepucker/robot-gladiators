var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//You can also log multiple values at tonce like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

//create function
var fight = function() {
    //alert players to round start
    window.alert("Welcome to Robot Gladiators!");

    //subtract playerAttack value from enemyHealth to update the enemyHealth variable value
    enemyHealth = enemyHealth - playerAttack;

    //log a resulting message to console so we know that worked
    console.log (
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
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
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

//execute function
fight();