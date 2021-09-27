var sAngle,mAngle,hAngle;
var h;
var m;
var s;
var hours;

function setup() {
    angleMode(DEGREES);
}

function draw() {
    createCanvas(windowWidth,windowHeight);
    background(0);

    translate(width/2,height/2);
    rotate(-90);

    h = hour();
    m = minute();
    s = second();
    
    sAngle = map(s,0,60,0,360);
    mAngle = map(m,0,60,0,360);
    hAngle = map(h%12,0,12,0,360);

    push();
      rotate(sAngle);
      stroke(255,140,0);
      strokeWeight(7);
      line(0,0,150,0);
    pop();

    push();
      stroke(255,140,0);
      strokeWeight(7);
      noFill();
      arc(0,0,600,600,0,sAngle);
    pop();

    push();
      rotate(mAngle);
      stroke(255,255,255);
      strokeWeight(7);
      line(0,0,105,0);
    pop();

    push();
      stroke(255,255,255);
      strokeWeight(7);
      noFill();
      arc(0,0,585,585,0,mAngle);
    pop();

    push();
      rotate(hAngle);
      stroke(0,255,0);
      strokeWeight(7);
      line(0,0,67,0);
    pop();

    push();
      stroke(0,255,0);
      strokeWeight(7);
      noFill();
      arc(0,0,570,570,0,hAngle);
    pop();
   
    strokeWeight(8);
    stroke(255,0,255);
    point(0,0);
}
