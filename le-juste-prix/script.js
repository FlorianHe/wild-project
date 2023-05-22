const playerName = prompt("C'est quoi ton nom ?");
const rightPrice = Math.ceil(Math.random() * 100);
let playerNumber = parseInt(prompt("Choisi un nombre (entre 1 et 100) !"));
while (playerNumber < 1 || playerNumber > 100 || isNaN(playerNumber)) {
    if (playerNumber < 1 || playerNumber > 100)
        playerNumber = parseInt(prompt("Idiot un nombre entre 1 et 100 !!!!"));
    else if (isNaN(playerNumber))
        playerNumber = parseInt(prompt("Tu sais ce qu'est un nombre ?!?!"));
}

while (playerNumber != rightPrice) {
    if (playerNumber < rightPrice) {
        if (playerNumber < 1 || playerNumber > 100)
            playerNumber = parseInt(prompt("Idiot un nombre entre 1 et 100 !!!!"));
        else if (isNaN(playerNumber))
            playerNumber = parseInt(prompt("Tu sais ce qu'est un nombre ?!?!"));
        else
            playerNumber = parseInt(prompt("C'est plus"));
    } else if (playerNumber > rightPrice) {
        if (playerNumber < 1 || playerNumber > 100)
            playerNumber = parseInt(prompt("Idiot un nombre entre 1 et 100 !!!!"));
        else if (isNaN(playerNumber))
            playerNumber = parseInt(prompt("Tu sais ce qu'est un nombre ?!?!"));
        else
            playerNumber = parseInt(prompt("C'est moins"));
    }
} 

const imageUrl = "vitrine.jpg";
const vitrine = document.querySelector(".vitrine");
const vitrineText = document.createElement("div");
vitrine.style.backgroundImage = `url(${imageUrl})`;
vitrineText.textContent = `${playerName} gagne !!`;
vitrine.appendChild(vitrineText);

console.log(rightPrice);
