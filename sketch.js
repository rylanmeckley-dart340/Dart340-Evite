function preload() {
  img1 = loadImage("Images/Phillies.png");
  img2 = loadImage("Images/Braves.jpeg");
  img3 = loadImage("Images/baseball.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 0, 0); 
  
image(img1,-100, 10, 400, 200);    
image(img2,150, 200, 250, 200);
image(img3, 30, 240, 120, 120); 
} 
