var girl, boy, dog
var girlImage, boyImage, dogImage
var backgroundImg


function preload(){
  girlImage =   loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png","girl5.png","girl6.png","girl7.png");
  boyImage =   loadAnimation("boy1.png","boy3.png","boy4.png",);
  dogImage =   loadAnimation("dog1.png","dog2.png","dog3.png","dog4.png");
  backgroundImg = loadImage("background.jpeg")
  
}

function setup() {
  createCanvas(1000, 1000);
  
  girl = createSprite(50,180,20,50);
  girl.scale=0.5
  boy = createSprite(50,400,20,50);
  boy.scale=0.5
  dog = createSprite(400,180,20,50);
  dog.scale=0.5
  
  girl.addAnimation("running", girlImage);
  boy.addAnimation("running", boyImage);
  dog.addAnimation("running", dogImage);

  
  
  
  
}

function draw() {
  //trex.debug = true;
  background(backgroundImg);
  
  
  
  drawSprites();
}

