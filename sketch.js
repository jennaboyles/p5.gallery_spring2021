//Globla Variables
let Haircolor = '#331d0c'

let Y = 200

let x = 0

//fUNCTIONS OF PORTRAIT STUCTURES

function FaceNeck() {

  noStroke();
  fill(245, 216, 174) //neck color
  rect(176, 260, 50, 55); //neck shape
  fill(250, 185, 235); //shirt color
  rect(80, 300, 240, 100, 20); //shirt
  fill(245, 216, 174) //head color
  circle(201, 310, 48, 50); //circle for curved shirt "chest" 
  stroke(0);
  strokeWeight(1);
  ellipse(200, 200, 120, 150); //head

}

function Hair() {
  noStroke();
  fill(Haircolor);
  rect(140, 120, 130, 35, 20); // top
  ellipse(120, 200, 50, 150); //leftside Top waves
  ellipse(130, 300, 65, 150); //Leftside Bottom wave
  rect(120, 120, 30, 280, 10); //left side 

  ellipse(280, 200, 50, 150); //righttside Top waves
  ellipse(265, 300, 65, 150); //rightside bottom wave
  rect(250, 120, 30, 280, 10); //right side

  ellipse(200, 130, 150, 50) //top hair
}

function Glasses() {
  //shape,color,details
  noFill()
  stroke(196, 241, 255);
  strokeWeight(4);
  // left lense
  rect(mouseX, mouseY, 45, 25);
  //right lense
  rect(mouseX + 65, mouseY, 45, 25);
  //bridge  
  fill(196, 241, 255)
  rect(mouseX + 45, mouseY + 15, 19, 0)
//allows glasses to move where the mouse goes
}

function Eyes() {

  //eye shape
  fill(235, 232, 228); // white part of eye
  stroke(0);
  strokeWeight(1); // eye stroke
  ellipse(170, 180, 35, 20); //right eye
  fill(107, 86, 56); //eye color 
  circle(170, 180, 20); //Iris

  fill(235, 232, 228); // white part of eye
  ellipse(230, 180, 35, 20); //left eye
  fill(107, 86, 56); //eye color 
  circle(230, 180, 20); //Iris
}

function Nose() {
  //nose
  noFill();
  stroke(0);
  strokeWeight(2);
  curve(280, 150, 190, 210, 210, 210, 200, 25);
}

function Mouth() {

  //lips and mouth
  strokeWeight(0)
  fill(112, 100, 83)
  arc(200, 235, 60, 60, 0, PI, PIE); //mouth shape
  fill(255, 255, 255); //white color for teeth
  rect(170, 235, 59, 8); //teeth
  fill(97, 19, 67);
  ellipse(200, 235, 60, 10); //top lip
  ellipse(200, 259, 40, 10); //bottom lip

}

function Eyebrows() {

  fill(Haircolor);
  ellipse(172, 161, 40, 3); //left
  ellipse(230, 161, 40, 3); //right

}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(196, 241, 255); //blue backgound

  //backgroud circles
  for (let i = 40; i < 800; i += 60) {
    noStroke(0)
    strokeWeight(3);
    fill((255), random(255), random(255)); // Toop; Strope            colors, deactive normal fill to see it in action
    circle(i, 40, 50);
    fill(random(255), random(255), (255)); //middle
    circle(i, Y - 45, 50);
    fill(random(255), (255), random(255)) //bottom
    circle(i, Y + 100, 50);
  }

  // portrait essentials 
  FaceNeck();
  Hair();
  Eyes();
  Glasses();
  Nose();
  Mouth();
  Eyebrows();

 //text for instructions of finding glasses
  if (mouseY  <= 150 ) {
  let s = 'Help me find my glasses?';
  fill(50);
  textSize(15)
  text(s, 320, 200, 70, 80);
  } else {
  let s = 'THANK YOU!!!';
  textFont('Alfa Slab One');  
  fill(50);
  textSize(15)
  text(s, 320, 200, 70, 80);
  }  

}