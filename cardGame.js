const deck = ["cavaleiro", "aventureiro", "alquimista", "lobisomem", "caçador de almas", "feiticeiro", "bruxo", "mecânico", "clérigo"]
const hand = []
const discardPile = []

function draw(card) {
  let cardDrawn = deck[card]
  hand.push(cardDrawn)
}

function attDeck(removed) {
  let [retiredCard] = deck.splice(removed, 1)
  discardPile.push(retiredCard)
}

function shuffle(decks) {
  for (let i = 0; i <= 3; i++) {
    let shuffled = Math.floor(Math.random() * decks.length)
    draw(shuffled)
    attDeck(shuffled)
  }
}

shuffle(deck)

// console.table({ hand })
// console.table({ deck_atual: deck })
// console.table({ pilha_de_descaste: discardPile })