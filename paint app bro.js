var c = "black";

function setup() {
  createCanvas(600, 400);
	background(255);
}

function draw() {
    
  if (mouseIsPressed) {
		stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

	noStroke();
  //first button (red)
  fill("red");
  rect(0, 0, 40, 40);

  //second button (orange)
  fill("orange");
  rect(0, 40, 40, 40);

  //third button (yellow)
  fill("yellow");
  rect(0,80,40,40);

  //fourth button (lime)
  fill("lime");
  rect(0,120,40,40);

  //fifth button (cyan)
  fill("cyan");
  rect(0,160,40,40);

  //sixth button (blue)
  fill("blue");
  rect(0,200,40,40);

  //seventh button (magenta)
  fill("magenta");
  rect(0,240,40,40);

  //eigth button (brown)
  fill("brown");
  rect(0,280,40,40);

  //ninth button (white)
  fill("white");
  rect(0,320,40,40);

  //tenth button (black)
  fill("black");
  rect(0,360,40,40);
}

//this will run whenever the mouse is pressed
function mousePressed() {
  if (mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40) {
    //set the variables to random values
    c = "red";
  }
  if (mouseX > 0 && mouseX < 40 && mouseY > 40 && mouseY < 80) {
    //set the variables to random values
    c = "orange";
 }
 if (mouseX > 0 && mouseX < 40 && mouseY > 80 && mouseY < 120) {
  //set the variables to random values
  c = "yellow";
}
if (mouseX > 0 && mouseX < 40 && mouseY > 120 && mouseY < 160) {
  //set the variables to random values
  c = "lime";
}
if (mouseX > 0 && mouseX < 40 && mouseY > 160 && mouseY < 200) {
  //set the variables to random values
  c = "cyan";
}
if (mouseX > 0 && mouseX < 40 && mouseY > 200 && mouseY < 240) {
  //set the variables to random values
  c = "blue";
}
if (mouseX > 0 && mouseX < 40 && mouseY > 240 && mouseY < 280) {
  //set the variables to random values
  c = "magenta";
}
if (mouseX > 0 && mouseX < 40 && mouseY > 280 && mouseY < 320) {
  //set the variables to random values
  c = "brown";
}
if (mouseX > 0 && mouseX < 40 && mouseY > 320 && mouseY < 360) {
  //set the variables to random values
  c = "white";
}
if (mouseX > 0 && mouseX < 40 && mouseY > 360 && mouseY < 400) {
  //set the variables to random values
  c = "black";
}
}