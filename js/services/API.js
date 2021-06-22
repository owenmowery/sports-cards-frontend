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

    static grabAdmin() {
        fetch("http://localhost:3000/admins")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(admin => {
                //console.log(admin)
                const{id, name, email, password_digest} = admin
                new Admin(id, name, email, password_digest)
            });
        })
    }

    static postNewCard(json) {
        fetch ( "http://localhost:3000/cards",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: json
        })
        .then(response => response.json())
        .then(newCard => {console.log(newCard);
            const{id, player_name, player_team, league, position, card_value, card_img} = newCard
            new Card(id, player_name, player_team, league, position, card_value, card_img)
        });
    }

    static deleteCard(id) {
        fetch (`http://localhost:3000/cards/${id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(resp => console.log(resp))
    }
}