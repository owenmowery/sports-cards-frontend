class Card {
    constructor(id, player_name, player_team, league, position, card_value, card_img, admin_id) {
        this.id = id;
        this.player_name = player_name;
        this.player_team = player_team;
        this.league = league;
        this.position = position;
        this.card_value = card_value;
        this.card_img = card_img;
        //this.admin_id = admin_id;

        console.log(this);

        //render the instance to the page using renderCards function
        this.renderCard()
    }

    //renderCards method that will create a div and append it to the page,
    //add relevant classes and IDs,other stuff

    // possibly event delegation, event listeners, other stuff

    renderCard() {
        const cardHolder = document.getElementById('card-collection')
        const cardContainer = document.createElement('div')
        cardContainer.dataset.id = this.id
        cardContainer.id = this.id
        cardContainer.setAttribute("class", "sports-card")
        cardContainer.innerHTML += this.showHTML()
        cardHolder.appendChild(cardContainer)
        console.log(cardContainer)
    }

    showHTML() {
        return ` 
        <img src=${this.card_img} alt="sports card image">
        <h3>${this.player_name}</h3>
        <h4>${this.player_team}</h4>
        <p>${this.position}</p>
        <p>Card Value: ${this.card_value}</p>
        `
    }
}