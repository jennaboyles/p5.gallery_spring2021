// delicious flakes :P
let flakes = []; // array to hold snowflake objects

var video;
var button;
var snapshot = [];

function setup() {
  createCanvas(1000, 1000);
  // fill(255, 0, 0);
  noStroke();

  //createCanvas(600,600);
  //background(51);
  video = createCapture(VIDEO);
  video.size(240, 240);
  video.position(800,0);
  button = createButton('SNAP');
  button.mousePressed(takesnap)
  button.size(80,40);
  button.position(35, 700);
}

function takesnap() {
  snapshot = video.get();
  print(snapshot);
}

function preload() {
  let shapes;
  img = loadImage('uic.png');
}

function Congratulations() {
  fill(255);
  square(0, 0, 1000);
  fill(0);
  textFont('Brush Script MT', 100, 100);
  textAlign(CENTER);
  text('Congratulations', 400, 300);
  text('Class of 2021!!', 400, 400);

}



function draw() {
  background('white');
  let t = frameCount / 60; // update time


  //loop dictating the sequence on the background
  for (let i = 10; i < 2000; i += 150) {
    for (let j = 15; j < 2000; j += 150) {

      image(img, i, j, 130, 130); //images going across the screen

    }
  }
  
  
    if (snapshot.width > 100) { //snapshot seen as object instead of array, so use object charatersitic to check
      //print(snapshot.length);
      //console.log("entered");
      image(snapshot,700,700,500,500);
    }

    //Congradulations ();

  



  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    flakes.push(new Flake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of flakes) {
    flake.update(t); // update snowflake position 
    flake.display(); // draw snowflake show
  }
}

// snowflake class
class Flake {

  constructor() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 10);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));
    this.color = color(random(255), random(255), random(255));
  }

  update(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = flakes.indexOf(this);
      flakes.splice(index, 1);
    }
  };

  display() {
    fill(this.color);
    ellipse(this.posX, this.posY, this.size);
  };
}