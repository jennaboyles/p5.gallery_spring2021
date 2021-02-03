var hatcolor;
hatcolor = (140, 95, 200)

function face() {
  noStroke();
  fill(237, 206, 168) //skin color
  rect(440, 330, 40, 60) //neck
  ellipse(460, 220, 190, 250) //head
  fill(255, 255, 255)
  ellipse(420, 210, 30, 20) //white eye
  ellipse(500, 210, 30, 20) //white eye
  fill(40, 115, 225)
  ellipse(420, 210, 15, 10) //blue eye
  ellipse(500, 210, 15, 10) //blue eye
  fill(0, 0, 0)
  ellipse(420, 210, 7, 5) //iris
  ellipse(500, 210, 7, 5) //iris
}

function nose() {
  fill(225, 190, 160)
  triangle(460, 260, 460, 240, 445, 260)
}

function shirt() {
  rect(360, 360, 200, 200, 20); //shirt
  textSize(25)
  fill(hatcolor)
  textFont('cursive')
  text('ski bum', 423, 450)
}

function hat() {
  fill(hatcolor)
  ellipse(460, 70, 25, 30)
  arc(460, 160, 170, 150, 3.14, 0);
}

function sun() {
  fill(230, 232, 93)
  ellipse(100, 100, 100, 100) //sun
  triangle(120, 140, 140, 120, 160, 160) //sun rays
  triangle(120, 60, 140, 80, 160, 45)
  triangle(95, 145, 75, 140, 70, 175)
  triangle(55, 95, 60, 115, 20, 120)
  triangle(65, 70, 85, 60, 50, 35);
}

function snowballs() {
  var x = 0;
  while (x <= width) {
    fill(255, 255, 255);
    ellipse(x, 600, 25, 25);
    x = x + 50;
  }
  for (varx = 0; x <= width; x += 50) {
    fill(255, 0, 200);
    ellipse(x, 300, 25, 25);
  }
}

function skis() {
  fill(50, 50, 50)
  rect(200, 110, 40, 450, 20)
  rect(260, 110, 40, 450, 20)
  fill(hatcolor)
  rect(205, 295, 30, 80)
  rect(265, 295, 30, 80)
}

function mouth() {
  fill(194, 165, 130)
  ellipse(450, 305, 50, 20)
}

function snowballtwo() {
  //fill(255,255,255);
  ellipse(frameCount % width, height / 10, 100, 100);
}

function snowballthree() {
  //fill(255,255,255);
  ellipse(frameCount % width, height / 3, 100, 100);
}


function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(170, 176, 240); //backgroud color
  //this for loop draws lines every 20 pixels for the length and height of the canvas. 
  for (var i = 0; i < width; i += 20) {
    line(i, 0, i, height);
    line(width, i, 0, i);
  }

  fill(0);
  /*set fill to black. I need this fill because the noFill above would make these invisible. Try changing the 0 to an R,G,B value */
  textSize(24); //changes the font size
  //  text(mouseX, 400, 20); //displays the x coordinate
  //  text(mouseY, 20, 400); //displays the y coordinate

  
  face();
  shirt();
  hat();
  sun();
  snowballs();
  skis();
  nose();
  mouth();
  noStroke(0)

  if (mouseIsPressed == true) {
    fill(224, 224, 82)
  } else {
    fill(255, 255, 255);
  }
  snowballtwo();
  snowballthree();

}