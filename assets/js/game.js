//GAME STATES
//"WIN" - Player robot has defeated al enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function now with enemyname parameter
var fight = function(enemyName) {
    //repeat and execute as long as enemy still alive
    while(playerHealth > 0 && enemyHealth > 0) {
        //see if player would like to fight or skip round
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        //if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
            //subtract playerAttack value from enemyHealth to update the enemyHealth variable value
            enemyHealth = enemyHealth - playerAttack;
            console.log (
             playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                
                //award player money for winning
                playerMoney = playerMoney + 20;

                //leave while () loop since enemy is dead
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " healthy left.");
            }
            
            //subtract enemyAttack value from playerHealth to update the playerHealth variable value
            playerHealth = playerHealth - enemyAttack;
            console.log (
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <=0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
    };

//execute function
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        debugger;
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}
