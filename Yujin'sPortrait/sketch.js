
function Portrait() { // putting all parts of my portrait in one function
  noStroke();
  fill(65,42,34)
  rect(190,153,220,390,210) //top hair
  fill(244,195,196)
  rect(170,420,260,400,80); //body
  fill(241,233,223)
  rect(270,240,60,205,70) //neck
  rect(220,200,160,190,80) //face
  ellipse(215,320,30,35); //ear 1
  ellipse(385,320,30,35); //ear 2
  fill(241,223,213)
   ellipse(215,320,15,20); //ear shade 1
  ellipse(385,320,15,20); //ear shade 2
   ellipse(245,320,30,10); //chick1
  ellipse(355,320,30,10); //chick2
  fill(65,42,34)
  triangle(300,200,220,300,210,200) //side hair 1
  triangle(300,200,380,300,390,200) //side hair 2
  rect(250,200,100,60) // the front bang
  fill(65,42,34)
 ellipse(270,300,27,30); //eye 1
  ellipse(330,300,27,30); //eye2
  rect(255,265,25,5,20); //eyebrow 1
  rect(321,265,25,5,20); //eyebrow 2
  fill(45,45,45)
 ellipse(270,300,15,25); //eye shade 1
  ellipse(330,300,15,25); //eye shade 2
  fill(255,255,255)
 ellipse(270,295,7,7); //eye light 1
  ellipse(330,295,7,7); //eye light 2
  fill(244,195,196)
  triangle(300,363,270,330,330,330) //mouth
  fill(255,255,255)
  rect(300,330,8,10) //tooth1
  rect(290,330,8,10) //tooth2
}

function accessories() {
noStroke();
fill(random(255), random(255), random(255)) // global variable for the earings
 ellipse(215,340,20,20) // left earing
 ellipse(385,340,20,20) // right earing
  
}

function setup() {
  createCanvas(600,600);
  background (random(255), random(255), random(255)); // global variable for the background
 
     for (let i=0; i<600; i+=25){ // loop for background design
    strokeWeight(2);
    line(i,600,i,0);  

    }
}
function draw() {
  Portrait(); //calling my portrait function in the draw function
  accessories(); //callint my accessories function in the draw function
  
textSize(50)
  noStroke();
text("Coding is hard",150,60);
}

function mousePressed() {
if (mousePressed == true) {
  
  } else {
  }
 text("definitely definitely definitely",0,110);
  text("definitely definitely definitely",0,210);
  text("definitely definitely definitely",0,310);
  text("definitely definitely definitely",0,410);
  text("definitely definitely definitely",0,510);
}