  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var chão;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  chão = createSprite(0,0,10,600)
  chão.visible = false;
}


function draw() {
  background(255);
 if(tower.y > 0 ) {
      tower.y = 300;
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left")){
        ghost.x = ghost.x - 3;
        0
      
    }
    if(keyDown("right")){
  
          ghost.x = ghost.x + 3;

      
    }
    

     
      
    chão = createEdgeSprites();
    ghost .collide(chão);
  ghost.velocityY = ghost.velocityY -2;
  
   
      
    
      spawnDoors();

  
     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    
    
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    

    
    
     
ghost.depth = door.depth;
    ghost.depth =1;
    
    

    climbersGroup.lifetime = 800;
    doorsGroup.lifetime = 800;
    
    //adicione cada obstáculo ao grupo obstaclesGroup.add(obstacle); aqui os obstáculos são as portas, o escalador e o bloco invisível
    
     doorsGroup.add();
    
    climbersGroup.add();
    
  }
}

