var download, background2, canvas, Harry, backgroundImg;

var obstacle1, godzilla, magma, soldier, robot;

var boy, girl;

var birdFly, bird;

function preload(){
 obstacle1 = loadImage("obstacle1.png");
  robot = loadImage("robot.png");
 godzilla = loadImage("godzilla.png");
  download = loadImage("download.png");
  soldier = loadImage("soldier.png");
 magma = loadImage("magma.png");
 background2 = loadImage("background2.jpg");
 birdFly = loadAnimation("A.png","B.png", "C.png", "D.png", "E.png", "F.png", "G.png", "H.png", "I.png");
}

function setup(){
  canvas = createCanvas(1000, 700);
  
  backgroundImg = createSprite(500, 350);
  backgroundImg.addImage("background", background2);
  backgroundImg.scale = 1.2;
  backgroundImg.velocityX = -2;
  //backgroundImg.x = backgroundImg.width/8;

  Harry = createSprite(200, 200, 100, 150);
  Harry.addImage(download);
}


function draw(){
  background(220);
  backgroundImg.velocityX = -2;
  if (backgroundImg < 200){
    backgroundImg.x = 1000;
  }

  if (keyDown("UP_ARROW")){
    Harry.y = Harry.y -3;
  }
  if (keyDown("DOWN_ARROW")){
    Harry.y = Harry.y +3;
  }

  //Spawn The Bird
  spawnObstacles();
  spawnBirds();
  drawSprites();

}

function spawnBirds(){
   if (frameCount%80 === 0){
     bird = createSprite(-50, 100, 80, 50);
     bird.addAnimation("running", birdFly);
     bird.y = Math.round(random(10, 100));
     bird.velocityX = 5;
     bird.scale = 0.5;
     bird.lifetime = 220;
   }
}

function spawnObstacles(){
  if (frameCount%80 === 0){
    var obstacle = createSprite(1050, 100, 100, 100);
    obstacle.velocityX = -6;
    obstacle.y = Math.round(random(100, 600));
    var rand = Math.round(random(1 , 5));
    switch(rand){
      case 1:obstacle.addImage(godzilla);
        break;
      case 2:obstacle.addImage(soldier);
        break;
      case 3:obstacle.addImage(robot);
        break;
      case 4:obstacle.addImage(magma);
        break;
      case 5:obstacle.addImage(obstacle1);
        break;
      default: break;
    }
    obstacle.lifetime = 200;

  }
}
