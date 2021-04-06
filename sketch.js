var sAngle,mAngle,hAngle;
var h;
var m;
var s;
var hours;

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(0);

    h = hour();
    m = minute();
    s = second();
    
    sAngle = map(s,0,60,0,360);
    mAngle = map(m,0,60,0,360);
    hAngle = map(h,0,12,0,360);

    push();
      translate(0,0);
      angleMode(DEGREES);
      rotate(sAngle);
      stroke(255,0,0);
      strokeWeight(7);
      line(0,0,0,-100);
    pop();

    push();
      angleMode(RADIANS);
      stroke(255,0,0);
      strokeWeight(7);
      noFill();
      arc(0,0,270,270,PI+PI/2,(PI*(sAngle/180))-PI/2);
    pop();

    push();
      translate(0,0);
      angleMode(DEGREES);
      rotate(mAngle);
      stroke(0,255,0);
      strokeWeight(7);
      line(0,0,0,-50);
    pop();

    push();
      angleMode(RADIANS);
      stroke(0,255,0);
      strokeWeight(7);
      noFill();
      arc(0,0,255,255,PI+PI/2,(PI*(mAngle/180))-PI/2);
    pop();

    push();
      translate(0,0);
      angleMode(DEGREES);
      rotate(hAngle);
      stroke(0,0,255);
      strokeWeight(7);
      line(0,0,0,-25);
    pop();

    push();
      angleMode(RADIANS);
      stroke(0,0,255);
      strokeWeight(7);
      noFill();
      arc(0,0,240,240,PI+PI/2,(PI*(hAngle/180))-PI/2);
    pop();
}