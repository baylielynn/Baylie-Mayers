function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
}

function draw() {
  background(240,100,50);

  //WHITE BG CIRCLE
  push();
  noStroke();
  fill(00,0,100);
  ellipse(400,400,400);
  pop();

  //GREEN INNER CIRCLE
  push();
  noStroke();
  fill(120,100,60);
  ellipse(400,400,378);
  pop();

  //STAR
  fill(237, 34, 93);
  beginShape();
  vertex(0, 35);
  vertex(35, 0);
  vertex(0, -35);
  vertex(-35, 0);
  endShape();
   }

  
