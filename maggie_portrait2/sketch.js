headHeight = 200
headWidth = 150
centerX = 300
centerY = 300
eyeWidth = 30
eyeHeight = 20
eyeOffset = 30


function setup() {
  createCanvas(600, 600);

}

function draw() {

  background(0, 210, 255);

  if (mouseX < 100) {
    background('#fa7d9c');
  } else if (mouseX >= 100 && mouseX < 300) {
    background('#70fa85');
  } else if (mouseX >= 300) {
    background('#5276fa');
  } // color-changing conditional

  strokeWeight(0);
  hairBack()
  neck()
  head()
  eye()
  nose()
  mouth()
  eyebrow()
  hairFront();

  stroke(255);
  strokeWeight(5);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mousePressed() {
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, 50, 50);
  loop();
} // draw with mouse

function head() {
  fill('#f5e3b8');
  ellipse(centerX, centerY, headWidth, headHeight);
}

function neck() {
  fill('#f5dea9')
  rectMode(CENTER);
  rect(centerX, centerX + headHeight / 2, 75, 100);
}

function eye() {
  fill('#ffffff');
  ellipse(centerX - eyeOffset, centerY - 20, eyeWidth, eyeHeight);
  ellipse(centerX + eyeOffset, centerY - 20, eyeWidth, eyeHeight);
  fill('#000000');
  ellipse(centerX - eyeOffset, centerY - 20, eyeWidth / 3);
  ellipse(centerX + eyeOffset, centerY - 20, eyeWidth / 3)
}

function nose() {
  fill('#f0d99e')
  ellipse(centerX, centerY + 10, 20, 30)
}

function mouth() {
  stroke('#f5c4cf')
  strokeWeight(5);
  noFill();
  arc(centerX, centerY + 20, 60, 60, PI * 0.2, PI - PI * 0.2);
}

function eyebrow() {
  stroke('#967738')
  strokeWeight(5);
  noFill();
  arc(centerX - eyeOffset, centerY - 25, 40, 30, PI + PI * 0.2, 2 * PI - 0.2 * PI);
  arc(centerX + eyeOffset, centerY - 25, 40, 30, PI + PI * 0.2, 2 * PI - 0.2 * PI)
}

function hairFront() {
  strokeWeight(0);
  fill('#786e4f');
  arc(centerX, centerY - 50, headWidth + 35, 110, PI, TWO_PI, CHORD);
}

function hairBack() {
  fill('#786e4f');
  rectMode(CORNER);
  rect(centerX - (headWidth + 35) / 2, centerY - 50, headWidth + 35, 200);
}