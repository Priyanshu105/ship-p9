var seaImg,sea;
var shipImg1,ship;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 =  loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  }
  
  function setup(){
    createCanvas(600,600);
    sea = createSprite(200,200,100,100);
    sea.addImage("sea",seaImg);
    sea.velocityX = -5;

    ship  = createSprite(200,250,20,50);
    ship.addAnimation("ship",shipImg1);
    ship.scale = 0.4;

  }
  
  function draw() {

    background("blue");
    if(sea.x<0)
    {
      sea.x = sea.width/2
    }
    drawSprites();
  }
    
    