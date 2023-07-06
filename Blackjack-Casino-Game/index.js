let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
    name: "Haneen",
    chips: 200
}

playerEl.textContent = player.name + ": $" + player.chips

let cards = [];

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10){
        return 10;
    }else if(randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    isAlive = true;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
if (sum < 21){
    message = ("Do you want to draw a new card?");
} else if(sum === 21){
    message = ("Blackjack!");
} else {
    message = ("You are out of the game!");
    isAlive = false;
}

messageEl.textContent = message;

console.log(message);
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
