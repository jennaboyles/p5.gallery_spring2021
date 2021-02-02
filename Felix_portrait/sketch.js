let epicBlue = '#d0f0f5' //global variable fo background color


function myself() { //all of my self shapes 

  fill('#ffe6eb'); //head
  rect(200, 200, 200, 200);
  fill('#295232'); //green for eyes
  rect(245, 272, 20, 20);
  rect(354, 272, 20, 20);
  fill('white'); //eye whites
  rect(225, 272, 20, 20);
  rect(335, 272, 20, 20);
  fill(0); //nose
  rect(290, 315, 25, 10);
  rect(315, 305, 10, 10);
  rect(305, 295, 10, 10);
  fill(0); //mouth
  rect(280, 356, 50, 10);
  rect(220, 255, 50, 5); //left eyebrow
  rect(330, 255, 50, 5); //right eyebrow
}

function glasses() {
  stroke('black')
  strokeWeight(5);
  noFill();
  rect(215, 259, 60, 50); //left
  rect(325, 259, 60, 50); //right
  rect(274, 288, 50, 0);
}

function hair() {
  fill('#452f2d') //extra dark hairs 
  rect(180, 180, 25, 250)
  rect(390, 180, 25, 250)

  fill('#6e4e4c');
  rect(186, 180, 25, 200); //front
  rect(215, 170, 25, 100);
  rect(242, 160, 25, 80);
  rect(268, 150, 25, 60);
  rect(295, 155, 25, 60);
  rect(320, 160, 25, 70);
  rect(347, 165, 25, 80);
  rect(385, 180, 25, 200);
  rect(375, 170, 25, 100);


}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(epicBlue);
  fill(random(255), random(255), random(255)); //flashing circles
  //for(let i=0; i <600; i+=15){

  // line(i,0, i, 800);
  // }

  //function draw() {
  //background(237, 34, 93);
  // fill(0);

  ellipse(54, 62, 80, 80);
  ellipse(401, 94, 100, 100);
  ellipse(532, 368, 20, 20);
  ellipse(104, 531, 50, 50);
  ellipse(482, 550, 80, 80);

  myself();
  glasses();
  hair();

  strokeWeight(3); //extended cursor 
  line(pmouseX, pmouseY, mouseX, mouseY);

if (mouseIsPressed) { //box face obstruction
  fill(random(255), random(255), random(255))
  rect(230, 179, 200, 200);
} else {
  myself();
  glasses();
  hair();

}
}
//textSize(24); //changes the font size
//text(mouseX, 400, 20); //displays the x coordinate
//text(mouseY, 20, 400); //displays the y coordinate