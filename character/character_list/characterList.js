import { RICK_N_MORTY_BASE_URL, API_CHARACTERS_PATH } from '../../apiUtils.js'

// DOM ELEMENTS
const characterListHolder = document.getElementById("character-list")

// FUNCTIONS
async function getCharactersAsync() {
    try {
        // fetch 5 characters
        const resp = await fetch(`${RICK_N_MORTY_BASE_URL}${API_CHARACTERS_PATH}/1,2,3,4,5`)
        console.log(resp)
        const charactersData = await resp.json()
        console.log(charactersData)
        // render the characters
        renderCharacterList(charactersData)

    } catch (error) {
        console.error(error)
    }
}

function renderCharacterList(charactersData) {
    // for...of is perfect for iterating through an array
    for (let c of charactersData) {
        // c.image
        // c.name
        // c.species
        // c.status
        // c.url ?

        // GENERATE CARD ELEMENTS
        const column = document.createElement("div")
        const card = document.createElement("div")
        const charImg = document.createElement("img")
        const cardBody = document.createElement("div")
        const charName = document.createElement("h5")
        const charDescription = document.createElement("p")
        const btnViewCharDetails = document.createElement("a")

        // FILL ELEMENTS WITH DETAILS (configure):
        column.classList = "col"

        card.classList = "card"
        card.style = "width: 18rem;"

        charImg.src = c.image
        charImg.classList = "card-img-top"
        charImg.alt = c.name

        cardBody.classList = "card-body"

        charName.classList = "card-title"
        charName.innerText = c.name

        charDescription.classList = "card-text"
        charDescription.innerText = `${c.species} (${c.status})`

        btnViewCharDetails.href = `characterDetails.html?char-id=${c.id}` // TODO: fix this later
        btnViewCharDetails.classList = "btn btn-primary"
        btnViewCharDetails.innerText = "View details"

        // APPENDING:
        cardBody.appendChild(charName)
        cardBody.appendChild(charDescription)
        cardBody.appendChild(btnViewCharDetails)

        card.appendChild(charImg)
        card.appendChild(cardBody)

        column.appendChild(card)

        characterListHolder.appendChild(column)
    }
}

// RUNTIME
getCharactersAsync()