let questionText = document.getElementById("question-text");
let resultText = document.getElementById("result");
let resultContainer = document.getElementById("result-container");
let options = document.getElementById("options");
let optionsList = document.getElementById("list");
let toggleButton = document.getElementById("start");
let nextButton = document.getElementById("next");

const questions = [
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the smallest prime number?",
    choices: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    choices: ["China", "Japan", "Thailand", "India"],
    answer: "Japan",
  },
  {
    question: "Who discovered gravity?",
    choices: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: "Isaac Newton",
  },
  {
    question: "Which ocean is the largest?",
    choices: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the chemical symbol for gold?",
    choices: ["Ag", "Au", "Gd", "Pt"],
    answer: "Au",
  },
  {
    question: "In which year did World War II end?",
    choices: ["1942", "1945", "1948", "1950"],
    answer: "1945",
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest",
  },
];

let countIndex = 0;
let score = 0;

toggleButton.addEventListener("click", () => {
    countIndex = 0;
    score = 0;
  options.classList.remove("hidden");
  optionsList.classList.remove("hidden");
  toggleButton.classList.add("hidden");
  questionText.classList.remove("hidden");
  loadQuestion();
});

function loadQuestion() {
  optionsList.innerHTML = "";
  questionText.textContent = questions[countIndex].question;
  optionsList.classList.remove("hidden")

  questions[countIndex].choices.forEach((choice) => {
    let li = document.createElement("li");
    li.textContent = choice;
    li.classList.add("list-item");
    li.style.pointerEvents = "auto"; 
    li.addEventListener("click", () => nextQuestion(li));
    optionsList.appendChild(li);
  });
}

function nextQuestion(selectedLi) {
  if (selectedLi.textContent === questions[countIndex].answer) {
    score++;
  }
  selectedLi.classList.add("list-item-select");
  nextButton.classList.remove("hidden");

  nextButton.onclick = () => {
    nextButton.classList.add("hidden");
    countIndex++;
    if (countIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  };
}

function showResult() {
  resultContainer.classList.remove("hidden");
  resultText.classList.remove("hidden");
    toggleButton.classList.remove("hidden");
    toggleButton.textContent = "Restart quiz"
  questionText.classList.add("hidden");
  optionsList.classList.add("hidden");
  resultText.innerHTML = `You scored ${score} out of ${questions.length}`;
  questionText.classList.add("hidden")
  options.classList.add("hidden")
  optionsList.classList.add("hidden")
  if( score >= 8 ){
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  }
  toggleButton.addEventListener("click",()=>{
  resultContainer.classList.add("hidden");
  resultText.classList.add("hidden");
  })
}