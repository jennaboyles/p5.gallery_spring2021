//https://editor.p5js.org/Ebony/sketches/H1Q1uoj5x

let skinColor = '#debda9'
let lip = '#d3addb'
let r, g, b

// let lip2='#ed0511'
// let words =["Hola","Ice-Cream","you there?","Hiiiii","You Rock","Let's be Frieds"];


// Construction of face using basic shapes.
function faceshape() { // shape of the face

  strokeWeight(0);
  fill(skinColor); //Use the global variablefor skin color
  rect(200, 300, 400, 150, 25);

  bezier(200, 430, 200, 530, 350, 680, 350, 677); //Left cheek
  bezier(600, 430, 600, 530, 450, 680, 450, 677); //Right cheek
  ellipse(400, 655, 115, 90); //chin
  quad(195, 433, 609, 433, 457, 665, 341, 667);
  circle(400, 360, 406); //Forehead
}

function ears() {
  fill(skinColor);
  ellipse(180, 400, 45, 120); //left ear
  ellipse(192, 450, 40, 120);
  ellipse(620, 400, 45, 120); //right ear
  ellipse(609, 450, 40, 120);
}

function hair() {
  fill(2);
  bezier(400, 190, 400, 300, 300, 300, 206, 396);
  bezier(400, 190, 450, 300, 410, 300, 591, 382);
  bezier(415, 147, 400, 150, 100, 160, 209, 400);
  bezier(415, 147, 550, 150, 700, 330, 596, 420);
  triangle(415, 147, 249, 351, 433, 171);
  triangle(415, 147, 539, 329, 386, 183);
  curve(4, 1, 404, 192, 227, 444, 300, 490);
  curve(231, 290, 293, 317, 217, 415, 265, 276);
  fill(0);
  beginShape();
  vertex(439, 250);
  bezierVertex(900, 400, 200, 100, 560, 392);
  endShape();

}



function braids() {
  fill(0);
  rect(180, 473, 60, 80, 30); // left braids
  rect(180, 540, 60, 80, 30);
  rect(180, 605, 60, 80, 30);
  rect(180, 685, 60, 80, 30);

  rect(570, 473, 60, 80, 30); // right braids
  rect(570, 540, 60, 80, 30);
  rect(570, 605, 60, 80, 30);
  rect(570, 685, 60, 80, 30);
  fill('#b55e87');
  rect(180, 670, 60, 20, 30);
  rect(570, 670, 60, 20, 30);
}

// I am still figuring out how to change the color of the earrings to a diferent color everytime i click the mouse.

function earrings() {
  strokeWeight(0);
  fill('#b55e87');
  circle(191, 484, 15); // left earring
  circle(191, 497, 15);
  circle(191, 510, 15);
  circle(191, 520, 10);
  circle(191, 529, 10);
  fill(random(255), random(255), random(255));
  circle(191, 558, 50);
  strokeWeight(0);
  fill('#b55e87');
  circle(610, 484, 15); // Right earring
  circle(610, 497, 15);
  circle(610, 510, 15);
  circle(610, 520, 10);
  circle(610, 529, 10);
  fill(random(255), random(255), random(255));
  triangle(589, 533, 639, 533, 609, 574);
}

function eyes() {

  beginShape(); //Left eyelid
  fill(' #b38e76');
  curveVertex(378, 679);
  curveVertex(264, 399);
  curveVertex(365, 399);
  curveVertex(395, 652);
  endShape();

  fill(255);
  ellipse(315, 400, 100, 45); //Left eye
  fill(r, g, b)
  circle(309, 398, 45);
  fill('#4a3d2f');
  circle(309, 398, 30);
  fill(0);
  circle(309, 400, 20);
  fill(225);
  circle(320, 395, 10)

  beginShape(); //Right eyelid
  fill(' #b38e76');
  curveVertex(362, 673);
  curveVertex(430, 400);
  curveVertex(530, 400);
  curveVertex(303, 639);
  endShape();

  fill(255); // Right eye
  ellipse(480, 400, 100, 45);
  fill(r, g, b)
  circle(480, 400, 45);
  fill('#4a3d2f');
  circle(480, 400, 30);
  fill(0);
  circle(480, 400, 20);
  fill(225);
  circle(490, 395, 10)
}

