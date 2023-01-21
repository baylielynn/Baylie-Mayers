function setup() {
  createCanvas(1000, 500);
  colorMode(HSB);
}

function draw() {
  background(2);

  //PACMAN
  push();
  fill(60,100,100);
  arc(240, 240, 400, 400, 11110, PI + QUARTER_PI, CHORD); 
pop();

  //LITTLE RED DUDE

  //body
  push();
  fill(0,85,100)
  square(550, 50, 400, 200, 200, 0, 0);
  pop();

  //LEFT eye

  //white part
  push();
  noStroke();
  ellipse(660,230,120);
  pop();
 //pupil
  push();
  noStroke();
  fill(240,100,100);
  ellipse(660,230,80);
  pop();

  //RIGHT eye

  //white part
  push();
  noStroke();
  ellipse(840,230,120);
  pop();
//pupil
push();
noStroke();
  fill(240,100,100);
  ellipse(840,230,80);
  pop();
}
