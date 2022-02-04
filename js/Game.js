class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }


  updateCount(count){
    database.ref('/').update({
      carsAtEnd: count
    });
  }


  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    player1 = createSprite(200,400);
    player1.addAnimation("car1",player1_img);
    player2 = createSprite(300,200);
    player2.addAnimation("car2",player2_img);
    players = [player1, player2];
    player1.debug=true
    player2.debug=true
    
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      
      var display_position = 100;
      
      //index of the array
      var index = 0;

      //y and y position of the cars
      var y = 30 ;
      var x;

      for(var plr in allPlayers){

        index = index + 1 ;

        y = y + 400;

        x = displayWidth*3+250 + allPlayers[plr].distance;
        
        players[index-1].y = y;
        players[index-1].x = x;

        if (index === player.index){
          fill("red");
          ellipse(y,y,60,60);
          players[index - 1].shapeColor = "red";
          camera.position.y = displayWidth/2;
         camera.position.x = players[index-1].x;
        }
       
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(player.distance > displayHeight*15-550){
      gameState = 2;
      player.rank+=1;
      Player.updateCarsAtEnd(player.rank);
      this.showRank();
    }
   
    drawSprites();
  }

  showRank(){
    swal({
       title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
        text: "You reached the finish line successfully",
         imageUrl: "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png", 
          imageSize: "100x100",
           confirmButtonText: "Ok" });
  }
  
  end(){
    console.log(player.rank());
    // if(count===1)
    // alert("GAME ENDED");
    // count++;
  }
}
