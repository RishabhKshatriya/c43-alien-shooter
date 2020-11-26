var bg, spaceShip;
var bg_img, spaceShip_img, missile1_img, alien_img;

function preload () {
  bg_img = loadImage ('background.jpg');
  spaceShip_img = loadImage ('spaceShip.png');
  missile1_img = loadImage ('missile1.png');
  alien_img = loadImage ('alien.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight - 120);

  bg = createSprite(width/2, height/2, width, height);
  bg.addImage(bg_img);
  bg.scale = 1.5;
  bg.velocityY = 5;

  spaceShip = createSprite (width/2, height-70, 40, 40);
  spaceShip.addImage(spaceShip_img);
  spaceShip.scale = 0.5;
}

function draw() {
  background('lightgreen');  

  if(bg.y > height){
    bg.y = height/2;
  }

  spaceShip.x = mouseX;

  if(keyDown('space')){
    spawnMissile();
  }

  spawnAlien();

  drawSprites();
}

function spawnMissile (){
  var missile = createSprite (spaceShip.x, spaceShip.y, 20, 20);
  missile.addImage(missile1_img);
  missile.scale = 0.3;
  missile.velocityY = -10;
}

function spawnAlien () {
  var alien = createSprite (width/2, 100, 30, 30);
  alien.addImage (alien_img);
  alien.scale = 0.3;
}