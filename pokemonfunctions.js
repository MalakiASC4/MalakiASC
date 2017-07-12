function randLetter(num){
    var randLettuce=Math.random()*num; //assign a  random number to randNum
    var result=Math.floor(randLettuce); //set randNum to non decimal
return result
};
var randLettuce = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log (randLettuce[randLetter(26)]);

function randWord(num){
    var randWormy=Math.random()*num;
    var result=Math.floor(randWormy);
return result
};
console.log (randLettuce[randLetter(26)]);