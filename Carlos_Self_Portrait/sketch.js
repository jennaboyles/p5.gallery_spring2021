let hairColor = '#3f6156';
var speed = 0.5;
var direction = 1;



function neck() {
  fill(100, 100, 0);
  rect(280, 290, 50, 75, 10);
  //neck
}

function body() {
  //body
  fill(0);
  rect(230, 340, 150, 175, 20);
  fill(250);
  textSize(19);
  textFont('cursive');
  text('guggenheim', 256, 402);
}

function head() {
  //head
  fill('#bcebc6');
  noStroke();
  ellipse(300, 235, 180, 185);



  //mousePressed---changes eyes RED and BIGGER!
  if (mouseIsPressed) {
    //eyes
    fill('#ff0000');

    // //WORK_ON_LATER
    //      scale(.5);
    //     rotate(HALF_PI); 


    ellipse(264, 245, 50,50);
    ellipse(351, 243, 50,50);
  } else {

    fill('#54311f');
    ellipse(264, 243, 10, 10);
    ellipse(351, 243, 10, 10);

 }
 //eyeline
  
 if (mouseIsPressed) {
    //eyes
  curve(241, 244, 241, 244, 256, 239, 269, 239);
  curve(241, 244, 256, 239, 271, 237, 271, 237);
  curve(256, 239, 271, 237, 286, 242, 286, 242);

  
  curve(331, 242, 331, 242, 348, 240, 348, 240);
  curve(331, 242, 348, 240, 364, 240, 364, 240);
  curve(348, 240, 364, 240, 371, 242, 371, 242);   






  } else {
 strokeWeight(2);
  stroke('#3d3d3c');
  curve(241, 244, 241, 244, 256, 239, 269, 239);
  curve(241, 244, 256, 239, 271, 237, 271, 237);
  curve(256, 239, 271, 237, 286, 242, 286, 242);
  strokeWeight(2);
  stroke('#3d3d3c');
  curve(331, 242, 331, 242, 348, 240, 348, 240);
  curve(331, 242, 348, 240, 364, 240, 364, 240);
  curve(348, 240, 364, 240, 371, 242, 371, 242);
} 

  //nose
  strokeWeight(2);
  stroke('#3d3d3c');
  curve(323, 243, 323, 243, 326, 264, 326, 264);
  curve(323, 243, 326, 264, 325, 276, 325, 276);
  curve(326, 264, 325, 276, 316, 284, 316, 284);
  //eyebrows
  strokeWeight(8);
  stroke(hairColor);
  curve(240, 227, 240, 227, 272, 222, 292, 223);
  curve(240, 227, 272, 222, 293, 224, 293, 224);
  curve(325, 230, 325, 230, 352, 221, 367, 220);
  curve(325, 230, 352, 221, 370, 220, 370, 220);
  curve(352, 221, 370, 220, 379, 224, 379, 224);
  //hair
  strokeWeight(15);
  stroke(hairColor);
  curve(204, 239, 204, 239, 218, 187, 218, 187);
  curve(204, 239, 218, 187, 241, 162, 241, 162);
  curve(218, 187, 241, 162, 284, 143, 284, 143);
  curve(241, 162, 284, 143, 329, 142, 329, 142);
  curve(284, 143, 329, 142, 356, 155, 356, 155);
  curve(329, 142, 356, 155, 378, 177, 378, 177);
  curve(356, 155, 378, 177, 391, 200, 391, 200);
  curve(378, 177, 391, 200, 395, 231, 395, 231);
  //mouth
  fill('#a2b382');
  noStroke();
  rect(277, 294, 5, 12, 20, 15, 10, 5);
  rect(283, 298, 5, 12, 20, 15, 10, 5);
  rect(290, 300, 5, 12, 20, 15, 10, 5);
  rect(296, 298, 5, 10, 20, 15, 10, 5);
  rect(301, 302, 5, 8, 20, 15, 10, 5);
  rect(307, 300, 5, 10, 20, 15, 10, 5);
  rect(313, 295, 5, 10, 20, 15, 10, 5);
  rect(320, 298, 5, 15, 20, 15, 10, 5);
  rect(325, 300, 5, 10, 20, 15, 10, 5);
  rect(330, 290, 5, 20, 20, 15, 10, 5);
  rect(335, 293, 5, 10, 20, 15, 10, 5);
  rect(340, 290, 5, 15, 15, 15, 10, 5);
  //shapes in head
  noStroke();
  triangle(248, 192, 260, 174, 262, 197);
  triangle(315, 164, 334, 177, 331, 195);
  quad(274, 170, 300, 153, 300, 182, 283, 195);
  ellipse(350, 184, 7, 25);
}

var circleX = 0
var circleY = 0
var ellipseX = 600
var ellipseY = 0

function setup() {
  createCanvas(600, 600);

  



}

function draw() {
  background('#192118');

  //conditionalstatement
  for (i = 10; i < width; i += 10) {
    // If 'i' divides by 20 with no remainder draw 
    // the first line, else draw the second line
    if ((i % 20) == 0) {
      strokeWeight(1);
      stroke(0, random(250), 0);
      line(0, 0, i, 600);
      // line(1, 30, i, height/2);
    } else {
      strokeWeight(1);
      stroke(0, random(250), 0);
      line(600, 0, i, 600);
    }
  }

  //loop
  

  noStroke();
  var x = 0;
  while (x <= width) {
    fill('#3f7d36');
    ellipse(x, 200, 75, 50);
    x = x + 50;
  }
  for (varx = 0; x <= width; x += 50) {
    fill('#3f7d36');
    ellipse(x, 300, 25, 25);
  }

  var y = 0;
  while (y <= width) {
  fill(random(10), random(250), random(100));
    ellipse(500, y, 50, 75);
    y = y + 50;
  }
  for (vary = 0; y <= width; y += 50) {
    fill('#3f7d36');
    ellipse(100, y, 25, 25);
  }

  var y = 0;
  while (y <= width) {
    fill(random(10), random(250), random(100));
    ellipse(100, y, 50, 75);
    y = y + 50;
  }
  for (vary = 0; y <= width; y += 50) {
    fill('#3f7d36');
    ellipse(100, y, 25, 25);
  }

  //moving_ellipses_I CANT GET THE ELLIPSES TO STAY AROUND OR TO RESTART
  fill(0,random(250),0);
  rect(circleX, circleY, 60, 25, 60, 60, 60);
  circleX = circleX + 1
  circleY = circleY + 1
  fill(0,random(250),0);
  rect(ellipseX, ellipseY, 60, 25, 60, 60, 60);
  ellipseX = ellipseX + -1
  ellipseY = ellipseY + 1



  
  
  
  
  neck();
  body();
  head();















  //       //this for loop draws lines every 20 pixels for the length and height of the canvas. 
  //       for (var i = 0; i < width; i += 20) {
  //         // stroke(50, 50, 50, 50, 50);
  //         line(i, 0, i, height);
  //         line(width, i, 0, i);
  //       }



  //       fill(0);
  //       /*set fill to black. I need this fill because the noFill above would make these invisible. Try changing the 0 to an R,G,B value */
  //       textSize(24); //changes the font size
  //       text(mouseX, 400, 20); //displays the x coordinate
  //       text(mouseY, 20, 400); //displays the y coordinate



}