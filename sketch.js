function setup() {
  createCanvas(600,540);
  //pick colors randomly
   r = random(255);
   g = random(255);
   b = random(255);
}
function draw() {
  background(r,g,b);
  //set the background color to green R,G, B
    for(i = 0;i < 20; i++){
    fill(255,245,180);
    ellipse(i*15,i*15,i*20)
    }
  
  fill(0); //hair
  arc(328,330,360,400,QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
 
  fill(350,200,140);
  noStroke();
  ellipse(330,300,250,250); //head
  fill(0);
  triangle(160,280,300,150,390,170); //right bang
  triangle(500,280,280,200,390,170); //left bang
  

  
  fill(350,200,140);
  noStroke(); 
  rect(295,400,60,60); //neck
  
  fill(350,200,140);
  noStroke();
  rect(150,450,350,100); //shoulders
  
  stroke(320,170,100); //collarbone
  line(230,465,300,475)
  line(360,475,430,465)
  
  fill(0,150,300);
  noStroke();
  rect(200,490,250,60); //top
  
  fill(350,200,140);
  noStroke();
  ellipse(205,310,50,50); //left ear
  ellipse(455,310,50,50); //right ear
  
  fill(192,192,192);
  noStroke();
  ellipse(205,340,30,40); //left earring
  ellipse(455,340,30,40); //right earring
  
  fill(320,170,100);
  noStroke();
  triangle(305,340,325,280,345,340); //nose
  
  stroke(1);
  noFill();
  arc(395,255,60,10, PI,TWO_PI,OPEN); //right eyebrow
  arc(260,255,60,10, PI,TWO_PI,OPEN); //left eyebrow
  
  fill(0,0,200); //eyeshadow 
  arc(395,285,60,40, PI, TWO_PI, CHORD); //right eye
  arc(260,285,60,40, PI, TWO_PI, CHORD)
  
  
  fill(250,250,250);
  noStroke();
  ellipse(260,290,60,40); //left eye
  
  fill(250,250,250);
  noStroke();
  ellipse(395,290,60,40); //right eye
 
  fill(180,125,30);
  noStroke();
  ellipse(260,290,25,25); //left iris
  
  fill(180,125,30);
  noStroke();
  ellipse(395,290,25,25); //right iris
  
  fill(0,0,0)
  noStroke();
  ellipse(395,290,10,10); //right pupil
  ellipse(260,290,10,10); //left pupil

  stroke(15); 
  line(240,260,244,270); //left side
  line(230,265,234,275)
  line(420,275,424,265); //right side
  line(410,270,414,260)
  
  stroke(255,20,147); //blush
  line(220,350,230,340); //left side
  line(240,350,250,340)
  line(260,350,270,340)
  line(400,340,410,350); //right side
  line(380,340,390,350)
  line(420,340,430,350)
  
  fill(r, g, b);
  noStroke();
  ellipse(325,385,90,25); //lips
  
  stroke(15);
  line(280,385,370,385); 
  
  stroke(300,160,100)
  line(295,422,355,422); //chin
  
  fill(100,100,100); //lipstick
  noStroke();
  rect(340,395,10,70)
  fill(139,0,0); //lipstick
  triangle(340,395,348,380,350,395)
  
  fill(320,170,100)
  noStroke(0);
  arc(265,380,10,10,HALF_PI,PI); // left dimple
  arc(390,380,10,10, 0, HALF_PI); //right dimple
}

// when the user clicks the mouse
  function mousePressed() {
    let d = dist(mouseX,mouseY,325,385);
    if (d < 100) {
      // pick random colors for lips and background
      r = random(255);
      g = random(255);
      b = random(255);
    } 
  }