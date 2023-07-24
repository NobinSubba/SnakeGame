//

let snakeXPos = 100 
let snakeYPos = 100 // Object's position
let vx = 1, vy = 1; // Object's velocity
let foodXPos = 300;
let foodYPos = 300;
let snakeLeft, snakeRight, snakeTop, snakeBottom // The edges of the snake
let foodLeft, foodRight, foodTop, foodBottom // The edges of the food
let score = 0;
let length = 30;
function setup() {
  createCanvas(500, 500);//Creating canvas
}

function draw() {
  background(0,255,0);
  fill (255, 0, 255)
  textSize(20)
  text("Score = " + score, 30, 30);
  
  // Move the snake based on its velocity
  moveObject();
 
  
  // Draw the snake and the food
  fill(0, 0, 255);
  rect(snakeXPos, snakeYPos, length, 30);

  fill (255, 0, 0)
  rect(foodXPos, foodYPos, 20, 20)

  snakeLeft = snakeXPos - 25; //Gave value to snakes edges
  snakeRight = snakeXPos + 25;
  snakeTop = snakeYPos - 25;
  snakeBottom = snakeYPos + 25;

  foodLeft = foodXPos - 25;  //gave value to the food edges
  foodRight = foodXPos + 25;
  foodTop = foodYPos - 25;
  foodBottom = foodYPos + 25;  

  if (snakeLeft > foodRight || snakeRight < foodLeft || snakeTop > foodBottom || snakeBottom < foodTop) { //My condition function 


  }
  else {
    //This else statement would update everytime the snake touch the food
    foodXPos = random(255)
    foodYPos = random(255)
    score++;
    fill(0, 0, 255);
  rect(snakeXPos, snakeYPos, length, 30);
  length += 4;
  }

  if (snakeXPos > 470 || snakeXPos < 0){
    textSize(50)
    text("Game Over", 100, 250)
    noLoop()
  }
  if (snakeYPos > 470 || snakeYPos < 0){
    textSize(50)
    text("Game Over", 100, 250)
    noLoop()
  }

 //
}

function moveObject() {
  snakeXPos += vx;
  snakeYPos += vy;
  
  // Wrap the object around the canvas edges
  if (snakeXPos < 100) {
    x = 100;
  } else if (snakeXPos > 100) { //Checking for condition
    x = 0;
  }
  
  if (snakeYPos < 100) {
    y = 100;
  } else if (snakeYPos > 100) { //Checking for condition 
    y = 0;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    vx = 0;
    vy = -2; // Move up (negative y direction)
  } else if (keyCode === DOWN_ARROW) {
    vx = 0;
    vy = 2; // Move down (positive y direction)
  } else if (keyCode === RIGHT_ARROW) {
    vx = 2; // Move right (positive x direction)
    vy = 0;
  } else if (keyCode === LEFT_ARROW) {
    vx = -2; // Move left (negative x direction)
    vy = 0;
  }
}