function eyebrows() {

  beginShape(); //Right eyebrow
  noStroke();
  fill('#403534');
  curveVertex(97, 635);
  curveVertex(370, 356);
  curveVertex(254, 378);
  curveVertex(268, 340);
  endShape();

  beginShape(); //Left eyebrow
  fill('#403534');
  curveVertex(649, 471);
  curveVertex(437, 347);
  curveVertex(552, 374);
  curveVertex(528, 516);
  endShape();


}

function nose() { //Nose
  fill('  #b38e76');
  circle(400, 530, 45);
  circle(375, 530, 30);
  circle(425, 530, 30);
  fill('#debda9');
  circle(400, 525, 40);
  circle(380, 525, 25);
  circle(422, 525, 25);
}

function mouth() {
  beginShape(); //upper lip left side
  fill(lip);
  curveVertex(362, 708);
  curveVertex(330, 583);
  curveVertex(400, 583);
  curveVertex(362, 704);
  endShape();

  beginShape(); //upper lip right side
  fill(lip);
  curveVertex(420, 707);
  curveVertex(400, 583);
  curveVertex(465, 583);
  curveVertex(420, 704);
  endShape()

  beginShape(); //Lower lip
  fill(lip);
  curveVertex(337, 386);
  curveVertex(330, 583);
  curveVertex(465, 583);
  curveVertex(381, 386);
  endShape();


}

// I can move my tongue diferent directions, it was fun doing this.
function tongue() {


  beginShape(); //tongue
  fill('#de6d8b');
  curveVertex(mouseX, mouseY);//By putting mouseX mouseY, I'm able to move my tongue
  curveVertex(330, 583);
  curveVertex(465, 583);
  curveVertex(mouseX, mouseY);
  endShape();

}

function freckles() {
  fill('#54463d');
  circle(490, 490, 10); //right cheek mole
  stroke('#b3918f');
  strokeWeight(4); // left freckles
  point(266, 433);
  point(282, 444);
  point(301, 447);
  point(314, 462);
  point(337, 441);
  point(278, 464);
  point(260, 473);
  point(299, 478);
  point(331, 478);
  point(351, 459);
  strokeWeight(4); // right freckles
  point(441, 433);
  point(478, 444);
  point(461, 447);
  point(518, 462);
  point(520, 441);
  point(462, 464);
  point(492, 473);
  point(440, 478);
  point(519, 478);
  point(435, 459);
}

// function word(){
//   loop();
//   textSize(60); 
//   textFont('helvetica');
//   let randomWord= random (words);
//   text (randomWord,15,100);
//  noLoop();  
// }


function setup() {
  createCanvas(800, 800); //draw a canvas 800 pixels wide by 800 pixels high
  // background(random(255), random(255), random(255)); // By putting the background under setup, now my background color changes when i click on it.
  r = random(255);
  g = random(255);
  b = random(255);

}


function draw() {


  //     //this for loop draws lines every 20 pixels for the length and height of the canvas. 
  //     for (var i = 0; i < width; i += 20) {
  //       line(i, 0, i, height);
  //       line(width, i, 0, i);
  //     }

  //     /*set fill to black. I need this fill because the noFill above would make these invisible. Try changing the 0 to an R,G,B value */
  //     textSize(24);//changes the font size
  //     text(mouseX,400,20);//displays the x coordinate
  //     text(mouseY,20,400);//displays the y coordinate




  faceshape();
  hair();
  braids();
  earrings();
  ears();
  nose();
  mouth();
  tongue();

  eyes();
  eyebrows();
  freckles();
  // word();



  //Conditional If the mouse is on the left side the you rock hi will show
  if (mouseX > 350) {
    textFont('Helvetica');
    textSize(60);
    fill("#4903fc"),
      text("You Rock", mouseX, mouseY); //The word will follow the mouse
  } else { // if the mouse if on the left side the word hi will show
    textFont('helvetica');
    textSize(50);
    fill("#ed05c3");
    text(" Hi", mouseX, mouseY); // the word will follow the mouse
  }

  strokeWeight(0);
  fill(r, g, b);
  circle(540, 270, 45);
  circle(580, 270, 60);
}

function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 490, 300);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }

  for (let circleY = 80; circleY <= 800; circleY += 75) {
    for (let circleX = 80; circleX <= 800; circleX += 75) {
      circle(circleX, circleY, 35);
    }
  }
}