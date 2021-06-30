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

        //console.log(this);

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
    
    }

    static createCard() {

        const submitBtn = document.getElementById('submit-btn');

        submitBtn.addEventListener("click", e => { console.log(e)
            e.preventDefault()
            {
                const newName = document.getElementById('card-name')
                const newTeam = document.getElementById('card-team')
                const newLeague = document.getElementById('card-league')
                const newPosition = document.getElementById('card-position')
                const newValue = document.getElementById('card-value')
                const newImage = document.getElementById('card-img')

                let json = JSON.stringify({
                    "player_name": newName.value,
                    "player_team": newTeam.value,
                    "league": newLeague.value,
                    "position": newPosition.value,
                    "card_value": newValue.value,
                    "card_img": newImage.value,
                    "admin_id": 1
                    // ask sam about not hard coding admin id
                })

                API.postNewCard(json)
                newName.value=""
                newTeam.value=""
                newLeague.value=""
                newPosition.value=""
                newValue.value=""
                newImage.value=""
            }
        })
    }

    static deleteCard() {
        document.addEventListener("click", e => {
            if (e.target.className === "delete-btn") {
                console.log('this was clicked');
            }
        })
    }

    showHTML() {
        return ` 
        <img src=${this.card_img} alt="sports card image">
        <h3>${this.player_name}</h3>
        <h4>${this.player_team}</h4>
        <p>${this.position}</p>
        <p>Card Value: <strong>${this.card_value}</strong></p>
        <button id="delete" class="delete-btn btn">Delete</button>
        `
    }
}