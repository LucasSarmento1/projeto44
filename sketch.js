var pato, patoimg, princesa ;
var fundo1;
var fundo2;
var solo;
var bala, balaimg;
var inimigo,inimigoimg,inimigog;

 function preload(){
    patoimg=loadImage("images/heroi.png");
    fundo1=loadImage("images/fundo1.jpg");
    fundo2=loadImage("images/fundo2.jpg");
    balaimg=loadImage("images/fogo.png");
    inimigoimg=loadImage("images/bomba.png");

    


 }

function setup(){
    createCanvas(windowWidth-50,windowHeight-50);

    pato=createSprite(100,height-140,60,60);
    pato.addImage(patoimg);

    solo=createSprite(pato.x,height,200,10);
    solo.visible=false;
   
    //gerar inimigos
    inimigog= new Group()
}

function draw(){
    background(fundo2);
    solo.x=pato.x

    console.log(pato.y);

    if(keyDown("RIGHT_ARROW")){
    pato.x=pato.x+9
    }

    
    if(keyDown("LEFT_ARROW")){
        pato.x=pato.x-9
    }

    if(keyDown("UP_ARROW") && pato.y>height-150){
        pato.velocityY=-18

    }

    if(keyDown("space")){
        tiro();
    }
    pato.velocityY=pato.velocityY+0.5;

    pato.collide(solo);
   
    gerarinimigos();

    drawSprites();
}
function gerarinimigos(){
    if(frameCount%60===0){
      inimigo=createSprite(width,random(150,650),30,30);
      inimigo.addImage(inimigoimg);
      inimigo.scale=0.3;
      inimigo.velocityX=-9;
      inimigog.add(inimigo);
      
    }
  }

function tiro(){
     bala=createSprite(pato.x,pato.y,50,10);
     bala.addImage(balaimg);
     bala.velocityX=18;
     bala.scale=0.4;
}