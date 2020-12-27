var playerCount;
var database;
var gameState = 0;
var player;
var form;
var game;
var allPlayers;
var car1,car2,car3,car4;
var car1Img, car2Img, car3Img, car4Img;
var trackImg;
var groundImg;
var cars;
var endform;
var allPlayerRank;

function preload()
{
  car1Img = loadImage("car1.png");
  car2Img = loadImage("car2.png");
  car3Img = loadImage("car3.png");
  car4Img = loadImage("car4.png");
  trackImg = loadImage("track.jpg");
  groundImg = loadImage("ground.png");

}

function setup()
{
  createCanvas(displayWidth - 20, displayHeight - 20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  allPlayerRank = [];
  
}

function draw()
{
  if (playerCount === 4)
  {
    game.update(1);
  }

  if (gameState === 1)
  {
    clear();
    game.play();    
  }
  
  if (gameState === 2)
  {
    game.end();
  }
}


