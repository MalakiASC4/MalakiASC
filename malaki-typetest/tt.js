// function setup(){
//     createCanvas(1350,760);
//     background('#556b2f');
// };
// var strings = ["Feel like Nick Cannon", "Cause i'm Wild N' Out", "Dont Wanna Fall in Love", "At night I think of you", "I've got nothing to lose"]

// function keyTyped() {
//   if (key === 'a') {
//     background("#00FF00");
//   } else if (key === 'b') {
//     background("#ff0000");
//   }
  // uncomment to prevent any default behavior
  // return false;
// }

function setup(){
    createCanvas(1350,760);
    background('#556b2f');
};
var strings = ["Feel like Nick Cannon", "Cause i'm Wild N' Out", "Dont Wanna Fall in Love", "At night I think of you", "I've got nothing to lose"]
var word = ""
function keyTyped() {
    word = word + key;
    text(word,500,500)
  if (key === 'a') {
    background("#00FF00");
  } else if (key === 'b') {
    background("#ff0000");
  }
//   uncomment to prevent any default behavior
  return false;
}



