var word = [
  "the",
  "and",
  "you",
  "that",
  "was",
  "for",
  "are",
  "with",
  "his",
  "they",
  "this",
  "have",
  "from",
  "one",
  "had",
  "word",
  "but",
  "not",
  "what",
  "all",
  "were",
  "when",
  "your",
  "can",
  "said",
  "there",
  "use",
  "each",
  "which",
  "she",
  "how",
  "their",
  "will",
  "other",
  "about",
  "out",
  "many",
  "then",
  "them",
  "these",
  "some",
  "her",
  "would",
  "make",
  "like",
  "him",
  "into",
  "time",
  "has",
  "look",
  "two",
  "more",
  "write",
  "see",
  "number",
  "way",
  "could",
  "people",
  "my",
  "than",
  "first",
  "water",
  "been",
  "call",
  "who",
  "oil",
  "its",
  "now",
  "find",
  "long",
  "down",
  "day",
  "did",
  "get",
  "come",
  "made",
  "may",
  "part"
]

let answer = ""
let lives = 6
let wrongAnswer = 0
let guess = []
let Hword = null

function Random() {
  answer = word[Math.floor(Math.random() * word.length)]
}

function Letbuttons() {
  let bLetters = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      letter =>
        `
        <button
          class="letters"
          id='` +
        letter +
        `'
          onClick="handleGuess('` +
        letter +
        `')"
        >
          ` +
        letter +
        `
        </button>
      `
    )
    .join("")

  document.getElementById("Letterchoice").innerHTML = bLetters
}

function handleGuess(chosenLetter) {
  guess.indexOf(chosenLetter) === -1 ? guess.push(chosenLetter) : null
  document.getElementById(chosenLetter).setAttribute("disabled", true)

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord()
    GameWon()
  } else if (answer.indexOf(chosenLetter) === -1) {
    wrongAnswer++
    Wrong()
    GameLost()
  }
}

function GameWon() {
  if (Hword === answer) {
    document.getElementById("Letterchoice").innerHTML = "You Won!"
  }
}

function GameLost() {
  if (wrongAnswer === lives) {
    document.getElementById("Hword").innerHTML = "The answer was: " + answer
    document.getElementById("Letterchoice").innerHTML = "You Lost!"
  }
}

function guessedWord() {
  Hword = answer
    .split("")
    .map(letter => (guess.indexOf(letter) >= 0 ? letter : " _ "))
    .join("")

  document.getElementById("Hword").innerHTML = Hword
}

function Wrong() {
  document.getElementById("wrongAnswer").innerHTML = wrongAnswer
}

function reset() {
  wrongAnswer = 0
  guess = []

  Random()
  guessedWord()
  Wrong()
  Letbuttons()
}

document.getElementById("lives").innerHTML = lives

Random()
Letbuttons()
guessedWord()
