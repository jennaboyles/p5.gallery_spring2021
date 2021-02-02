/* Global Variables */
let bodyXCenter = 375;
let bodyYCenter = 200;
/* Changing these won't change anything
because I change them in each function */
let currColor = '#cccccc';
let skinColor = '#d49000';

/* Global Variables added since Part 2 */
/* Used as part of the interactive 
mousePress or conditionals (clouds and waves) */
let cloudMove = 0;
let buildingColorOne = '#000000';
let buildingColorTwo = '#333333';
let buildingColorThree = '#666666';
let dressColorR = 17;
let dressColorG = 212;
let dressColorB = 238;
let waveMove = 0;

/* Canvas Variable used during mousePressed function */
let canvas;

/* Function to create the lake */
function lake() {
  // Set the fill to a shade of blue
  fill('#1a39e5');
  // Rectangle that sets up the lake
  rect(0, 250, 750, 575);
  // Set the stroke to black
  stroke('black');
  // To Create the moving waves
  angleMode(degrees);
  // 2D Array full of semi-circles to produce
  // the wave - X-Coord. based on Global Variable
  // to create movement
  for (let j = 255; j < 575; j+=20) {
    for (let i = waveMove; i < 500; i+=3) {
      arc(i * 20, j, 15, 15, 0, -180, OPEN);
    }
  }
  // Increments the Global Variable or 
  // resets Global Variable if the boundary is reached
  if (waveMove == 2) {
    waveMove = 0;
  } else {
    waveMove+= 0.5;
  }
}


/* The function creates the buildings */
function buildings(loopCounter) {
  // Set the stroke color to the current
  // state of the currColor
  stroke(currColor);
  // Call the lake function to create the lake
  lake();
  // Set the fill state back to the current color
  // after lake function
  fill('#cccccc');
  // Pavement where I'm standing
  rect(0, 425, 750, 575);
  // Creates about 15 buildings of 3 different shades
  // of grey along the lake (skyline)
  let xCor = 0;
  let buildingColor;
  let buildingWidth;
  let buildingHeight;
  for (let i = 0; i < 15; i++) {
    // Colors based on One of 3 Grayscale values
    if (i % 3 == 0) {
      buildingColor = buildingColorOne;
      buildingWidth = 50;
      buildingHeight = 50;
    } else if (i % 2 == 0) {
      buildingColor = buildingColorTwo;
      buildingWidth = 65;
      buildingHeight = 100;
    } else {
      buildingColor = buildingColorThree;
      buildingWidth = 80;
      buildingHeight = 150;
    }
    // set fill state to chose building color
    fill(buildingColor);
    rect(xCor, 250 - buildingHeight, buildingWidth, buildingHeight);
    // reset the xCor to after the newly made building
    xCor = xCor + buildingWidth;
  }
}

/* Function to create a single cloud consisting of
3 circles */
function cloud(x, y) {
  noStroke();
  ellipse(x, y, 25, 25);
  ellipse(x + 25, y, 50, 50);
  ellipse(x + 50, y, 25, 25);
}

/* Function to create a single cloud in a specific position */
function createCloud(x, y) {
  cloud(x, y);
}

/* Function to create the sky */
function sky() {
  // Set fill state to yellow for sun
  currColor = 'yellow';
  fill(currColor);
  // Circle for sun
  ellipse(0, 0, 150, 150);
  // Set fill state to white for clouds
  currColor = 'white';
  fill(currColor);
  // Create 6 clouds based on cloudMove
  // Global Variable
  createCloud(0 + cloudMove, 50);
  createCloud(200 + cloudMove, 75);
  createCloud(300 + cloudMove, 55);
  createCloud(400 + cloudMove, 60);
  createCloud(500 + cloudMove, 70);
  createCloud(600 + cloudMove, 65);
  // Increments the Global Variable or 
  // resets Global Variable if the boundary is reached
  if (cloudMove >= 810) {
    cloudMove = -5;
  } else {
    cloudMove += 5;
  }
}

