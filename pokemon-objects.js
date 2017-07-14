dw
var myRoster = [

]
function Pokemon(Atk, Def, HP, Legend, Name, Type){
    this.Atk = Atk;
    this.Def = Def;
    this.HP = HP;
    this.Legend = Legend;
    this.Name = Name;
    this.Type = Type;
};

var lucario = new Pokemon(202, 130, 250, false, "Lucario", ["Fighting", "Steel"]);
var zekrom = new Pokemon(220, 220, 310, true, "Zekrom", ["Dragon", "Electric"]);
var reshiram = new Pokemon (220, 284, 310, true, "Reshiram", ["Dragon", "Fire"]);
var hoopa = new Pokemon (292, 112, 270, true, "Hoopa", ["Psychic", "Ghost"]);
var rayquaza = new Pokemon (328, 184, 320, true, "Rayquaza", ["Dragon", "Flying"]);
var solgaleo = new Pokemon (251, 197, 384, true, "Solgaleo", ["Psychic", "Steel"]);
myRoster.push(lucario, zekrom, reshiram, hoopa, rayquaza, solgaleo);
console.log(myRoster);

function pokemonAttacked(HP){
    this.HP = HP - 10;
};
console.log(pokemonHP);


