function setup() {
  createCanvas(600, 600);
}


  let e = 0
function draw() {
  

  
  
  //black background turns white when mouse pressed
  background(e);
  
//variables
a = 231
b = 195
c = 156
d = 250
i = ellipse(250,350,650,600)
  //Conditional Statement for changing the ellipse colors when mouse is moved
  //light pink
  {stroke (300, 200, 300);
  strokeWeight(25);
  noFill();
}
  
  //if mouseX is past coordinate point 300, ellipse
  if (mouseX > 300) {
    stroke(0,220,255);
    fill(250,250,0)
    ellipse(250, 350, 650, 600);
    
  
    //if mouseX is greater than 250, ellipse different colors
  } else if (mouseX > 250) {
    fill(0, 100, 150);
  	ellipse(250, 350, 650, 600);
    //if greater than 100 ellipse different colors
  } else if (mouseX > 100) {
    stroke(230,0,23)
    fill(255, 0, 255);
   	ellipse(250, 350, 650, 600);
    //anything less than 100, ellipse with different colors
	} else {
    fill(250,90,26)
    stroke(250,0,250)
    ellipse(250, 350, 650, 600);
	}
 //Hair
  noStroke()
  fill(32, 19, 19);
  arc(250, 286, 280, 400, QUARTER_PI + HALF_PI, TWO_PI + QUARTER_PI, OPEN)
//Face 
  noStroke()
  fill(a, b, c);
  ellipse(250, 250, 190, 240);
  //Ear
  ellipse(150, 265, 40, 60)
//bangs 
  stroke(32,19,19)
  strokeWeight(7)
  fill(32,19,19)
  line(d, 130, 270, 200)
  line(d + 10, 130, 270, 200)
  line(d+20, 130, 280, 200)
  line(d+30, 130, 290, 200)
  line(d+40, 140, 300, 200)
  line(d+50, 140, 310, 200)
  line(d+60, 140, 330, 240)
  line(d-20, 130, 220, 200)
  line(d-30, 130, 210, 200)
  line(d-10, 130, 220, 200)
  line(d-50, 140, 190, 200)
  line(d-40, 140, 200, 200)
  line(d-60, 140, 170, 240)
//hair by ear
  line(160, 160, 150, 290)
  noStroke()
//Nose
  fill(214, 182, 141)
  triangle(240, 240, 270, 270, 240, 270);
//lips
  fill(240, 130, 117)
  ellipse(260, 290, 40, 20)
  fill(240, 130, 117)
  ellipse(260, 300, 40, 20)
//BLUEeyeshadow
  fill(0, 0, 255)
  strokeWeight(2)
  stroke(2)
  ellipse(200, 225, 40, 20)
  ellipse(290, 225, 40, 20)
  noStroke()
//eyes
  fill(255)
  ellipse(200, 230, 40, 20)
  ellipse(290, 230, 40, 20)
  strokeWeight(1)
  fill(32, 19, 19);
  arc(200, 230, 40, 20, QUARTER_PI + HALF_PI, TWO_PI + QUARTER_PI)
  arc(290, 230, 40, 20, QUARTER_PI + HALF_PI, TWO_PI + QUARTER_PI)
//Neck
  fill(231, 195, 156);
  rect(250, 360, 50, 50);
//Torso
  rectMode(CENTER)
  fill(0)
  rect(250, 460, 250, 150, 40);
  fill(231, 195, 156);
  rect(250, 400, 140, 30, 10)
//Cont.
  rectMode(CENTER)
  fill(0)
  rect(250, 560, 200, 150, 0);
//Shirt + Sleeves
  fill(0)
//left sleeve
  rect(105, 592, 70, 170)
  translate(width / 5, height / 1.3);
  rotate(PI / 6);
  rect(15, -2, 70, 140);
  fill(0)
//right sleeve
  translate(width / 10, height / 20);
  rotate(PI / -3);
  rect(206, 70, 70, 151);
//arm extension
  translate(width / 10, height / 20);
  rotate(PI / 3);
  rect(152, -175, 70, 152);
  fill(231, 195, 156)
  translate(width / 10, height / 20);
  rotate(PI / 0);
  rect(85, -306, 40, 50);
//peace
  rect(85, -342, 50, 50, 20);
  rect(85, -360, 15, 70, 20);
  translate(width / 10, height / 20);
  rotate(PI / -3.08);
  rect(335, -196, 15, 60, 20);
  
}

//mouse pressed function
  function mousePressed() {
  if (e === 0) {
    e = 255;
  } else {
    e = 0;
  }
    //for loop
    for (let i = 300; i < 100; i+=100){  
  strokeWeight(6)
  stroke('purple') 
  line(100, i, 300, i);
  }
}
