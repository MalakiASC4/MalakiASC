var myPokemonRoster = ["Lucario", "Deoxys", "Genesect", "Zekrom", "Reshiram"];
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];
myPokemonRoster.pop();
myPokemonRoster.push("Mewtwo");
for (var i=0; i<myPokemonRoster.length; i++){
    console.log(myPokemonRoster[i]);
}
if (myPokemonRoster.length>5){
    console.log("You Can’t Play! Not Enough Pokemon")
}
