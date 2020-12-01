

var players = "PLAYERW";

var playerCount=2;

var backgroundImage,pinkCoinImage,blackCoinImage,whiteCoinImage;

var edges;

var arrowImg;

var speed = 0;

var whiteScore = 0;

var blackScore = 0;

var canFire = true;

function preload(){

  backgroundImage = loadImage("carromboard.png");
  
  pinkCoinImage = loadImage("pinkCoin.png");
  
  blackCoinImage = loadImage("blackCoin.png");
  
  whiteCoinImage = loadImage("whiteCoin.png");

  strikerImage = loadImage("striker.png");

  arrowImg= loadAnimation("arrow1.png","arrow2.png","arrow3.png")
}
function setup() {
  createCanvas(500, 500);
  

  edges = createEdgeSprites();
  invisibleGround1 = createSprite(250,90,250,20)
  invisibleGround1.visible = false;
  invisibleGround2 = createSprite(250,410,250,20)
  invisibleGround2.visible = false;

  arrow = createSprite(200,100,10,50)
  arrow.addAnimation("arrow",arrowImg)
  arrow.visible = false;
  arrow.rotateToDirection = true;
  arrow.scale = 0.4

  striker = createSprite(250,410,10,30);
  striker.setCollider('circle',0,0,20)
  striker.addImage(strikerImage)
  striker.scale = 0.3;
  striker.rotation = 280;
  
  pinkCoin = createSprite(250,250,10,30);
  pinkCoin.setCollider('circle',0,0,20)
  pinkCoin.addImage(pinkCoinImage)
  pinkCoin.scale = 0.7;
  
  whiteCoin1 = createSprite(250,279,10,30);
  whiteCoin1.setCollider('circle',0,0,20)
  whiteCoin1.addImage(whiteCoinImage)
  whiteCoin1.scale = 0.7;
  
  whiteCoin2 = createSprite(250,307,10,30);
  whiteCoin2.setCollider('circle',0,0,20)
  whiteCoin2.addImage(whiteCoinImage)
  whiteCoin2.scale = 0.7;
  
  blackCoin1 = createSprite(276,264,10,30);
  blackCoin1.setCollider('circle',0,0,20)
  blackCoin1.addImage(blackCoinImage)
  blackCoin1.scale = 0.7;

  blackCoin2 = createSprite(275,293,10,30);
  blackCoin2.setCollider('circle',0,0,20)
  blackCoin2.addImage(blackCoinImage)
  blackCoin2.scale = 0.7;

  blackCoin3 = createSprite(224,264,10,30);
  blackCoin3.setCollider('circle',0,0,20)
  blackCoin3.addImage(blackCoinImage)
  blackCoin3.scale = 0.7;
  
  blackCoin4 = createSprite(225,293,10,30);
  blackCoin4.setCollider('circle',0,0,20)
  blackCoin4.addImage(blackCoinImage)
  blackCoin4.scale = 0.7;

  blackCoin5 = createSprite(300,253,10,30);
  blackCoin5.setCollider('circle',0,0,20)
  blackCoin5.addImage(blackCoinImage)
  blackCoin5.scale = 0.7;

  blackCoin6 = createSprite(199,253,10,30);
  blackCoin6.setCollider('circle',0,0,20)
  blackCoin6.addImage(blackCoinImage)
  blackCoin6.scale = 0.7;

  whiteCoin3 = createSprite(276,238,10,30); 
   whiteCoin3.setCollider('circle',0,0,20)
  whiteCoin3.addImage(whiteCoinImage)
  whiteCoin3.scale = 0.7;

  whiteCoin4 = createSprite(224,238,10,30);
  whiteCoin4.setCollider('circle',0,0,20)
  whiteCoin4.addImage(whiteCoinImage)
  whiteCoin4.scale = 0.7;

  blackCoin7 = createSprite(275,210,10,30);
  blackCoin7.setCollider('circle',0,0,20)
  blackCoin7.addImage(blackCoinImage)
  blackCoin7.scale = 0.7;

  blackCoin8 = createSprite(225,210,10,30);
  blackCoin8.setCollider('circle',0,0,20)
  blackCoin8.addImage(blackCoinImage)
  blackCoin8.scale = 0.7;

  whiteCoin5 = createSprite(250,197,10,30);
  whiteCoin5.setCollider('circle',0,0,20)
  whiteCoin5.addImage(whiteCoinImage)
  whiteCoin5.scale = 0.7;

  blackCoin9 = createSprite(250,224,10,30);
  blackCoin9.addImage(blackCoinImage)
  blackCoin9.setCollider('circle',0,0,20)
  blackCoin9.scale = 0.7;

  whiteCoin6 = createSprite(202,280,10,30);
  whiteCoin6.setCollider('circle',0,0,20)
  whiteCoin6.addImage(whiteCoinImage)
  whiteCoin6.scale = 0.7;

  whiteCoin7 = createSprite(199,230,10,30);
  whiteCoin7.setCollider('circle',0,0,20)
  whiteCoin7.addImage(whiteCoinImage)
  whiteCoin7.scale = 0.7;

  whiteCoin8 = createSprite(300,230,10,30);
  whiteCoin8.setCollider('circle',0,0,20)
  whiteCoin8.addImage(whiteCoinImage)
  whiteCoin8.scale = 0.7;

  whiteCoin9 = createSprite(300,280,10,30);
  whiteCoin9.setCollider('circle',0,0,20)
  whiteCoin9.addImage(whiteCoinImage)
  whiteCoin9.scale = 0.7;

  pocket1 = createSprite(470,29,10,10)
  pocket1.visible = false;

  pocket2 = createSprite(32,467,10,10)
  pocket2.visible = false;

  pocket3 = createSprite(30,30,10,10)
  pocket3.visible = false;

  pocket4 = createSprite(468,470,10,10)
  pocket4.visible = false;

  
}

