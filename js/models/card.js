class Card {
    constructor(id, player_name, player_team, league, position, card_value, card_img, admin_id) {
        this.id = id;
        this.player_name = player_name;
        this.player_team = player_team;
        this.league = league;
        this.position = position;
        this.card_value = card_value;
        this.card_img = card_img;
        this.admin_id = admin_id;

        console.log(this);
        //renderCards()
    }
}