/* Function to create the two shapes for my legs */
function legs() {
  // left leg
  beginShape();
  vertex(bodyXCenter - 37.5, bodyYCenter + 160);
  vertex(bodyXCenter - 30, bodyYCenter + 300);
  vertex(bodyXCenter, bodyYCenter + 300);
  vertex(bodyXCenter, bodyYCenter + 160);
  endShape(CLOSE);
  // right leg
  beginShape();
  vertex(bodyXCenter, bodyYCenter + 160);
  vertex(bodyXCenter, bodyYCenter + 300);
  vertex(bodyXCenter + 30, bodyYCenter + 300);
  vertex(bodyXCenter + 37.5, bodyYCenter + 160);
  endShape(CLOSE);
  // Line inbetween to distinguish legs
  stroke('#a36f00');
  line(bodyXCenter, bodyYCenter + 160, bodyXCenter, bodyYCenter + 300);
  noStroke();
}

/* Function to create arms and hands */
function armsAndHands() {
  // Left arm
  beginShape();
  vertex(bodyXCenter - 16, bodyYCenter + 46);
  vertex(bodyXCenter - 106, bodyYCenter + 115);
  vertex(bodyXCenter - 106, bodyYCenter + 135);
  vertex(bodyXCenter - 16, bodyYCenter + 76);
  endShape(CLOSE);
  // Right arm (shoulder till elbow)
  beginShape();
  vertex(bodyXCenter + 4, bodyYCenter + 46);
  vertex(bodyXCenter + 64, bodyYCenter + 56);
  vertex(bodyXCenter + 64, bodyYCenter + 76);
  vertex(bodyXCenter + 4, bodyYCenter + 73);
  endShape(CLOSE);
  // Right arm (elbow till hand)
  beginShape();
  vertex(bodyXCenter + 64, bodyYCenter + 56);
  vertex(bodyXCenter + 104, bodyYCenter + 20);
  vertex(bodyXCenter + 115, bodyYCenter + 30);
  vertex(bodyXCenter + 64, bodyYCenter + 76);
  endShape(CLOSE);
  // Line between R arm components to get
  // rid of boundary line
  stroke(skinColor);
  line(bodyXCenter + 64, bodyYCenter + 56, bodyXCenter + 64, bodyYCenter + 75);
  // left hand
  ellipse(bodyXCenter - 106, bodyYCenter + 125, 25, 25);
  // right hand
  ellipse(bodyXCenter + 112, bodyYCenter + 20, 25, 25);
}

/* Function that creates the overall body. Includes the
legs and armsAndHands functions */
function body() {
  noStroke();
  // Set fill state to skinColor
  fill(skinColor);
  // My Head
  ellipse(bodyXCenter, bodyYCenter, 65, 75);
  // Bangs for hair that consists of layerd circles
  currColor = 'black';
  fill(currColor);
  ellipse(bodyXCenter + 14, bodyYCenter - 23, 30, 30);
  ellipse(bodyXCenter + 5, bodyYCenter - 30, 35, 35);
  ellipse(bodyXCenter + 25, bodyYCenter - 15, 20, 20);
  // Set fill state back to skinColor
  fill(skinColor);
  // My Neck - a small rectangle
  rect(bodyXCenter - 10, bodyYCenter + 20, 20, 30);
  // My Chest - a upside down semi-circle and a rect.
  arc(bodyXCenter, bodyYCenter + 80, 75, 75, PI, 0);
  rect(bodyXCenter - 37.5, bodyYCenter + 80, 75, 80);
  // Call legs function for legs
  legs();
  // Call armsAndHands for arms and hands
  armsAndHands();
}

// Function to create part of hair behind the body
function hair() {
  currColor = 'black';
  fill(currColor);
  // Part of hair "above the head"
  ellipse(bodyXCenter, bodyYCenter - 5, 85, 95);
  // Actual straight hair down
  rect(bodyXCenter - 42.5, bodyYCenter - 5, 85, 95);
}