function draw() {
  background(backgroundImage);
  fill(255)
text("PLAYER WHITE SCORE:"+whiteScore,50,12)
text("PLAYER BLACK SCORE:"+blackScore,334,493)

  if(playerCount % 2===0){
players= "PLAYERW"
  }else if(playerCount%2 !== 0){
    players="PLAYERB"
  }

  

  if(whiteCoin1.isTouching(pocket1)
   || whiteCoin1.isTouching(pocket2)
    || whiteCoin1.isTouching(pocket3) 
    ||whiteCoin1.isTouching(pocket4)){
    whiteScore = whiteScore +1;
    whiteCoin1.x = -100;
    whiteCoin1.y = -100;

  }

  if(whiteCoin2.isTouching(pocket1)
   || whiteCoin2.isTouching(pocket2)
    || whiteCoin2.isTouching(pocket3) 
    ||whiteCoin2.isTouching(pocket4)){
    whiteScore = whiteScore +1;
    whiteCoin2.x = -100;
    whiteCoin2.y = -100;

  }

  if(whiteCoin3.isTouching(pocket1)
   || whiteCoin3.isTouching(pocket2)
    || whiteCoin3.isTouching(pocket3) 
    ||whiteCoin3.isTouching(pocket4)){
    whiteScore = whiteScore +1;
    whiteCoin3.x = -100;
    whiteCoin3.y = -100;

  }

  if(whiteCoin4.isTouching(pocket1)
   || whiteCoin4.isTouching(pocket2)
    || whiteCoin4.isTouching(pocket3) 
    ||whiteCoin4.isTouching(pocket4)){
    whiteScore = whiteScore +1;
    whiteCoin4.x = -100;
    whiteCoin4.y = -100;

  }

  if(whiteCoin5.isTouching(pocket1)
   || whiteCoin5.isTouching(pocket2)
    || whiteCoin5.isTouching(pocket3) 
    ||whiteCoin5.isTouching(pocket4)){
    whiteScore = whiteScore +1;
    whiteCoin5.x = -100;
    whiteCoin5.y = -100;

  }

  if(whiteCoin6.isTouching(pocket1)
   || whiteCoin6.isTouching(pocket2)
    || whiteCoin6.isTouching(pocket3) 
    ||whiteCoin6.isTouching(pocket4)){
    whiteScore = whiteScore +1;
    whiteCoin6.x = -100;
    whiteCoin6.y = -100;

  }

  if(whiteCoin7.isTouching(pocket1)
   || whiteCoin7.isTouching(pocket2)
    || whiteCoin7.isTouching(pocket3) 
    ||whiteCoin7.isTouching(pocket4)){
    whiteScore = whiteScore +1;
    whiteCoin7.x = -100;
    whiteCoin7.y = -100;

  }

  if(whiteCoin8.isTouching(pocket1)
   || whiteCoin8.isTouching(pocket2)
    || whiteCoin8.isTouching(pocket3) 
    ||whiteCoin8.isTouching(pocket4)){
    whiteScore = whiteScore +1;
    whiteCoin8.x = -100;
    whiteCoin8.y = -100;

  }

  if(whiteCoin9.isTouching(pocket1)
   || whiteCoin9.isTouching(pocket2)
    || whiteCoin9.isTouching(pocket3) 
    ||whiteCoin9.isTouching(pocket4)){
    whiteScore = whiteScore +1;
    whiteCoin9.x = -100;
    whiteCoin9.y = -100;

  }
  
  if(pinkCoin.isTouching(pocket1)
  || pinkCoin.isTouching(pocket2)
   || pinkCoin.isTouching(pocket3) 
   ||pinkCoin.isTouching(pocket4)){
   whiteScore = whiteScore +1;
   pinkCoin.x = -100;
   pinkCoin.y = -100;

 }

 if(blackCoin1.isTouching(pocket1)
  || blackCoin1.isTouching(pocket2)
   || blackCoin1.isTouching(pocket3) 
   || blackCoin1.isTouching(pocket4)){
   blackScore = blackScore +1;
   blackCoin1.x = -100;
   blackCoin1.y = -100;

 }

 if(blackCoin2.isTouching(pocket1)
  || blackCoin2.isTouching(pocket2)
   || blackCoin2.isTouching(pocket3) 
   || blackCoin2.isTouching(pocket4)){
   blackScore = blackScore +1;
   blackCoin2.x = -100;
   blackCoin2.y = -100;

 }

 if(blackCoin3.isTouching(pocket1)
  || blackCoin3.isTouching(pocket2)
   || blackCoin3.isTouching(pocket3) 
   || blackCoin3.isTouching(pocket4)){
   blackScore = blackScore +1;
   blackCoin3.x = -100;
   blackCoin3.y = -100;

 }

 if(blackCoin4.isTouching(pocket1)
  || blackCoin4.isTouching(pocket2)
   || blackCoin4.isTouching(pocket3) 
   || blackCoin4.isTouching(pocket4)){
   blackScore = blackScore +1;
   blackCoin4.x = -100;
   blackCoin4.y = -100;

 }

 if(blackCoin5.isTouching(pocket1)
  || blackCoin5.isTouching(pocket2)
   || blackCoin5.isTouching(pocket3) 
   || blackCoin5.isTouching(pocket4)){
   blackScore = blackScore +1;
   blackCoin5.x = -100;
   blackCoin5.y = -100;

 }

 if(blackCoin6.isTouching(pocket1)
  || blackCoin6.isTouching(pocket2)
   || blackCoin6.isTouching(pocket3) 
   || blackCoin6.isTouching(pocket4)){
   blackScore = blackScore +1;
   blackCoin6.x = -100;
   blackCoin6.y = -100;

 }

 if(blackCoin7.isTouching(pocket1)
  || blackCoin7.isTouching(pocket2)
   || blackCoin7.isTouching(pocket3) 
   || blackCoin7.isTouching(pocket4)){
   blackScore = blackScore +1;
   blackCoin7.x = -100;
   blackCoin7.y = -100;

 }

 if(blackCoin8.isTouching(pocket1)
  || blackCoin8.isTouching(pocket2)
   || blackCoin8.isTouching(pocket3) 
   || blackCoin8.isTouching(pocket4)){
   blackScore = blackScore +1;
   blackCoin8.x = -100;
   blackCoin8.y = -100;

 }

 if(blackCoin9.isTouching(pocket1)
  || blackCoin9.isTouching(pocket2)
   || blackCoin9.isTouching(pocket3) 
   || blackCoin9.isTouching(pocket4)){
   blackScore = blackScore +1;
   blackCoin1.x = -100;
   blackCoin1.y = -100;

 }
if( whiteCoin1.x === -100 &&  whiteCoin2.x === -100 &&  whiteCoin3.x === -100 && whiteCoin4.x === -100 && whiteCoin5.x === -100 &&whiteCoin6.x === -100 &&whiteCoin7.x === -100 &&whiteCoin8.x === -100 && whiteCoin9.x === -100 ){
text("GAME OVER PLAYER WHITE HAS WON!!!")

}

if( blackCoin1.x === -100 &&  blackCoin2.x === -100 &&  blackCoin3.x === -100 && blackCoin4.x === -100 && blackCoin5.x === -100 && blackCoin6.x === -100 && blackCoin7.x === -100 && blackCoin8.x === -100 && blackCoin9.x === -100 ){
  text("GAME OVER PLAYER BLACK HAS WON!!!")
  
  }
text(mouseX+","+mouseY,mouseX,mouseY); 

  striker.bounceOff(edges);
  striker.bounceOff(edges);
  whiteCoin1.bounceOff(edges);
  whiteCoin2.bounceOff(edges);
  whiteCoin3.bounceOff(edges);
  whiteCoin4.bounceOff(edges);
  whiteCoin5.bounceOff(edges);
  whiteCoin5.bounceOff(edges);
  whiteCoin6.bounceOff(edges);
  whiteCoin7.bounceOff(edges);
  whiteCoin8.bounceOff(edges);
  whiteCoin9.bounceOff(edges);
  pinkCoin.bounceOff(edges);

  blackCoin1.bounceOff(edges);
  blackCoin2.bounceOff(edges);
  blackCoin3.bounceOff(edges);
  blackCoin4.bounceOff(edges);
  blackCoin5.bounceOff(edges);
  blackCoin6.bounceOff(edges);
  blackCoin7.bounceOff(edges);
  blackCoin8.bounceOff(edges);
  blackCoin9.bounceOff(edges);

  whiteCoin1.bounce(whiteCoin2);
  whiteCoin1.bounce(whiteCoin3);
  whiteCoin1.bounce(whiteCoin4);
  whiteCoin1.bounce(whiteCoin5);
  whiteCoin1.bounce(whiteCoin6);
  whiteCoin1.bounce(whiteCoin7);
  whiteCoin1.bounce(whiteCoin8);
  whiteCoin1.bounce(whiteCoin9);

  whiteCoin2.bounce(whiteCoin1);
  whiteCoin2.bounce(whiteCoin3);
  whiteCoin2.bounce(whiteCoin4);
  whiteCoin2.bounce(whiteCoin5);
  whiteCoin2.bounce(whiteCoin6);
  whiteCoin2.bounce(whiteCoin7);
  whiteCoin2.bounce(whiteCoin9);

  whiteCoin3.bounce(whiteCoin4);
  whiteCoin3.bounce(whiteCoin5);
  whiteCoin3.bounce(whiteCoin6);
  whiteCoin3.bounce(whiteCoin7);
  whiteCoin3.bounce(whiteCoin8);
  whiteCoin3.bounce(whiteCoin9);
  whiteCoin3.bounce(whiteCoin1);
  whiteCoin3.bounce(whiteCoin2);

  whiteCoin4.bounce(whiteCoin5);
  whiteCoin4.bounce(whiteCoin6);
  whiteCoin4.bounce(whiteCoin7);
  whiteCoin4.bounce(whiteCoin8);
  whiteCoin4.bounce(whiteCoin9);
  whiteCoin4.bounce(whiteCoin1);
  whiteCoin4.bounce(whiteCoin2);
  whiteCoin4.bounce(whiteCoin3);

  whiteCoin5.bounce(whiteCoin6);
  whiteCoin5.bounce(whiteCoin7);
  whiteCoin5.bounce(whiteCoin8);
  whiteCoin5.bounce(whiteCoin9);
  whiteCoin5.bounce(whiteCoin1);
  whiteCoin5.bounce(whiteCoin2);
  whiteCoin5.bounce(whiteCoin3);
  whiteCoin5.bounce(whiteCoin4);

  whiteCoin6.bounce(whiteCoin7);
  whiteCoin6.bounce(whiteCoin8);
  whiteCoin6.bounce(whiteCoin9);
  whiteCoin6.bounce(whiteCoin1);
  whiteCoin6.bounce(whiteCoin2);
  whiteCoin6.bounce(whiteCoin3);
  whiteCoin6.bounce(whiteCoin4);
  whiteCoin6.bounce(whiteCoin5);

  whiteCoin7.bounce(whiteCoin8);
  whiteCoin7.bounce(whiteCoin9);
  whiteCoin7.bounce(whiteCoin1);
  whiteCoin7.bounce(whiteCoin2);
  whiteCoin7.bounce(whiteCoin3);
  whiteCoin7.bounce(whiteCoin4);
  whiteCoin7.bounce(whiteCoin5);
  whiteCoin7.bounce(whiteCoin6);

  whiteCoin8.bounce(whiteCoin9);
  whiteCoin8.bounce(whiteCoin1);
  whiteCoin8.bounce(whiteCoin2);
  whiteCoin8.bounce(whiteCoin3);
  whiteCoin8.bounce(whiteCoin4);
  whiteCoin8.bounce(whiteCoin5);
  whiteCoin8.bounce(whiteCoin6);
  whiteCoin8.bounce(whiteCoin7);

  whiteCoin9.bounce(whiteCoin1);
  whiteCoin9.bounce(whiteCoin2);
  whiteCoin9.bounce(whiteCoin3);
  whiteCoin9.bounce(whiteCoin4);
  whiteCoin9.bounce(whiteCoin5);
  whiteCoin9.bounce(whiteCoin6);
  whiteCoin9.bounce(whiteCoin7);
  whiteCoin9.bounce(whiteCoin8);

  blackCoin1.bounce(whiteCoin1);
  blackCoin1.bounce(whiteCoin2);
  blackCoin1.bounce(whiteCoin3);
  blackCoin1.bounce(whiteCoin4);
  blackCoin1.bounce(whiteCoin5);
  blackCoin1.bounce(whiteCoin6);
  blackCoin1.bounce(whiteCoin7);
  blackCoin1.bounce(whiteCoin8);
  blackCoin1.bounce(whiteCoin9);

  blackCoin2.bounce(whiteCoin1);
  blackCoin2.bounce(whiteCoin2);
  blackCoin2.bounce(whiteCoin3);
  blackCoin2.bounce(whiteCoin4);
  blackCoin2.bounce(whiteCoin5);
  blackCoin2.bounce(whiteCoin6);
  blackCoin2.bounce(whiteCoin7);
  blackCoin2.bounce(whiteCoin8);
  blackCoin2.bounce(whiteCoin9);

  blackCoin3.bounce(whiteCoin1);
  blackCoin3.bounce(whiteCoin2);
  blackCoin3.bounce(whiteCoin3);
  blackCoin3.bounce(whiteCoin4);
  blackCoin3.bounce(whiteCoin5);
  blackCoin3.bounce(whiteCoin6);
  blackCoin3.bounce(whiteCoin7);
  blackCoin3.bounce(whiteCoin8);
  blackCoin3.bounce(whiteCoin9);

  blackCoin4.bounce(whiteCoin1);
  blackCoin4.bounce(whiteCoin2);
  blackCoin4.bounce(whiteCoin3);
  blackCoin4.bounce(whiteCoin4);
  blackCoin4.bounce(whiteCoin5);
  blackCoin4.bounce(whiteCoin6);
  blackCoin4.bounce(whiteCoin7);
  blackCoin4.bounce(whiteCoin8);
  blackCoin4.bounce(whiteCoin9);

  blackCoin5.bounce(whiteCoin1);
  blackCoin5.bounce(whiteCoin2);
  blackCoin5.bounce(whiteCoin3);
  blackCoin5.bounce(whiteCoin4);
  blackCoin5.bounce(whiteCoin5);
  blackCoin5.bounce(whiteCoin6);
  blackCoin5.bounce(whiteCoin7);
  blackCoin5.bounce(whiteCoin8);
  blackCoin5.bounce(whiteCoin9);
  
  blackCoin6.bounce(whiteCoin1);
  blackCoin6.bounce(whiteCoin2);
  blackCoin6.bounce(whiteCoin3);
  blackCoin6.bounce(whiteCoin4);
  blackCoin6.bounce(whiteCoin5);
  blackCoin6.bounce(whiteCoin6);
  blackCoin6.bounce(whiteCoin7);
  blackCoin6.bounce(whiteCoin8);
  blackCoin6.bounce(whiteCoin9);
  
  blackCoin7.bounce(whiteCoin1);
  blackCoin7.bounce(whiteCoin2);
  blackCoin7.bounce(whiteCoin3);
  blackCoin7.bounce(whiteCoin4);
  blackCoin7.bounce(whiteCoin5);
  blackCoin7.bounce(whiteCoin6);
  blackCoin7.bounce(whiteCoin7);
  blackCoin7.bounce(whiteCoin8);
  blackCoin7.bounce(whiteCoin9);

  blackCoin8.bounce(whiteCoin1);
  blackCoin8.bounce(whiteCoin2);
  blackCoin8.bounce(whiteCoin3);
  blackCoin8.bounce(whiteCoin4);
  blackCoin8.bounce(whiteCoin5);
  blackCoin8.bounce(whiteCoin6);
  blackCoin8.bounce(whiteCoin7);
  blackCoin8.bounce(whiteCoin8);
  blackCoin8.bounce(whiteCoin9);

  blackCoin9.bounce(whiteCoin1);
  blackCoin9.bounce(whiteCoin2);
  blackCoin9.bounce(whiteCoin3);
  blackCoin9.bounce(whiteCoin4);
  blackCoin9.bounce(whiteCoin4);
  blackCoin9.bounce(whiteCoin5);
  blackCoin9.bounce(whiteCoin6);
  blackCoin9.bounce(whiteCoin7);
  blackCoin9.bounce(whiteCoin8);
  blackCoin9.bounce(whiteCoin9);
  
  

  whiteCoin1.bounce(blackCoin1);
  whiteCoin1.bounce(blackCoin2);
  whiteCoin1.bounce(blackCoin3);
  whiteCoin1.bounce(blackCoin4);
  whiteCoin1.bounce(blackCoin5);
  whiteCoin1.bounce(blackCoin6);
  whiteCoin1.bounce(blackCoin7);
  whiteCoin1.bounce(blackCoin8);
  whiteCoin1.bounce(blackCoin9);

  whiteCoin2.bounce(blackCoin1);
  whiteCoin2.bounce(blackCoin2);
  whiteCoin2.bounce(blackCoin3);
  whiteCoin2.bounce(blackCoin4);
  whiteCoin2.bounce(blackCoin5);
  whiteCoin2.bounce(blackCoin6);
  whiteCoin2.bounce(blackCoin7);
  whiteCoin2.bounce(blackCoin8);
  whiteCoin2.bounce(blackCoin9);

  whiteCoin3.bounce(blackCoin1);
  whiteCoin3.bounce(blackCoin2);
  whiteCoin3.bounce(blackCoin3);
  whiteCoin3.bounce(blackCoin4);
  whiteCoin3.bounce(blackCoin5);
  whiteCoin3.bounce(blackCoin6);
  whiteCoin3.bounce(blackCoin7);
  whiteCoin3.bounce(blackCoin8);
  whiteCoin3.bounce(blackCoin9);

  whiteCoin4.bounce(blackCoin1);
  whiteCoin4.bounce(blackCoin2);
  whiteCoin4.bounce(blackCoin3);
  whiteCoin4.bounce(blackCoin4);
  whiteCoin4.bounce(blackCoin5);
  whiteCoin4.bounce(blackCoin6);
  whiteCoin4.bounce(blackCoin7);
  whiteCoin4.bounce(blackCoin8);
  whiteCoin4.bounce(blackCoin9);

  whiteCoin5.bounce(blackCoin1);
  whiteCoin5.bounce(blackCoin2);
  whiteCoin5.bounce(blackCoin3);
  whiteCoin5.bounce(blackCoin4);
  whiteCoin5.bounce(blackCoin5);
  whiteCoin5.bounce(blackCoin6);
  whiteCoin5.bounce(blackCoin7);
  whiteCoin5.bounce(blackCoin8);
  whiteCoin5.bounce(blackCoin9);
  
  whiteCoin6.bounce(blackCoin1);
  whiteCoin6.bounce(blackCoin2);
  whiteCoin6.bounce(blackCoin3);
  whiteCoin6.bounce(blackCoin4);
  whiteCoin6.bounce(blackCoin5);
  whiteCoin6.bounce(blackCoin6);
  whiteCoin6.bounce(blackCoin7);
  whiteCoin6.bounce(blackCoin8);
  whiteCoin6.bounce(blackCoin9);
  
  whiteCoin7.bounce(blackCoin1);
  whiteCoin7.bounce(blackCoin2);
  whiteCoin7.bounce(blackCoin3);
  whiteCoin7.bounce(blackCoin4);
  whiteCoin7.bounce(blackCoin5);
  whiteCoin7.bounce(blackCoin6);
  whiteCoin7.bounce(blackCoin7);
  whiteCoin7.bounce(blackCoin8);
  whiteCoin7.bounce(blackCoin9);

  whiteCoin8.bounce(blackCoin1);
  whiteCoin8.bounce(blackCoin2);
  whiteCoin8.bounce(blackCoin3);
  whiteCoin8.bounce(blackCoin4);
  whiteCoin8.bounce(blackCoin5);
  whiteCoin8.bounce(blackCoin6);
  whiteCoin8.bounce(blackCoin7);
  whiteCoin8.bounce(blackCoin8);
  whiteCoin8.bounce(blackCoin9);
  
  whiteCoin9.bounce(blackCoin1);
  whiteCoin9.bounce(blackCoin2);
  whiteCoin9.bounce(blackCoin3);
  whiteCoin9.bounce(blackCoin4);
  whiteCoin9.bounce(blackCoin5);
  whiteCoin9.bounce(blackCoin6);
  whiteCoin9.bounce(blackCoin7);
  whiteCoin9.bounce(blackCoin8);
  whiteCoin9.bounce(blackCoin9);

  blackCoin1.bounce(blackCoin2);
  blackCoin1.bounce(blackCoin3);
  blackCoin1.bounce(blackCoin4);
  blackCoin1.bounce(blackCoin5);
  blackCoin1.bounce(blackCoin6);
  blackCoin1.bounce(blackCoin7);
  blackCoin1.bounce(blackCoin8);
  blackCoin1.bounce(blackCoin9);

  blackCoin2.bounce(blackCoin3);
  blackCoin2.bounce(blackCoin4);
  blackCoin2.bounce(blackCoin5);
  blackCoin2.bounce(blackCoin6);
  blackCoin2.bounce(blackCoin7);
  blackCoin2.bounce(blackCoin8);
  blackCoin2.bounce(blackCoin9);
  blackCoin2.bounce(blackCoin1);

  blackCoin3.bounce(blackCoin4);
  blackCoin3.bounce(blackCoin5);
  blackCoin3.bounce(blackCoin6);
  blackCoin3.bounce(blackCoin7);
  blackCoin3.bounce(blackCoin8);
  blackCoin3.bounce(blackCoin9);
  blackCoin3.bounce(blackCoin1);
  blackCoin3.bounce(blackCoin2);

  blackCoin4.bounce(blackCoin5);
  blackCoin4.bounce(blackCoin6);
  blackCoin4.bounce(blackCoin7);
  blackCoin4.bounce(blackCoin8);
  blackCoin4.bounce(blackCoin9);
  blackCoin4.bounce(blackCoin1);
  blackCoin4.bounce(blackCoin2);
  blackCoin4.bounce(blackCoin3);

  blackCoin5.bounce(blackCoin6);
  blackCoin5.bounce(blackCoin7);
  blackCoin5.bounce(blackCoin8);
  blackCoin5.bounce(blackCoin9);
  blackCoin5.bounce(blackCoin1);
  blackCoin5.bounce(blackCoin2);
  blackCoin5.bounce(blackCoin3);
  blackCoin5.bounce(blackCoin4);

  blackCoin6.bounce(blackCoin7);
  blackCoin6.bounce(blackCoin8);
  blackCoin6.bounce(blackCoin9);
  blackCoin6.bounce(blackCoin1);
  blackCoin6.bounce(blackCoin2);
  blackCoin6.bounce(blackCoin3);
  blackCoin6.bounce(blackCoin4);
  blackCoin6.bounce(blackCoin5);

  blackCoin7.bounce(blackCoin8);
  blackCoin7.bounce(blackCoin9);
  blackCoin7.bounce(blackCoin1);
  blackCoin7.bounce(blackCoin2);
  blackCoin7.bounce(blackCoin3);
  blackCoin7.bounce(blackCoin4);
  blackCoin7.bounce(blackCoin5);
  blackCoin7.bounce(blackCoin6);

  blackCoin8.bounce(blackCoin9);
  blackCoin8.bounce(blackCoin1);
  blackCoin8.bounce(blackCoin2);
  blackCoin8.bounce(blackCoin3);
  blackCoin8.bounce(blackCoin4);
  blackCoin8.bounce(blackCoin5);
  blackCoin8.bounce(blackCoin6);
  blackCoin8.bounce(blackCoin7);

  blackCoin9.bounce(blackCoin1);
  blackCoin9.bounce(blackCoin2);
  blackCoin9.bounce(blackCoin3);
  blackCoin9.bounce(blackCoin4);
  blackCoin9.bounce(blackCoin5);
  blackCoin9.bounce(blackCoin6);
  blackCoin9.bounce(blackCoin7);
  blackCoin9.bounce(blackCoin8);

  striker.bounce(blackCoin1);
  striker.bounce(blackCoin2);
  striker.bounce(blackCoin3);
  striker.bounce(blackCoin4);
  striker.bounce(blackCoin5);
  striker.bounce(blackCoin6);
  striker.bounce(blackCoin7);
  striker.bounce(blackCoin8);
  striker.bounce(blackCoin9);
  striker.bounce(whiteCoin1);
  striker.bounce(whiteCoin2);
  striker.bounce(whiteCoin3);
  striker.bounce(whiteCoin4);
  striker.bounce(whiteCoin5);
  striker.bounce(whiteCoin6);
  striker.bounce(whiteCoin7);
  striker.bounce(whiteCoin8);
  striker.bounce(whiteCoin9);
  striker.bounce(pinkCoin);
  pinkCoin.bounce(whiteCoin1)
  pinkCoin.bounce(whiteCoin2)
  pinkCoin.bounce(whiteCoin3)
  pinkCoin.bounce(whiteCoin4)
  pinkCoin.bounce(whiteCoin5)
  pinkCoin.bounce(whiteCoin6)
  pinkCoin.bounce(whiteCoin7)
  pinkCoin.bounce(whiteCoin8)
  pinkCoin.bounce(whiteCoin9)
  pinkCoin.bounce(blackCoin1)
  pinkCoin.bounce(blackCoin2)
  pinkCoin.bounce(blackCoin3)
  pinkCoin.bounce(blackCoin4)
  pinkCoin.bounce(blackCoin5)
  pinkCoin.bounce(blackCoin6)
  pinkCoin.bounce(blackCoin7)
  pinkCoin.bounce(blackCoin8)
  pinkCoin.bounce(blackCoin9)






  
  if(keyWentUp("UP_ARROW")){
  striker.addSpeed(speed,striker.rotation)
    canFire = false;
  }
  if(keyDown("LEFT_ARROW")&&canFire===true){
    striker.rotation = striker.rotation-5;
  }
  
  if(keyDown("RIGHT_ARROW")&&canFire===true){
    striker.rotation = striker.rotation+5;
  }

  if(keyDown("UP_ARROW")&&canFire===true){
    arrow.visible = true;
   speed = speed +0.5;
   if(speed > 10 && speed < 14.9){
     arrow.setFrame(1)
     }else if(speed >15 && speed < 19.9){
      arrow.setFrame(2)
     }else if( speed >=20){
       speed=20;
      arrow.setFrame(2)
     }else{
       arrow.setFrame(0)
     }

     }else{
       arrow.visible=false;
       speed=0;
     }
   
  arrow.x = striker.x
  arrow.y = striker.y-5
  arrow.rotation = striker.rotation;
  console.log(players)
  //--------------------------stopping striker-----------------------------------//
  striker.setSpeedAndDirection(striker.getSpeed()*0.97);
  //------------------stopping white coins---------------------------------------------------//
  whiteCoin1.setSpeedAndDirection(whiteCoin1.getSpeed()*0.97);
  whiteCoin2.setSpeedAndDirection(whiteCoin2.getSpeed()*0.97);
  whiteCoin3.setSpeedAndDirection(whiteCoin3.getSpeed()*0.97);
  whiteCoin4.setSpeedAndDirection(whiteCoin4.getSpeed()*0.97);
  whiteCoin5.setSpeedAndDirection(whiteCoin5.getSpeed()*0.97);
  whiteCoin6.setSpeedAndDirection(whiteCoin6.getSpeed()*0.97);
  whiteCoin7.setSpeedAndDirection(whiteCoin7.getSpeed()*0.97);
  whiteCoin8.setSpeedAndDirection(whiteCoin8.getSpeed()*0.97);
  whiteCoin9.setSpeedAndDirection(whiteCoin9.getSpeed()*0.97);
//------------------stopping black coins-----------------------------------//
  blackCoin1.setSpeedAndDirection(blackCoin1.getSpeed()*0.97);
  blackCoin2.setSpeedAndDirection(blackCoin2.getSpeed()*0.97);
  blackCoin3.setSpeedAndDirection(blackCoin3.getSpeed()*0.97);
  blackCoin4.setSpeedAndDirection(blackCoin4.getSpeed()*0.97);
  blackCoin5.setSpeedAndDirection(blackCoin5.getSpeed()*0.97);
  blackCoin6.setSpeedAndDirection(blackCoin6.getSpeed()*0.97);
  blackCoin7.setSpeedAndDirection(blackCoin7.getSpeed()*0.97);
  blackCoin8.setSpeedAndDirection(blackCoin8.getSpeed()*0.97);
  blackCoin9.setSpeedAndDirection(blackCoin9.getSpeed()*0.97);
  //------------------stopping pink coin-----------------------------------//
  pinkCoin.setSpeedAndDirection(pinkCoin.getSpeed()*0.97);
  
  if(striker.getSpeed()< 0.2){
if(mousePressedOver(invisibleGround2) && players ==="PLAYERW"){
  striker.x=mouseX;
  striker.y=mouseY;

  playerCount = playerCount+1;
  text("click here",100,100)

}
else if(mousePressedOver(invisibleGround1)&&players=="PLAYERB"){
  striker.x = mouseX;
  striker.y = mouseY;

  playerCount += 1;
}
   canFire = true; 
}
  drawSprites();
}