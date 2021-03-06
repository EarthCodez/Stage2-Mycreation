var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players, player1, player2;

var player1_img , player2_img,bg1,player1_imgs,player2_imgs;
var count=1;

var flag,fs,fs2;
var bg,bgs,bgs2;
function preload(){
  player1_img = loadAnimation("images/Sprites/Blue/B1.png", "images/Sprites/Blue/B2.png", "images/Sprites/Blue/B3.png", "images/Sprites/Blue/B4.png", "images/Sprites/Blue/B5.png");
  player2_img = loadAnimation("images/Sprites/Red/R1.png", "images/Sprites/Red/R2.png", "images/Sprites/Red/R3.png", "images/Sprites/Red/R4.png", "images/Sprites/Red/R5.png");
  bg=loadImage("images/Bg/Morning.jpg")
  bg1=loadImage("images/form_bg.jpg")
  flag=loadImage("images/Sprites/flag.png")
}

function setup(){
  canvas = createCanvas(windowWidth-17.5, windowHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


  bgs=createSprite(10000,500,windowWidth,windowHeight)
  bgs.addImage(bg)
  bgs.scale=1
  
  bgs2=createSprite(10000,800,windowWidth,windowHeight)
  bgs2.addImage(bg)
  bgs2.scale=1

 fs=createSprite(14300,500)
 fs.addImage(flag)
fs.scale=0.5

fs2=createSprite(14300,800)
 fs2.addImage(flag)
fs2.scale=0.5
}


function draw(){
  // background("red")

  // bgs.velocityX=-2;
  //   bgs2.velocityX=-2;

  //   if(bgs.x<1000){
  //     bgs.x=0
  // }
  // if(bgs2.x<1000){
  //     bgs2.x=0
  // }

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
