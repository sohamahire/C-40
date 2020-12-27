class endForm
{
    constructor()
    {
        this.greeting = createElement('H3');
        this.title = createElement("H2");
    }
    display()
    {
        this.title.html("Game Over!!");
        this.title.position(displayWidth/2 - 50, 50);
        var displayRank = 200;

        for(var rank in allPlayerRank)
        {
            text(allPlayerRank[rank][0] + allPlayerRank[rank][1], 200,displayRank)
            displayRank = displayRank + 50;
        }
    }
}