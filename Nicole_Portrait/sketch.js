//REFERENCE 
// https://courses.ideate.cmu.edu/15-104/f2020/2020/09/08/project-1-self-portrait-24/ 

//mousepressed value
let value = 0;
var colorchange = 0;
let font1;

function preload(){
  font1 = loadFont('digital-7.regular.ttf');
  
}
function randomColor() {
  var a = random(0, 255);
  var b = random(0, 255);
  var c = random(0, 255);
}

function setup() {
  createCanvas(791, 795);
  background(0);
  angleMode();
}

function draw() {
  background(250);
  noStroke();

  //hair
  push();
  fill('#26110C');
  rect(200, 310, 347, 382);
  ellipse(375, 326, 365);
  pop();

  //hair highlights
  //tried to implement a LOOP //for (var x = 100; x < width; x = x + 100) 
  //left side
  push();
  fill(225, 220, 0, 30);
  rect(225, 400, 15, 292);
  rect(270, 400, 12, 292);
  rect(318, 400, 8, 292);
  rect(360, 400, 4, 292);
  //right side
  rect(395, 400, 4, 292);
  rect(425, 400, 8, 292);
  rect(460, 400, 12, 292);
  rect(505, 400, 15, 292);
  pop();

  //ears
  push();
  fill('#D69270');
  ellipse(230, 400, 79);
  ellipse(515, 402, 79);
  pop();

  //side earring
  push();
  fill('white');
  rect(515, 395, 12, 12);
  pop();

  //2 earrings
  push();
  var a = random(0, 255);
  var b = random(0, 255);
  var c = random(0, 255)
  fill(a, b, c);
  ellipse(217, 430, 10, 10);
  ellipse(529, 432, 10, 10);
  pop();

  //face 
  push();
  fill('#E5A886');
  noStroke();
  ellipse(375, 443, 292);
  ellipse(375, 345, 297);
  rect(228.7, 334, 293, 109);
  pop();

  //front hair R
  push();
  translate(380, -40, 100);
  rotate(-12);
  fill('#26110C');
  ellipse(230, 196, 200, 50);
  pop();

  //front hair L
  push();
  translate(10, 180, 100);
  rotate(100);
  fill('#26110C');
  ellipse(230, 196, 200, 50);
  pop();

  //mouth back
  push();
  fill(226, 119, 113);
  ellipse(370, 490, 100, 100);
  pop();

  //teeth
  push();
  fill(255);
  rect(338, 445, 62, 20, 0, 0, 9, 9);
  pop();

  //mouth with stroke to cover teeth
  push();
  stroke(226, 119, 113);
  strokeWeight(10);
  noFill();
  ellipse(370, 490, 100, 100);
  pop();

  //mouth front
  push();
  fill(210, 119, 113);
  ellipse(370, 495, 60, 30);
  pop();

  //eyes
  push();
  fill(0);
  arc(310, 361, 38, 20, PI, 0);
  arc(440, 361, 38, 20, PI, 0);
  pop();

  //eyebrows
  push();
  fill('#26110C');
  arc(310, 300, 68, 23, PI, 0);
  arc(430, 300, 68, 23, PI, 0);
  pop();

  //nose
  push();
  fill(226, 119, 113);
  arc(372, 417, 40, 40, PI, 0);
  pop();

  //cheeks
  push();
  fill(226, 134, 129, 60);
  ellipse(275, 433, 48);
  ellipse(460, 435, 48);
  pop();

  push();
  //conditional statement = text flips depending on mouse position
  if (mouseY <= 397.5) {
    textFont(font1);
    textSize(100);
    text("Nicole", 250, 100);
    text("GO:OD AM", 210, 780);
    fill(random(colorchange));
  } else {
    textFont(font1);
    textSize(100);
    text("Nicole", 250, 780);
    text("GO:OD AM", 210, 100);
  }
  pop();

  //random text color but when mouseIsPressed text turns green
  if (mouseIsPressed) {
    fill('#0CE820');
  } else {
    fill(a, b, c);
  }


}