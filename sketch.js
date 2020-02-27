let walkedA = []
let walkedB = []
let r = 102
let g = 0;
let b = 102;

function setup() {
  createCanvas(x, y);
  frameRate(30);

}

function draw() {
  strokeWeight(15);
  stroke(204, 0, 0);
  background(220);
  pa += random(-1, 1) * 15;
  pb += random(-1, 1) * 15;
  walkedA.push(pa);
  walkedB.push(pb);
  point(pa, pb);
  if (pa > x | pb > y | pa < 0 | pb < 0) {
    pa = x / 2;
    pb = y / 2;
    walkedA = [];
    walkedB = [];
  }
  strokeWeight(5);
  stroke(r, g, b);
  for (let i = 0; i < walkedA.length; i++) {
    point(walkedA[i], walkedB[i])
  }
}
