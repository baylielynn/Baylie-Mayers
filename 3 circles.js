function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
}

function draw() {
  background(0,0);
  noStroke();

  //LEFT BLUE CIRCLE
  push();
  fill(250,43,100,0.6) //blueish purple
  ellipse(200,400,300);
  pop();

  //TOP RED CIRCLE
  push();
  fill(0,40,100,0.6);
  ellipse(300,230,300);
  pop();

  //RIGHT GREEN CIRCLE
  push();
  fill(100,40,100,0.3);
  ellipse(400,400,300);
  pop();
}
