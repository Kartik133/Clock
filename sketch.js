var sAngle,mAngle,hAngle;
var h;
var m;
var s;
var hours,sss;

function preload() {
    sss = loadFont("ALGER.TTF");
}

function setup() {
    angleMode(DEGREES);
}

function draw() {
    createCanvas(windowWidth,windowHeight);
    background(0);

    push();
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
      line(0,0,200,0);
    pop();

    push();
      stroke(255,140,0);
      strokeWeight(7);
      noFill();
      arc(0,0,530,530,0,sAngle);
    pop();

    push();
      rotate(mAngle);
      stroke(255,255,255);
      strokeWeight(7);
      line(0,0,150,0);
    pop();

    push();
      stroke(255,255,255);
      strokeWeight(7);
      noFill();
      arc(0,0,515,515,0,mAngle);
    pop();

    push();
      rotate(hAngle);
      stroke(0,255,0);
      strokeWeight(7);
      line(0,0,100,0);
    pop();

    push();
      stroke(0,255,0);
      strokeWeight(7);
      noFill();
      arc(0,0,500,500,0,hAngle);
    pop();
   
    strokeWeight(8);
    stroke(255,0,255);
    point(0,0);
    pop();
    
    textAlign(CENTER);
    textFont(sss);
    textSize(50);
    noStroke();
    fill(255);
    text("Developed By 'Kartik Khaitan'.",width/2,height/2);
}
