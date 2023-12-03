const deck = ["cavaleiro", "cavaleiro", "cavaleiro", "aventureiro", "alquimista", "lobisomem", "caçador de almas", "feiticeiro", "bruxo", "mecânico", "clérigo"]
const hand = []
const discardPile = []

function draw(card) {
  let cardDrawn = deck[card]
  hand.push(cardDrawn)
}

function playCard(retiredCard) {
  console.table({ Hand_before_play: hand })
  setTimeout(() => {
    console.log(`Carta jogada: ${retiredCard}`);
  }, 1000)
  hand.splice(hand.indexOf(retiredCard), 1)
  discardPile.push(retiredCard)
}

function shuffle(decks) {
  for (let handLength = 0; handLength <= 3; handLength++) {
    let shuffled = Math.floor(Math.random() * decks.length)
    draw(shuffled)
    deck.splice(shuffled, 1)
  }
}

shuffle(deck)
playCard(hand[2])

console.table({ hand })
console.table({ deck_atual: deck })
console.table({ pilha_de_descaste: discardPile })