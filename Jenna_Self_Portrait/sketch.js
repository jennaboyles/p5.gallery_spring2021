//Self Portrait interactive image example

let cat; //image function, can be img or whatever you want
function preload() {
  cat = loadImage('jboylescat.jpg');
}
let hairColor = '#34ebe5' //global variable for hair color

function portraitBit(x,y) { //all the parts of my portrait in one function
  fill('pink'); //head color
  rect(x, y, 100, 100); //head
  fill(230, 0, 20, 30); // cheeks - fourth value is opacity
  rect(x+75, y+60, 10, 10); //r cheek
  rect(x+15, y+60, 10, 10); //l cheek
  fill('#6c9cb8'); //lt blue for eyes
  rect(x+70, y+40, 5, 5); //r eye
  rect(x+25, y+40, 5, 5); //l eye
  fill(220, 80, 80); //pink for mouth
  rect(x+40, y+70, 20, 5); //mouth
  fill('blue'); //blue for body
  rect(x+15, y+100, 70, 60); //body
  rect(x+10, y+110, 10, 35); //l arm
  rect(x+80, y+110, 10, 35); //r arm
  fill('purple')
  rect(x+30, y+160, 10, 25); //l leg
  rect(x+60, y+160, 10, 25); //r leg
}

function portraitMe() { // another example not called in draw
  fill('pink'); //for skin
  ellipse(330, 300, 500, 600); //head
  fill(230, 0, 20, 30); // cheeks - fourth value is opacity
  ellipse(500, 360, 30, 30); //r cheek
  ellipse(170, 360, 30, 30); //l cheek
  fill(255); //white for eyes
  ellipse(450, 240, 60, 40); //r eye
  ellipse(200, 240, 60, 40); //l eye
  fill(0, 0, 255); //lt blue for pupil
  ellipse(450, 240, 20, 30); //r pupil
  ellipse(200, 240, 20, 30); //l pupil
  fill(220, 80, 80); //pink for mouth
  bezier(240, 460, 300, 600, 600, 400, 270, 460);
  fill(220, 80, 80, 60); //pink for nose
  bezier(320, 180, 240, 480, 320, 380, 340, 390);
}

function glasses(x,y) {
  stroke('#0088ff'); //glasses color
  strokeWeight(1);
  noFill();
  ellipse(x+272, y+242, 30, 30); //r eye
  ellipse(x+228, y+242, 30, 30); //l eye
  line(x+244, y+242, x+256, y+242);
}

function hair(x,y) {
  stroke(hairColor);
  strokeWeight(4);
  fill(hairColor);
  beginShape();
  curveVertex(x+200, y+200);
  curveVertex(x+200, y+280);
  curveVertex(x+190, y+200);
  curveVertex(x+300, y+200);
  curveVertex(x+300, y+280);
  curveVertex(x+280, y+300);
  endShape();
}

function bangs(x,y) {
  fill(hairColor);
  beginShape();
  curveVertex(x+180, y+200);
  curveVertex(x+200, y+180);
  curveVertex(x+200, y+200);
  curveVertex(x+310, y+200);
  curveVertex(x+300, y+240);
  curveVertex(x+350, y+200);
  endShape();
  beginShape();
  curveVertex(x+210, y+280);
  curveVertex(x+230, y+200);
  curveVertex(x+220, y+180);
  curveVertex(x+200, y+280);
  curveVertex(x+180, y+200);
  curveVertex(x+80, y+480);
  endShape();
}

function setup() {
  createCanvas(850, 700);
  background(random(255), random(255), random(255));
    strokeWeight(3)
}

function draw() {
  noStroke();
  fill(0, 255, 0); //green
  rect(0, 600, 850, 80); //grass
   for (let i = 0; i < 850; i+=10){
    strokeWeight(3);
    stroke('green');
    line(i,800, i, 520);
  }
  fill(0);
  // textSize(80);
  // textFont('Georgia');
  // text('hello', 125, 480);
  hair(pmouseX-200,pmouseY-200,mouseX,mouseY);
  noStroke();
  portraitBit(pmouseX,pmouseY,mouseX,mouseY); //calling my portrait function in the draw function
  bangs(pmouseX-200,pmouseY-200,mouseX,mouseY);
  glasses(pmouseX-200,pmouseY-200,mouseX,mouseY);
  
if (keyIsPressed === true) {
    image(cat,0,0,850,700);
  } else{
  }
}

function mousePressed() {
  if (true) {
   background(random(255), random(255), random(255));
  }
}


  