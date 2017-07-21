function setup(){
createCanvas(500,500);
};

var value = 150

function draw(){
fill(value);
rect(0,50,50,50);
// rect(50,50,50,50);
// rect(100,50,50,50);
// rect(150,50,50,50);
// rect(200,50,50,50);
// rect(250,50,50,50);
// rect(300,50,50,50);
// rect(350,50,50,50);
}
function mousePressed() {
  if (value == 255) {
    value = "red";
  } else {
    value = 255;
  }
};