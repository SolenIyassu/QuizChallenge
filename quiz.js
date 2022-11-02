const question = document.querySelector("#questions");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
let timer = 60;
let Play = document.querySelector(".play");
console.log("hello world");
let currentQuestion = {};
let answerChoices = true;
let score = 0;
let counter = 0;
let allQuestions = [];
const questionUptake = document.querySelector("#counter");
const ScoreCount = document.querySelector("#scoreCount");

let questions = [
  {
    Question: "What does CSS stand for?",
    choice1: "customer service and support",
    choice2: "College Scholarship Service Profile",
    choice3: "combat service support",
    choice4: "Cascading style sheet!",

    Answer: 4,
  },
  {
    Question: "What language uses appendChild?",
    choice1: "JavaScript",
    choice2: "HTML",
    choice3: "jQuery",
    choice4: "SQL",

    Answer: 1,
  },
  {
    Question: "Css is combined by using, ____. ",
    choice1: "Link",
    choice2: "script",
    choice3: "input",
    choice4: "document",

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
    choice1: "HTML",
    choice2: "SQL",
    choice3: "Python",
    choice4: "Javascript",

    Answer: 4,
  },
];

const CORRECT_ANSWER = 25;
const MAX_QUESTIONS = 5;

window.setInterval(function () {
  if (timer === 0) {
    setTimeout(() => {
      return window.location.assign("end.html");
    });
    // }
    document.getElementById("timer").innerHTML =
      "GameOver In : " + timer + " seconds";
    timer--;
    // document.getElementById("incorrect").addEventListener("click", function () {
    //   sec -= 5;
    //   document.getElementById("timer").innerHTML = "00:" + sec;
    // } else {
    //   if (answerSelected == currentQuestion.Answer) timer -= 5;
    // }
  }
}, 1000);

StartQuiz = () => {
  counter = 0;
  score = 0;
  allQuestions = [...questions];
  // console.log(allQuestions);
  nextQuestion();
};
// timerFn=()=>{

function Continue() {
  nextQuestion.style.diplay = "block";
  currentIndex++;
  renderQuestion();
  // console.log(currentIndex);
}

nextQuestion = () => {
  if (allQuestions.length === 0 || questionUptake >> MAX_QUESTIONS) {
    return window.location.assign("end.html");
  }
  counter++;
  questionUptake.innerText = counter + "/" + MAX_QUESTIONS;
  const index = Math.floor(Math.random() * allQuestions.length);
  currentQuestion = allQuestions[index];
  question.innerText = currentQuestion.Question;

  choices.forEach((choice) => {
    const num = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + num];
    // console.log(currentQuestion);
  });
  allQuestions.splice(counter, 1);

  answerChoices = true;
};
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    // console.log(e.target);
    if (!answerChoices) return;

    answerChoices = false;
    const choiceSelected = e.target;
    const answerSelected = choiceSelected.dataset["number"];
    console.log(answerSelected == currentQuestion.Answer);
    //
    const toApply =
      answerSelected == currentQuestion.Answer ? "correct" : "incorrect";

    if (toApply == "correct") {
      currentScore(CORRECT_ANSWER);
    }
    choiceSelected.parentElement.classList.add("toApply");
    setTimeout(() => {
      choiceSelected.parentElement.classList.remove("toApply");
      nextQuestion();
    }, 1000);

    function currentScore(num) {
      score += num;
      ScoreCount.innerText = score;
    }
    // answerSelected.parentElement.classList.add(toApply);

    // setTimeout(() => {
    //   choiceSelected.parentElement.classList.remove(toApply);
    //   if (answerSelected != currentQuestion.Answer) {
    //   }
    //   nextQuestion();
    // }, 10000);
    // // }
  });
});
//   if (availableQuestions === 0 || questionCounter > MAX_QUESTIONS) {
//     localStorage.setItem("currentScore", score);
//     return window.location.assign("/end.html");
//   }
//   // progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
//   // progressBarFull.getElementsByClassName.width = `${
//   (questionCounter / MAX_QUESTIONS) * 100;
//   // }% `;
//  * availableQuestions.length);
//
//
//
//   });
//   availableQuestions.splice(questionIndex, 1);
//   acceptiongAnswers = true;
//   choices.forEach((choice) => {
//     choice.addEventListener("click", (e) => {
//       if (acceptiongAnswers) return;
//       acceptiongAnswers = false;
//       const selectionChoice = e.target;
//       const chosenAnswer = selectionChoice.dataset["number"];
//       let toApply = (selectionChoice = currentQuestion.Answer
//         ? "correct"
//         : "incorrect");
//       if (toApply === "correct") {
//         incrementScore(SCORE_POINTS);
//       }
//       selectionChoice.parentElement.classList.add(toApply);
//       setTimeout(() => {
//         selectionChoice.parentElement.classList.remove(toApply);
//         nextQuestion();
//       }, 1000);
//     });
//   });
// incrementScore = (num) => {
//   score += num;
//   scoreText.innerText = score;
// };
StartQuiz();
