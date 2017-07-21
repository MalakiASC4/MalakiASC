function setup(){
    createCanvas(1500, 1500);
    background('#556b2f');
    fill("red")
    ellipse(150,60,60,60)
    fill("teal")
    quad(500, 31, 540, 20, 500, 63, 540, 80);
    fill("cyan")
    triangle(800, 100, 920, 100, 860, 30);


}
function mouseClicked() {
  quad(500, 31, 540, 20, 500, 63, 540, 80)
  // prevent default
  return false;
}
function mouseDragged() {
    fill("white")
        quad(500, 31, 540, 20, 500, 63, 540, 80)
  // prevent default
  return false;
}
function mousePressed() {
  if (value == 0) {
    triangle = ("cyan");
  } else {
    value = 0;
  }
}
