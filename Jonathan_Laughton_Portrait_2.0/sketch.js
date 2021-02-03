// global variable that holds current working color
let curColor;
let difColor = false;
let difEyebrow = false;

function setup() {
  createCanvas(600, 800);
}

function draw() {
  noStroke();
  drawBackground();
  drawShirt();
  drawHead();
  drawChin();
  drawNose();
  noStroke();
  drawEyebrows();
  drawHair();
}

// Draws the horizontal lines for the background
function drawBackground(){
  // fill background with red
  if(difColor){
    curColor = "white";
  }
  else{
    curColor = "#d10000";
  }
  
  background(curColor);
  
  // draw blue lines
  if(difColor){
    curColor = '#40E0D0';
  }
  else{
    curColor = "#0015b0";
  }
  
  fill(curColor);
  
  for(var i = 0; i < height; i += 40){
    rect(0, i, width, 20);
  }
}

// draws the main shape for the shirt
function drawShirt(){
  // set color of the shirt
  curColor = "#A036FB";
  fill(curColor);
  
  // use bezier lines to make the shirt shape
  beginShape();
    vertex(0,700);
    quadraticVertex(58, 651, 216, 658);
    vertex(400, 650);
    quadraticVertex(539, 654, 600, 680);
    vertex(600, 800);
    vertex(0, 800);
  endShape();
}

// draws the shape for the head
function drawHead(){
  // set color of skin
  curColor = "#E0B5A4";
  fill(curColor);
  
  // draw the shape of the head using bezier lines
  beginShape();
    vertex(195, 659);
    bezierVertex(205, 660, 210, 655, 210, 650);
    bezierVertex(210, 650, 210, 595, 210, 595);
    bezierVertex(210, 595, 205, 580, 205, 570);
    bezierVertex(205, 561,195, 510, 200, 480);
    bezierVertex(205, 450, 228, 362, 298, 355);
    bezierVertex(360, 360, 400, 390, 405, 475);
    bezierVertex(410, 555, 400, 580, 395, 590);
    bezierVertex(390, 600,385, 650, 400, 665);
    bezierVertex(415, 680, 350, 750, 315, 750);
    quadraticVertex(280, 750, 185, 706, 195, 659);
  endShape(CLOSE);
}

// draws the chin contour
function drawChin(){
  // using bezier lines make a chin contour line
  strokeWeight(4);
  stroke(0);
  bezier(215, 596, 215, 596, 216, 620, 260, 600);
  bezier(260, 600, 305, 580, 335, 600, 335, 600);
  bezier(335, 600, 335, 600, 365, 620, 390, 590);
  
  // cahnge color to darker skin tone for shadowing
  noStroke();
  curColor = "#cfaa9b";
  fill(curColor);
  
  // draw the main shape of the neck/chin shadow using bezier lines
  beginShape();
    vertex(215, 596);
    bezierVertex(215, 596, 216, 620, 260, 600);
    bezierVertex(305, 580, 335, 600, 335, 600);
    bezierVertex(335, 600, 365, 620, 390, 590);
    bezierVertex(390, 590, 395, 586, 395, 586);
    bezierVertex(395, 586, 380, 661, 310, 660);
    bezierVertex(240, 661, 210, 625, 215, 596);
  endShape()
}

// draws the hair for the portrait
function drawHair(){
  // change color to brown
  curColor = "#382215";
  fill(curColor);
  
  // draw left side of the hair
  beginShape();
    vertex(305, 365);
    bezierVertex(305,365, 285, 345, 270, 371);
    bezierVertex(255, 395, 210, 471, 210, 525);
    bezierVertex(210, 581, 216, 595, 216, 595);
    bezierVertex(216, 595, 200, 600, 195, 590);
    bezierVertex(190, 580, 195, 615, 195, 615);
    bezierVertex(195, 615, 150, 615, 145, 575);
    bezierVertex(139, 535, 165, 510, 170, 490);
    bezierVertex(175, 470, 206, 416, 225, 366);
    bezierVertex(243, 315, 310, 320,305, 365);
  endShape();
  
  // draw right side of the hair
  beginShape();
  vertex(305, 365);
    bezierVertex(305, 365, 325, 345, 340, 371);
    bezierVertex(355, 395, 400, 471, 400, 525);
    bezierVertex(400, 581, 396, 595, 396, 595);
    bezierVertex(396, 595, 411, 600, 416, 590);
    bezierVertex(420, 580, 416, 615, 416, 615);
    bezierVertex(416, 615, 460, 615, 466, 575);
    bezierVertex(470, 535, 445, 510, 440, 490);
    bezierVertex(436, 470, 404, 416, 385, 366);
    bezierVertex(367, 315, 300, 320, 305, 365);
  endShape();
}

// draws the nose outline
function drawNose(){
  // set to line with no fill
  noFill();
  strokeWeight(2);
  stroke(0);
  
  // draw nose outline
  bezier(290, 495, 290, 495,275, 505, 275, 490);
  bezier(275, 490,275, 476, 300, 455, 304, 456);
  bezier(304, 456, 310, 455, 315, 455, 320, 460);
  bezier(320, 460, 325, 466, 335, 485, 335, 491);
  bezier(335, 491, 336, 495, 330, 505, 320, 496);
  
  fill(0);
  
  // use ellipses for the nostrils and rotate them
  push();
  translate( 294, 476);
  rotate(radians(125));
  ellipse(0, 0, 20, 8);
  pop();
  
  push();
  translate( 319, 477);
  rotate(radians(60));
  ellipse(0, 0, 20, 8);
  pop();
}

// draws the eyebrows for portrait
function drawEyebrows(){
  // change color to brown
  if(difEyebrow){
    curColor = "#d21adb";
  }
  else{
    curColor = "#46271c";
  }
  
  fill(curColor);
  
  // left eyebrow
  beginShape();
    vertex(265, 425);
    bezierVertex(265, 425, 240, 420, 230, 430);
    bezierVertex(220, 440, 230, 420, 230, 420);
    bezierVertex(230, 420, 250, 400, 280, 405);
    bezierVertex(310, 410, 265, 425, 265, 425);
  endShape();
  
  // right eyebrow
  beginShape();
    vertex(352, 427);
    bezierVertex(352, 427, 377, 422, 387, 432);
    bezierVertex(397, 442, 387, 422, 387, 422);
    bezierVertex(387, 422, 367, 402, 337, 407);
    bezierVertex(308, 412, 352, 427, 352, 427);
  endShape();
}

// if any key is pressed change boolean to inform background color
function keyPressed(){
  if(difColor)
    difColor = false;
  else
    difColor = true;
}

// if mouse is pressed and near eyebrows change boolean to inform
// eyebrow color
function mousePressed(){
  if(((mouseX >= 320 && mouseY >= 402) && (mouseX <= 371 && mouseY <= 425)) || ((mouseX <= 294 && mouseY >= 402) && (mouseX >= 237 && mouseY <= 425))){
    difEyebrow = !difEyebrow;
  }
}