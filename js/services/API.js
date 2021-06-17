class API {
    //static function that is going to be a fetch to the back end 
    //to the index that will load all sports cards

    static addCards() {
        fetch("http://localhost:3000/cards")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(card => {
                //console.log(card);
                const{id, player_name, player_team, league, position, card_value, card_img} = card
                new Card(id, player_name, player_team, league, position, card_value, card_img)
            });
        })
    }
}