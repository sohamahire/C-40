class Form
{
    constructor()
    {
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement('H3');
        this.title = createElement("H2");
        this.reset = createButton("reset");
    }

    display()
    {
        this.title.html("car racing game");
        this.title.position(displayWidth/2 - 50, 50);

       
        this.input.position(displayWidth/2 - 30, displayHeight/2 - 80);
        this.button.position(displayWidth/2,displayHeight/2);

        this.reset.position(displayWidth - 100 , 20);

        this.reset.mousePressed(() =>
        {
            player.updateCount(0);
            game.update(0);
            Player.deletePlayers();
            Player.updateCarsAtEnd(0);
        });

        this.button.mousePressed(() =>
        {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount +1;
            player.index = playerCount;
            
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2,displayHeight/2);
        });
    }


    hide()
    {
        this.title.hide();
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}