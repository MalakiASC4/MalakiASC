function rand(num){
//returns a number between 0 and num
var randNum=Math.random()*num; //assign a  random number to randNum
var result=Math.floor(randNum); //set randNum to non decimal
return result
}

var myCoin =["Heads","Tails"];

console.log (myCoin[rand(2)]);

var myDice = ["One", "Two", "Three", "Four", "Five", "Six"]; 
console.log("You have rolled a " +  myDice[rand(6)]);