var sAngle,mAngle,hAngle;
var h;
var m;
var s;
var hours;

function setup() {
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
}

function draw() {
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
      line(0,0,300,0);
    pop();

    push();
      stroke(255,140,0);
      strokeWeight(7);
      noFill();
      arc(0,0,710,710,0,sAngle);
    pop();

    push();
      rotate(mAngle);
      stroke(255,255,255);
      strokeWeight(7);
      line(0,0,210,0);
    pop();

    push();
      stroke(255,255,255);
      strokeWeight(7);
      noFill();
      arc(0,0,695,695,0,mAngle);
    pop();

    push();
      rotate(hAngle);
      stroke(0,255,0);
      strokeWeight(7);
      line(0,0,135,0);
    pop();

    push();
      stroke(0,255,0);
      strokeWeight(7);
      noFill();
      arc(0,0,680,680,0,hAngle);
    pop();
   
    strokeWeight(8);
    stroke(255,0,255);
    point(0,0);
}
