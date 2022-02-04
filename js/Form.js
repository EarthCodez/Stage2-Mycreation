class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Marte Run!");
    this.title.position(displayWidth/2 - 50, 0);
    image(bg1,-80,-100,windowWidth, windowHeight+60);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-140,20);
    this.reset.style('font-size', '20px');
    this.reset.style('color', 'red');
    this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lime');

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      game.updateCount(0);
      var playerInfo=database.ref("players")
playerInfo.remove()
    });
  }
}
