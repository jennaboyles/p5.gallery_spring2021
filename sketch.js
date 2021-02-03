let lipcol = {
  r: 229,
  g: 95,
  b: 95, 
}



function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(220);
  
 
  
  noStroke();
colorMode(RGB);
let c = color(35, 15, 95); 
fill(c);
  rect (150, 0, 1000 )
  let value = lightness(c); // Sets 'value' to 50
fill(95, 15, 90);
rect(50, 0, 35, 1000);
  
 function mousePressed() {
  loop();
}

  
  //hair wave
  fill("#D39852");
  strokeWeight(2);
  stroke("#EFE87C");
  beginShape();
  vertex(230, 200);
  bezierVertex(230, 200, 220, 230, 230, 260);
  bezierVertex(230, 260, 240, 290, 200, 320);
  bezierVertex(230, 320, 220, 350, 400, 380);
  bezierVertex(240, 380, 350, 400, 460, 380);
  bezierVertex(470, 380, 480, 350, 470, 320);
  bezierVertex(470, 320, 460, 290, 470, 260);
  bezierVertex(470, 260, 480, 230, 470, 200);
  endShape(close);
  
  
  //hair top
  stroke("#D39852");
  fill("#5F300F");
  arc(350, 200, 241, 180, -PI, 0);
 
//neck
  noStroke();
  ellipse(350, 260, 70, 150); //chin
  fill("#F3C491");
  quad(330, 310, 370, 310, 380, 370, 320, 370);
  
  //head
    noStroke();
  fill("#F8D390")
  
  ellipse (350, 250, 120, 170);
  
  endShape();
  
   //framing pieces
  fill("#D39852");
  strokeWeight(.2);
  stroke("#5F300F");
  
  //bottom right
  beginShape();
  vertex(320, 160);
  bezierVertex(320, 200, 420, 140, 440, 240);
  endShape();

  //top right
  beginShape();
  vertex(320, 165);
  bezierVertex(320, 165, 430, 140, 435, 240);
  endShape();
  
   //left
  beginShape();
  vertex(320, 160);
  bezierVertex(340, 160, 320, 240, 260, 240);
  endShape();

  //top left
  beginShape();
  vertex(320, 165);
  bezierVertex(320, 165, 265, 165, 260, 240);
  endShape();

  noStroke();


  //body
  fill("#F3C491");
  quad(320, 370, 380, 370, 510, 430, 190, 430); 
  rect(190, 430, 320, 70);
  
  

  //lips
  lipcol.r = random(111, 218);
  lipcol.g = random(100, 59);
  lipcol.b = random(200, 200);
  fill(lipcol.r, lipcol.g, lipcol.b);
  strokeWeight(1);
  stroke(lipcol.r, lipcol.g, lipcol.b);
  beginShape();
  vertex(330, 300);
  bezierVertex(330, 300, 340, 290, 350, 300);
  bezierVertex(350, 300, 360, 290, 370, 300);
  bezierVertex(370, 300, 350, 325, 330, 300);
  endShape(CLOSE);
  
   //leaf 
  fill("#DBAAD9");
  strokeWeight(1);
  stroke("#DBAAD9");
  beginShape();
  vertex(260, 700);
  bezierVertex(270, 700, 220, 300, 320, 470);
  bezierVertex(320, 470, 350, 370, 380, 470);
  bezierVertex(380, 470, 450, 390, 520, 700);
  endShape();
  
  //leaf  
  fill("#747c24")
  stroke("#747c24");
  beginShape();
  vertex(100, 600);
  bezierVertex(200, 700, 50, -140, 330, 700);
  endShape();
  stroke("#959e2e");
  strokeWeight(2);
  line(265, 700, 187, 390);

  //leaf 
  fill("#bcc639")
  stroke("#bcc639");
  beginShape();
  vertex(350, 700);
  bezierVertex(350, 700, 300, 400, 380, 550);
  bezierVertex(380, 550, 350, 350, 410, 500);
  bezierVertex(410, 500, 430, 295, 460, 500);
  bezierVertex(460, 500, 520, 370, 480, 550);
  bezierVertex(480, 550, 550, 400, 500, 700);
  endShape(CLOSE);
  
  noStroke();
  
  //eyes
  fill("#")
  ellipse(320, 240, 30, 20)
  ellipse(390, 240, 30, 20)
  fill("#76421D")
  ellipse(320, 240, 15)
  ellipse(390, 240, 15)
  fill(0)
  circle(320, 240, 9)
  circle(390, 240, 9)
  endShape();
  
  
  textSize(60);
  fill(59, 88, 229)
text('neza', mouseX, mouseY);
  textSize(70)
fill(229, 59, 126);
text('neza', mouseX, mouseY);
  textSize(50)
fill(175, 229, 59);
  strokeWeight(5)
text('neza', mouseX, mouseY);
  
  
}
