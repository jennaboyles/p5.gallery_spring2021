let x = 300;
let y = 300;//background loop

let moon = 0//moon

function setup() {
  createCanvas(500, 500);
  let lipstick = color(181, 18, 34);
  fill(lipstick); //mouth color
  arc(260, 325, 49, 35, 0, PI); //mouth shape)




}


function mousePressed(){//mousepressed function of the moon/make it appear
  if (moon === 0) {
    moon = 222;
  } else {
    moon = 0;
  }
}
function bangs() {
  noStroke()
  fill(56, 24, 4); //bang color
  arc(180, 120, 140, 148, 0, 0.75 * Math.PI); //bang shape. i wanted the bang to also be on the other side but i couldn't get it symmetrical 
}

function hair() {
  noStroke()
  fill(56, 24, 4);
  arc(260, 280, 330, 390, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN); //straight hair, dark brown color
}



function draw() {
  background(0);


  fill (moon)//moon
  ellipse (70, 55, 78, 70, 86,)//size and placement of moon
  
  
  noStroke();
  fill("#f1f1f1");
  ellipse(x, y, 500, 5000);//the background changing 
  
  x = x+1
  

  hair();

  noStroke()
  fill(209, 163, 136); //skin color
  ellipse(260, 255, 200, 260); //face shape


  fill(209, 163, 136) //neck color
  rect(260, 380, 50, 55, 20); //neck

  bangs();


  stroke(2, 19, 19);
  strokeWeight(0)
  fill(56, 24, 4); //eyebrow color
  arc(210, 235, 45, 15, PI, TWO_PI, OPEN); //left eyebrow
  arc(310, 235, 45, 15, PI, TWO_PI, OPEN); //right eyebrow



  strokeWeight(5)
  fill(15, 15, 15); //eye color
  ellipse(210, 260, 28, 25); //left eye
  ellipse(310, 260, 28, 25); //right eye


  noStroke()
  fill(255) //eyeball color
  ellipse(210, 252, 8, 8); //left eyeball
  ellipse(310, 252, 8, 8); //right eyeball


  fill(227, 191, 170, ) //nose color
  ellipse(260, 290, 5, 20, ); //nose shape


  fill(181, 18, 34); //lipstick
  arc(260, 325, 49, 35, 0, PI); //mouth shape)



  rectMode(CENTER)
  rect(260, 470, 205, 150, 30); //shirt
  fill(255, 153, 202) //shirt color
  //i tried to do a night sky for loop

  
}