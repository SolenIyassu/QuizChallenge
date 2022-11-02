const username = document.querySelector(".name");
const saveScore = document.querySelector(".saveScore");
const finalScore = document.querySelector(".endingScore");
const recentScore = localStorage.getItem("RecentScore");

finalScore.innerText = recentScore;
username.addEventListener("keyup", () => {
  console.log(username.value);
  saveScore.disable = !username.value;
});
saveScore = (e) => {
  e.preventDefault();
};
