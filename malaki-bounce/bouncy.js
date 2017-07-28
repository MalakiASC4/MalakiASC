function setup(){
    createCanvas(1350,700);
    
};

var x= 50; //starting x coordinate
var y= 50; //starting y coordinate
var vx= 0;
var vy= 0; //
var goForward=true;
function draw(){
background("#556b2f");  
ellipse(x,y,30,30);
if(goForward&&x<1349 && y<699){
    x++
    y++
}else {
    x--
    y--
}

if(x>=1349 || y>= 699){
    goForward =false;}
};