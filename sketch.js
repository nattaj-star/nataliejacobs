var c1, c2, c3;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  c1 = color(242, 150, 51);
  c2 = color(237, 82, 31);
  canvas.position(0,0);
  
  canvas.style('z-index','-1')
}

function draw() {
  stroke(10, 0, mouseX/5,100);
  ellipse(mouseX, mouseY, 30, 30);
  
}





function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}