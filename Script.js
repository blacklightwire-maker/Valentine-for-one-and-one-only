document.title = config.pageTitle;

let step = 1;
const questionEl = document.getElementById("question");
const buttonsEl = document.getElementById("buttons");

function showFirstQuestion() {
  questionEl.textContent = config.questions.first.text;
  buttonsEl.innerHTML = `
    <button onclick="showSecret()">${config.questions.first.yesBtn}</button>
    <button onclick="showSecond()">${config.questions.first.noBtn}</button>
  `;
}

function showSecret() {
  questionEl.textContent = config.questions.first.secretAnswer;
  buttonsEl.innerHTML = `<button onclick="showSecond()">Next ❤️</button>`;
}

function showSecond() {
  questionEl.textContent = config.questions.second.text;
  let percent = 0;
  buttonsEl.innerHTML = `
    <button onclick="increaseLove()">💖</button>
    <p id="percent">0%</p>
    <button onclick="showThird()">Next ❤️</button>
  `;
}

function increaseLove() {
  let percentEl = document.getElementById("percent");
  let current = parseInt(percentEl.textContent);
  current += Math.floor(Math.random() * 100) + 10;
  percentEl.textContent = current + "%";
}

function showThird() {
  questionEl.textContent = config.questions.third.text;
  buttonsEl.innerHTML = `
    <button onclick="celebrate()">${config.questions.third.yesBtn}</button>
    <button onclick="showFirstQuestion()">${config.questions.third.noBtn}</button>
  `;
}

function celebrate() {
  questionEl.textContent = config.celebration.title;
  buttonsEl.innerHTML = `<p>${config.celebration.message} ${config.celebration.emojis}</p>`;
}

showFirstQuestion();
