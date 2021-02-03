let x = 50;
var c1, c2;


function setup() {
  createCanvas(600, 700);

}


function draw() {
  background(225, 225, 191); //Background setting


  //hair
  noStroke();
  fill(38, 31, 20) //umber brown
  ellipse(220, 300, 100)
  ellipse(400, 300, 100)
  ellipse(350, 225, 100)
  ellipse(300, 225, 100)
  ellipse(250, 225, 100)
  ellipse(265, 175, x) //x is a global variable for the small circles that make up the hair
  ellipse(265, 175, x)
  ellipse(300, 175, x)
  ellipse(335, 175, x)
  ellipse(195, 260, x)
  ellipse(405, 260, x)
  ellipse(405, 350, x)
  ellipse(195, 350, x)
  ellipse(175, 315, x)
  ellipse(440, 315, x)

  //function: Face
  fill(153, 100, 25); //brown for head
  rect(270, 415, 55, 55) //neck
  rect(185, 350, 20, 30) //ear
  rect(395, 350, 20, 30) //ear
  ellipse(300, 350, 200) //head
  fill('#222222') //black eye
  ellipse(265, 335, 15)
  fill('#222222')
  ellipse(335, 335, 15) //black eye
  line(305, 345, 310, 375)
  fill(38, 31, 20) //ears
  rect(245, 310, 40, 5)
  rect(315, 310, 40, 5)

  fill('red') //lips
  ellipse(290, 400, 20)
  ellipse(310, 400, 20)
  fill('red')
  ellipse(300, 410, 35)

  //function: clothing
  ellipseMode(RADIUS); //left earring
  fill(255);
  ellipse(185, 400, 30, 30); // Outer white ellipse
  ellipseMode(CENTER);
  fill(225, 225, 191);
  ellipse(185, 400, 30, 45)
  ellipseMode(RADIUS); //right earring
  fill(255);
  ellipse(415, 400, 30, 30); // Outer white ellipse
  ellipseMode(CENTER);
  fill(225, 225, 191);
  ellipse(415, 400, 30, 45)

  fill(153, 100, 25)
  rect(247, 455, 100, 40) //chest
  rect(253, 548, 90, 20) //midriff

  fill('pink') //shirt
  rect(243, 489, 110, 60)
  ellipse(224, 480, 60, 90)
  rect(210, 520, 25, 10)
  ellipse(370, 480, 60, 90)
  rect(210, 520, 20, 10)
  rect(360, 520, 25, 10)

  //arms
  rect(360, 520, 25, 100)
  rect(210, 520, 25, 100)

  fill(209, 237, 242)
  rect(253, 565, 90, 40)

  triangle(253, 565, 200, 700, 275, 700);
  triangle(342, 565, 400, 700, 330, 700)

  //Words on shirt
  //textSize(32);
 // text('MIA', 270, 525);
 // fill(90, 100, 153);


//Conditional and MousePress
  if (mouseIsPressed) {
    //Words on shirt
    textSize(40);
    text('MIA', 270, 525);
    fill(50, 50, 153);

  } else {
    textSize(32);
    text('MIA', 270, 525);
    fill(90, 100, 153);


     

  }









}