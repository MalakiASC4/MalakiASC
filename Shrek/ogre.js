var playerHP = 100;
var playerGold = 100;
var playerDefeated = 0;
var num=2;


function setup(){
$("body").append('<h1>Hello</h1>');
$("body").append("HP:"+playerHP + " |Gold:"+playerGold + " |Ogres Defeated:" + playerDefeated);
$("body").append('<img src="Sprites/Ogre 1.png">' 
);
// $("body").append (<img src= "Sprites" + num + '.jpg'>);
};

$(document).ready(setup);