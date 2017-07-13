var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var jewels = 1000; // Player starts with $1000
console.log("Welcome to your adventure :D . In this adventure, must buy everything. Or don't. Be defiant. I don't care. Gotta buy my stuff anyways. Btw answer either (yes) or (no). Ok?");

var yourOption = prompt("");

var inventory = ["Hyrule Sword? ", 'Shield? ', 'Bow? ', 'Chicken? '];

while (jewels>0){
for (x=0; x < inventory.length; x++){
    var answer =  prompt (" Would you like to buy a " + inventory[x]);
    console.log(answer)
if (answer === "yes"){
    console.log ("Ok Sir")
    jewels = jewels - 250;
    console.log ("You Now have " + jewels + " jewels left");
}else if(answer = "no"){
    console.log("Suit Yourself");
    console.log ("You Now have " + jewels + " jewels left");
}
}
};
console.log("You're out of money. Thanks for Shopping (You Broke Bum) :3")
