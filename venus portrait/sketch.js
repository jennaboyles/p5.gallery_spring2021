//reference page https://kellylougheed.medium.com/generative-art-with-p5-js-program-your-own-art-6a6ac7e57d87
//mousepressed value
let value = 0; 
var colorChange=250

function randomColor() {
  var a = random(0, 255);
  var b = random(0, 255);
  var c = random(0, 255);}

 
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(1);
  for (let i = 0; i < 200; i++) {
    fill('#ffebf2');
    ellipse(random(windowWidth), random(windowHeight), random(100)); 
  }
  for (let i = 0; i < 200; i++) {
    fill('#e3e8c3');
    ellipse(random(windowWidth), random(windowHeight), random(70))}
  
}

function draw() {
 //for (let i = 0; i < 100; i++) {
    //fill(random(230), random(219), random(195), random(219));
    //ellipse(random(windowWidth), random(windowHeight), random(100)); 
 // }
// body background 
  noStroke();
  fill('#edbb66');
  ellipse(300,370,500,500);
  fill('#f7d8a1');
  noStroke(0);
  ellipse(500,120,450,450);
  stroke(0);
  bezier(620,2,600,170,273,5,299,219);

   if (mouseIsPressed){
     fill('#8a450f')
    textFont('Digital-7');
    textSize(100);
    text("goddess", 210, 100);
     
  }
    
//top of background
  noFill('#fad6a0');
  noStroke(0);
  ellipse(360,370,330,450);
  
//face
  stroke(1);
  noFill(0);
  bezier(449,260,446,268,470,261,410,342);//faceline1
  bezier(450,246,452,249,452,254,449,260);//faceline2
  bezier(440,205,454,234,450,245,450,246);//faceline3
  bezier(410,342,383,336,367,334,348,316);//faceline4
  
//eye
  bezier(432,251,439,257,444,258,451,255);//eyeline
  bezier(439,248,442,246,445,247,447,247);//eyelid
  
//eyelash
  fill('black');
  beginShape();
  vertex(438,257);
bezierVertex(441,256,451,255,455,260);//eyelash
bezierVertex(443,259,450,259,443,259);
  endShape();
//eyebrow
  fill('black');
  beginShape()
  vertex(434,240);
bezierVertex(437,238,438,234,451,241);//eyebrow
bezierVertex(450,239,444,240,436,239);
  endShape()
//nose
  noFill(0)
  //strokeWeight(2)
  bezier(431,245,429,247,424,250,427,265);//brigde
  bezier(428,273,428,278,431,279,431,280);//pointy noise
  bezier(420,284,428,282,429,283,431,280);
  fill('black')
  ellipse(409,283,7,1.75)//nostril
//lips
  angleMode( DEGREES);
  fill( 'orange');
  arc(410,311,24,16 ,0,180);
  bezier(410,308,401,303,398,303,392,310);//lips line 2
 bezier(410,308,415,303,421,303,425,311);//lips line 1
  bezier(392,310,402,310,416,309,425,311);//lips line 3

//hair
  noFill('black');
  bezier(433,192,420,190,427,221,397,248);//hair wave
  bezier(397,248,345,245,355,320,320,326);//wave2
  bezier(397,248,360,260,362,288,349,318);//part of wave 2
  bezier(349,318,337,326,317,328,305,345);//part3
  bezier(305,345,288,360,306,390,281,435);
  bezier(281,435,250,471,276,507,271,561);
  bezier(320,326,292,326,319,393,282,433);
  bezier(433,192,300,100,300,274,255,268);
  bezier(255,268,190,320,250,350,210,380);
  bezier(210,380,153,410,239,498,161,559);
  bezier(433,192,464,198,456,250,473,266);//left wave hair
  bezier(473,266,480,274,462,316,487,325);
  bezier(487,325,513,336,516,344,504,372);
  bezier(504,372,490,388,497,396,505,409);
  bezier(505,409,525,422,530,450,516,471);
//hair part2
  bezier(400,173,313,185,350,253,307,282);
//fill in 
//circle(30, 30, 20);
//shoulders
  push();
  bezier(383,336,380,380,492,352,498,398);
  bezier(325,338,320,380,250,398,237,444);
  bezier(337,355,339,365,352,382,361,388);
  bezier(365,380,366,378,367,377,368,376);
  bezier(358,403,336,395,313,411,292,409);
  bezier(368,392,376,378,398,383,417,382);
  pop();
//flowers
  for(let i=0;i<1000;i+=50){
    noFill(0);
    stroke(1);
    bezier(i+10,795,i+16,710,i-20,656,i,525);
    strokeWeight(1);
     fill('#bd8a33');
    ellipse (i,523,10,100);
    strokeWeight(1);
    line(i+2,497,i+10,487);
    line(i+4,529,i+10,512);
  }
  

}
  