/* Function to create the dress */
function dress() {
  // Set fill based on RGB Global Variables for dress
  fill(dressColorR, dressColorG, dressColorB);
  // Semi-Circle for shoulder part of the dress
  arc(bodyXCenter, bodyYCenter + 80, 80, 80, PI, 0);
  // Trapezoid shape for the remainder of the dress
  beginShape();
  vertex(bodyXCenter - 40, bodyYCenter + 80);
  vertex(bodyXCenter + 40, bodyYCenter + 80);
  vertex(bodyXCenter + 60, bodyYCenter + 220);
  vertex(bodyXCenter - 60, bodyYCenter + 220);
  endShape(CLOSE);
  // Set currColor/fill state to black for shoes (circles)
  currColor = 'black';
  fill(currColor);
  ellipse(bodyXCenter - 15, bodyYCenter + 300, 30, 50);
  ellipse(bodyXCenter + 15, bodyYCenter + 300, 30, 50);
}

/* Function for the face */
function face() {
  // Set currColor/fill to white for eyes
  currColor = 'white';
  fill(currColor);
  // left eye - circle
  ellipse(bodyXCenter - 15, bodyYCenter + 5, 15, 15);
  // right eye -  circle
  ellipse(bodyXCenter + 15, bodyYCenter + 5, 15, 15);
  // Set currColor/fill to black for iris/pupil
  currColor = 'black';
  stroke(currColor);
  fill(currColor);
  // left iris/pupil - circle
  ellipse(bodyXCenter - 15, bodyYCenter + 3, 10, 10);
  // right iris/pupil - circle
  ellipse(bodyXCenter + 15, bodyYCenter + 3, 10, 10);
  // Set the stroke to currColor for nose
  stroke(currColor);
  // Nose - line
  line(bodyXCenter, bodyYCenter + 12, bodyXCenter, bodyYCenter + 15);
  // Cancel out stroke for mouth
  noStroke();
  // Set currColor/fill for mouth
  currColor = '#e91691';
  fill(currColor);
  // Upside down semi-circle for mouth
  ellipse(bodyXCenter, bodyYCenter + 25, 15, 5);
}

/* Function to create sign I'm holding */
function sign() {
  noStroke();
  fill('#999999');
  // to rotate the sign in my hands
  angleMode(DEGREES);
  // Now (0,0) is in respect to a point 
  // determined by the center of the body
  translate(bodyXCenter - 110, bodyYCenter + 50);
  // To rotate slightly to the left
  rotate(-10);
  // Bar that holds the sign (grey)
  rect(-15, 0, 10, 75);
  // To outline the board
  stroke('white');
  // Fill in the sign like the highway signs
  fill('green');
  // Main Sign
  rect(-85, -100, 150, 100);
  noStroke();
  // The text within the sign
  let welcome = "Welcome to Chicago!";
  fill(255);
  textSize(25);
  text(welcome, -60, -90, 100, 100);
}

/* Changes the values of the respective Global
Variables to change how the portrait looks. Called
during mouse presses */
function changeElems() {
  // Switches the colors of the buildingColor
  // variable so each building will recieve a
  // new shade of gray with each click
  let temp = buildingColorOne;
  buildingColorOne = buildingColorThree;
  buildingColorThree = buildingColorTwo;
  buildingColorTwo = temp;
  // Reassigns the RGB values of my dress so
  // I have a different color with each click
  dressColorR = random(17, 255);
  dressColorG = random(110, 212);
  dressColorB = random(227, 238);
}

/* Reassigned the bodyXCenter variable to
x location to change my location */
function moveMe(x) {
  bodyXCenter = x;
}

/* Resets the Global Variables to original
 values to reset portrait */
function resetElems() {
  buildingColorOne = '#000000';
  buildingColorTwo = '#333333';
  buildingColorThree = '#666666';
  dressColorR = 17;
  dressColorG = 212;
  dressColorB = 238;
  bodyXCenter = 375;
}

// Creates a 750 x 575 canvas
function setup() {
  canvas = createCanvas(750, 575);

}

// Calls all previous functions to create portrait
function draw() {
  background('#68c0fc');
  buildings();
  sky();
  hair();
  body();
  face();
  dress();
  sign();

  // Call to interactive functions
  if (mouseIsPressed) {
    changeElems();
    moveMe(mouseX);
  } else if (keyIsPressed) {
    resetElems();
  }
}