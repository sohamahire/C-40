class Game
{
    constructor()
    {

    }
    getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", (data) => {gameState = data.val();});
    }
    update(state)
    {
        database.ref('/').update({gameState: state})
    }
    async start()
    {
        if(gameState === 0)
        {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists())
            {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,300);
        car1.addImage(car1Img);

        car2 = createSprite(400,300);
        car2.addImage(car2Img);

        car3 = createSprite(700,300);
        car3.addImage(car3Img);

        car4 = createSprite(1000,300);
        car4.addImage(car4Img);

        cars = [car1, car2, car3, car4];


        
    }


    play()
    {
        form.hide();
        textSize(30);
        text("GAME START", 120, 120);
        Player.getPLayerInfo();
        player.getCarsAtEnd();
        if(allPlayers !== undefined)
        {
            background(groundImg);
            image(trackImg,0, -displayHeight * 4, displayWidth, displayHeight * 5);
            var index = 0;
            var x = 200;
            var y;
            var leaderBoard;

            var displayPosition = 120;
            for(var plr in allPlayers)
            {
                index ++;
                x = x + 300;
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index - 1].y = y;

                if (index === player.index)
                {
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                    leaderBoard = cars[index - 1].y;
                    stroke(10);
                    fill("red");
                    ellipse(x, y, 60, 60);
                    fill("yellow");
                    textSize(15);
                    text(player.name, x-25 , y+70)
                }
                displayPosition = displayPosition + 20;
                textSize(15);
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, leaderBoard);
                leaderBoard += 30;
            }
        }
        
        if (keyIsDown(UP_ARROW) && player.index !== null)
        {
            player.distance = player.distance + 50;
            player.update();

        }

        if (player.distance >= 5250)
        {
            gameState = 2;
            endform = new endForm();
            player.rank = player.rank + 1;
            Player.updateCarsAtEnd(player.rank);
            console.log(allPlayerRank);
            var playerRank = [player.name + ":" + player.rank]
            allPlayerRank.push(playerRank);

        }


        drawSprites();
    }

    leaderBoard()
    {
        
    }

    end()
    {
        clear();
        endform.display();

    }

}