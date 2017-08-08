$(document).ready(function(){
function rand(num){
//returns a number between 0 and num
var randNum=Math.random()*num; //assign a  random number to randNum
var result=Math.floor(randNum); //set randNum to non decimal
return result
}

//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB(){
    var result = $("#result").val();
    // var message = $("#message").val();
    console.log(name + " : " + message);

    //Update database here
var value={
RESULT: result,
// MESSAGE: message
}
database.push(value);
$("h4").append(onClick)
}});
