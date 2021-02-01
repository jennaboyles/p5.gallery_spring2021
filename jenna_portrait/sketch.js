let cat; //image function, can be img or whatever you want
function preload() {
  cat = loadImage('jboylescat.jpg');
}

//Self Portrait static image example 
function portraitBit(){ //all the parts of my portrait in one function
  fill('pink');//head color
  rect(200,200,100,100);//head
  fill(230,0,20,30); // cheeks - fourth value is opacity
  rect(275,260,10,10); //r cheek
  rect(215,260,10,10); //l cheek
  fill('#6c9cb8'); //lt blue for eyes
  rect(270,240,5,5); //r eye
  rect(225,240,5,5); //l eye
  fill(220,80,80); //pink for mouth
  rect(240,270,20,5); //mouth
  fill('blue');//blue for body
  rect(215,300,70,60);//body
  rect(210,310,10,35); //l arm
  rect(280,310,10,35); //r arm
  fill('purple')
  rect(230,360,10,25); //l leg
  rect(260,360,10,25); //r leg
}

function glasses(){
  stroke('#0088ff'); //glasses color
  strokeWeight(1);
  noFill();
  ellipse(272,242,30,30); //r eye
  ellipse(228,242,30,30); //l eye
  line(244,242,256,242);
}

function hair(){
  stroke('#fcffcc');
  strokeWeight(4);
  fill('yellow');
  beginShape();
  curveVertex(200, 200);
  curveVertex(200, 280);
  curveVertex(190, 200);
  curveVertex(300, 200);
  curveVertex(300, 280);
  curveVertex(280, 300);
  endShape();
}

function bangs(){
  fill('#fcffcc');
  beginShape();
  curveVertex(180, 200);
  curveVertex(200, 180);
  curveVertex(200, 200);
  curveVertex(310, 200);
  curveVertex(300, 240);
  curveVertex(350, 200);
  endShape();
  beginShape();
  curveVertex(210, 280);
  curveVertex(230, 200);
  curveVertex(220, 180);
  curveVertex(200, 280);
  curveVertex(180, 200);
  curveVertex(80, 480);
  endShape();
}

function portraitMe(){
  fill('pink');//for skin
  ellipse(330,300,500,600);//head
  fill(230,0,20,30); // cheeks - fourth value is opacity
  ellipse(500,360,30,30); //r cheek
  ellipse(170,360,30,30); //l cheek
  fill(255); //white for eyes
  ellipse(450,240,60,40); //r eye
  ellipse(200,240,60,40); //l eye
  fill(0,0,255); //lt blue for pupil
  ellipse(450,240,20,30); //r pupil
  ellipse(200,240,20,30); //l pupil
  fill(220,80,80); //pink for mouth
  bezier(240, 460, 300, 600, 600, 400, 270, 460);
  fill(220,80,80,60); //pink for nose
  bezier(320,180,240,480,320,380,340,390);
}

function setup() {
  createCanvas(700, 700);  
  background(random(255),random(255),random(255));
  image(cat,0,0,800,595);
}

function draw() {
  noStroke();
  fill(0,255,0);
  rect(0,320,700,200);
  fill(0);
  textSize(80);
  textFont('Georgia');
  text('hello',125,480);
  stroke(3);
  hair();
  noStroke();
  portraitBit(); //calling my portrait function in the draw function
  bangs();
  glasses();
 
}