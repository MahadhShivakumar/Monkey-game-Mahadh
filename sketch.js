var gameState="play"
var invisibleGround
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600, 200);
  
  monkey = createSprite(50,180,20,50);
  
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  invisibleGround = createSprite(200,190,800,10);
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  //trex.debug = true;
  background("white");
  text("Survival Time: "+ score, 500,50);

  score = score + Math.round(getFrameRate()/60);  
  
  monkey.collide(invisibleGround);
  spawnBanana();
  spawnObstacles();
  drawSprites();
  
  if(keyDown("space") && monkey.y>=140) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY=monkey.velocityY +0.8
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(60,120));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -6;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
    banana.scale = 0.1

  }
  
}

function spawnObstacles() {
  if(frameCount % 160 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstaceImage);
              break;
      case 2: obstacle.addImage(obstaceImage);
              break;
      case 3: obstacle.addImage(obstaceImage);
              break;
      case 4: obstacle.addImage(obstaceImage);
              break;
      case 5: obstacle.addImage(obstaceImage);
              break;
      case 6: obstacle.addImage(obstaceImage);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
    obstacle.scale=0.1;
  }
}
