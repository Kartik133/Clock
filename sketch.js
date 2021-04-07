var sAngle,mAngle,hAngle;
var h;
var m;
var s;
var hours;

function setup() {
    createCanvas(400,400);
    angleMode(DEGREES);
}

function draw() {
    background(0);

    translate(200,200);
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
      line(0,0,100,0);
    pop();

    push();
      stroke(255,140,0);
      strokeWeight(7);
      noFill();
      arc(0,0,270,270,0,sAngle);
    pop();

    push();
      rotate(mAngle);
      stroke(255,255,255);
      strokeWeight(7);
      line(0,0,70,0);
    pop();

    push();
      stroke(255,255,255);
      strokeWeight(7);
      noFill();
      arc(0,0,255,255,0,mAngle);
    pop();

    push();
      rotate(hAngle);
      stroke(0,255,0);
      strokeWeight(7);
      line(0,0,45,0);
    pop();

    push();
      stroke(0,255,0);
      strokeWeight(7);
      noFill();
      arc(0,0,240,240,0,hAngle);
    pop();
   
    strokeWeight(8);
    stroke(255,0,255);
    point(0,0);
}