var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  climbersGroup = new Group();
  doorsGroup = new Group();
  invisibleBlockGroup = new Group();

  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale = 0.3
  
  
}

function draw() {
  background(200);

  if(gameState === "play"){



  
  if(tower.y > 400){
      tower.y = 300
    }
    Obstaculos();

    drawSprites();

    if(keyDown("SPACE")){

      ghost.velocityY = -10;
    }
    
    if(keyDown("LEFT")){

      ghost.x -= 3;
    }

    if(keyDown("RIGHT")){

      ghost.x += 3;
    }

      if(climbersGroup.isTouching(ghost)){

        ghost.velocityY = 0;

      }
    ghost.velocityY += 1;

if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600 )  {

gameState = "Game Over";

  }
  }
if(gameState === "Game Over"){

  text("Game Over",200,200);

}

}

function Obstaculos() {

if(frameCount % 240 === 0){

  door = createSprite(200,-50);
  door.addImage(doorImg);
  door.velocityY = 1;
  door.x = Math.round(random(120,400));
  door.lifetime = 800;
  doorsGroup.add(door);

    climber = createSprite(200,10);
    climber.addImage(climberImg);
    climber.velocityY = 1;
    climber.x = door.x;
    climber.lifetime = 800;
    climbersGroup.add(climber);

    ghost.depth = door.depth;
    ghost.depth += 1;
    invisibleBlock = createSprite(200,20,climber.width,2);
    invisibleBlock.x = door.x;
    invisibleBlock.velocityY = 1;
    invisibleBlock.visible = false;
    invisibleBlock.lifetime = 800;
    invisibleBlockGroup.add(invisibleBlock);
  
  }


  
}
