function setup() {
  createCanvas(650,650);
  background(204, 204, 255);
}
let faceColor = ('#e5ab70');//global variable
let hairColor = ('#2c1608');//global variable

function hair() {//hair back
  fill(hairColor);
  noStroke();
  square(160, 150, 350, 30);
}

function portrait() {
  
//neck
    let f = color(219, 170, 112);
  fill(f);
  noStroke();
  rect(270,440,125,125)//x,y center coordinates,w,l
  
// Draw a square with rounded corners, each having a radius of 20.
//head top
  fill(faceColor);
  noStroke();
  square(230, 190, 205, 20);//center,w/l,rounded
  
//hair again but the front of it"bangs"
  fill(hairColor);
  noStroke();
  ellipse(270,180,220,130);
  ellipse(380,190,220,100);
  
//jawline(needed to make it rounder)
  fill(faceColor);
  noStroke();
  circle(332, 380, 204)
  
//glasses/eye holes
  strokeWeight(6);
  stroke(51);
  noFill();
rect(260, 270, 60, 45, 15);  
rect(350, 270, 60, 45, 15);  

//noseframe
    noFill();
  stroke(51);
  strokeWeight(6)
  curve(300,360,320,300,350,300,300,350);
  
//glass frames
  line(260, 295, 230, 285);
  line(410, 295, 435, 285);

//eyes
let b = color(75,54,33);//eyeballs
fill(b);
noStroke();
  circle(290,290,20);
  circle(375,290,20);
  
    noFill();//eyelids
  stroke(51);
  strokeWeight(5)
  curve(300,360,270,290,310,290,310,350);
  curve(310,360,358,290,395,290,300,360);
  
//smile
  fill(250);//teeth
  stroke(164,90,82);
  strokeWeight(7);
  line(300,400,370,400)//top lip
    curve(250,250,300,400,370,400,300,300);//bottom lip

//nose
  stroke(205,149,127);
  noFill();
  strokeWeight(2);
  triangle(315,350,330,315,330,360);//shadow
  curve(270,270,320,370,350,370,320,370); //tip of nose
  
  
//shirt
let g = color(16,84,33);
fill(g);
noStroke();
rect(120,540,420,110);
triangle(335,540,20,650,630,650);

fill(hairColor);//wand cuz I have one at home that I made myself
triangle(0,650,80,300,10,650);
  
}
function earings(){//earings
//fill(238,155,0);
circle(225,360,10);
circle(440,360,10);
}

function draw() {
    background(204, 204, 255,20);//color then speed
  

    let sparkle = {
        locationX: random(width),
        locationY: random(height),
        size: random(3, 15)//random places for sparkle
    }

    fill (250);//sparkle color
    noStroke();
    ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);
  
  hair()
  portrait()
    if (mouseIsPressed) {
    fill('green');
  } else {
  fill(238,155,0);//if mouse is pressed the earings wiil change from gold to green
  }
  earings()
  

for (let i = 540; i < 650; i+=25){  
  strokeWeight(4)
  stroke('silver');
  line(120, i, 540, i);
  }//for loop and sweater stripes for slytherin house
  
  for(let i=10; i<200;i+=10){//light from wand
    noFill();
  stroke('yellow');
  strokeWeight(3);
  ellipse(80,300,i,i)
  }
  
if(mouseX<100) if(mouseY>300)//when hovering in those areas what comes after follows
 fill(255)
  ellipse(80,300,30)//used for a normal white center when hovering above it
  if(mouseX<100) if(mouseY>300)
    for(let i=7; i<300;i+=7){//light from wand expanding when mouse is moved over area
    noFill();
  stroke('white');
  strokeWeight(2);
  ellipse(80,300,i,i)
  }
  
}