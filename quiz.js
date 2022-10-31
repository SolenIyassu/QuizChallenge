const question = document.querySelector("#question");
const choices = document.querySelectorAll(".choice-text");
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptiongAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    Question: "What does CSS stand for?",
    choices1: "customer service and support",
    choices2: "College Scholarship Service Profile",
    choices3: "combat service support",
    choices4: "Cascading style sheet!",

    Answer: 4,
  },
  {
    Question: "What language uses appendChild?",
    choices1: "JavaScript",
    choices2: "HTML",
    choices3: "jQuery",
    choices4: "SQL",

    Answer: 1,
  },
  {
    Question: "Css is combined by using, ____. ",
    choices: "Link",
    choices: "script",
    choices: "input",
    choices: "document",

    Answer: 1,
  },
  {
    Question: "HTML is used for _____?",

    choice1: "Content structure",
    choice2: "Functionality",
    choice3: "Styling",
    choice4: "all of the above",

    Answer: 1,
  },
  {
    Question: "What language makes a page dynamic and functional?",
    choices1: "HTML",
    choices2: "SQL",
    choices3: "Python",
    choices4: "Javascript",

    Answer: 4,
  },
];

const SCORE_POINTS = 25;
const MAX_QUESTIONS = 5;

StartQuiz = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  nextQuestion();
};

nextQuestion = () => {
  if (availableQuestions === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("currentScore", score);
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.getElementsByClassName.width = `${
    (questionCounter / MAX_QUESTIONS) * 100
  }% `;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((option) => {
    const number = option.dataset["number"];
    choices.innerText = currentQuestion["option" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptiongAnswers = true;

  choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      if (acceptiongAnswers) return;
      acceptiongAnswers = false;
      const selectionChoice = e.target;
      const chosenAnswer = selectionChoice.dataset["number"];
      let toApply = (selectionChoice = currentQuestion.Answer
        ? "correct"
        : "incorrect");

      if (toApply === "correct") {
        incrementScore(SCORE_POINTS);
      }
      selectionChoice.parentElement.classList.add(toApply);

      setTimeout(() => {
        selectionChoice.parentElement.classList.remove(toApply);
        nextQuestion();
      }, 1000);
    });
  });
};
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

StartQuiz();
