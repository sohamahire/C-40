class Player
{
    constructor()
    {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;
    }

    getCount()
    {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data) => {playerCount = data.val();});

    }

    updateCount(count)
    {
        database.ref('/').update(
        {
            playerCount: count
        })
    }
    
    update()
    {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set(
        {
            name : this.name,
            distance: this.distance
        });
    }

    static deletePlayers()
    {

        for (let index = 1; index <= 4; index++) 
        {
            var playerNode = "players/player" + index;
            database.ref(playerNode).set(
            {
                name : '',
                distance : 0
            });
            
        }
    }

    static getPLayerInfo()
    {
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", (data) => {allPlayers = data.val();});
    }

    getCarsAtEnd()
    {
        database.ref("carsAtEnd").on("value", (data) => {this.rank = data.val()});
    }

    static updateCarsAtEnd(rank)
    {
        database.ref("/").update({carsAtEnd : rank})
    }

}