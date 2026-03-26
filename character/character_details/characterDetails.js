// IMPORTS
import { RICK_N_MORTY_BASE_URL, API_CHARACTERS_PATH } from '../../apiUtils.js'

// DOM ELEMENTS
const charDetailsContainer = document.getElementById("character-details-container")

// GLOBAL VARIABLES
let characterId = 0

// FUNCTIONS
async function getCharacterDetailsAsync(id) {
    try {
        const resp = await fetch(`${RICK_N_MORTY_BASE_URL}${API_CHARACTERS_PATH}/${id}`)
        const characterData = await resp.json()
    
        console.log(characterData) // inspect data structure

        renderCharacter(characterData)

    } catch(error) {
        console.error(error)
    }
}

function renderCharacter(characterData) {
    // generate:
    const charImg = document.createElement("img")
    const charName = document.createElement("h5")
    const charSpecies = document.createElement("p")
    const charLocation = document.createElement("p")
    const charOrigin = document.createElement("p")
    
    // configure:
    charImg.src = characterData.image
    charImg.alt = characterData.name

    charName.innerText = characterData.name

    charSpecies.innerText = `${characterData.species} (${characterData.status})`

    charLocation.innerText = characterData.location.name
    charOrigin.innerText = characterData.origin.name

    // append:
    charDetailsContainer.appendChild(charImg)
    charDetailsContainer.appendChild(charName)
    charDetailsContainer.appendChild(charSpecies)
    charDetailsContainer.appendChild(charLocation)
    charDetailsContainer.appendChild(charOrigin)
}

function getCharacterIdFromQueryString() {
    console.log(window.location.search.split('=')[1])
    return window.location.search.split('=')[1]
}

// RUNTIME
getCharacterDetailsAsync(getCharacterIdFromQueryString())