var apple, garden, leaf, leaf2, rabbit;
var appleImg, gardenImg, leafImg, leaf2Img, rabbitImg; 
 
function preload(){
  appleImg = loadImage("apple.png");
  gardenImg = loadImage("garden.png");
  leafImg = loadImage("leaf.png");
  leaf2Img = loadImage("orangeLeaf.png");
 
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
 
  // creating canvas
  createCanvas(400,400);
 
  // creating garden
  garden = createSprite(200,200);
  garden.addImage(gardenImg);

  
 // creating rabbit
 rabbit = createSprite(200,380,20,30)
 rabbit.addImage(rabbitImg);
 rabbit.scale = 0.09;
 
}

function draw(){
  background(0);
 
  // controlling the x position of the rabbit with the mouse
 rabbit.x = World.mouseX;
 edges= createEdgeSprites();
  rabbit.collide(edges);
 
  drawSprites();
  
  var select_sprites = Math.round(random(1,3));
 //adding delay
  if (frameCount % 50 == 0) {
       if (select_sprites == 1) {
         createapple();
       } else if (select_sprites == 2) {
         createleaf();
       }else {
         createleaf2();
       }
     }
}

var select_sprites = Math.round(random(1,3));

// creating functions to make different sprites
function createleaf(){
  leaf = createSprite(random(50, 350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.07;
  leaf.velocityY = 1
}

function createleaf2(){
  leaf2 = createSprite(random(50, 350),40,10,10);
  leaf2.addImage(leaf2Img);
  leaf2.scale = 0.07;
  leaf2.velocityY = 1
}



function createapple(){
  apple = createSprite(random(50, 350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.06;
  apple.velocityY = 1
}