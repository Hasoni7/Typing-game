// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");
const timeInterval = setInterval(updateTime, 1000);

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

///////////functions////////////

//Pick a random word from the list
function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerText = randomWord;
}

//Update score
function updateScore() {
  score++;
  scoreEl.innerText = score;
}

//Update time
function updateTime() {
  time--;
  updateTimeDisplay();

  //if time runs out
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

//Update time display
function updateTimeDisplay() {
  timeEl.innerText = `${time}s`;
}

// game over function 
function gameOver() {
  endgameEl.innerText = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;
  // show end game
  endgameEl.style.display = "flex";
}
///////////Event listener////////////

text.addEventListener("input", () => {
  const insertedText = text.value.trim();

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    time += 5;
    updateTimeDisplay();
    text.value = "";
  }
});

//optional part
settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("hide");
});

addWordToDOM();
