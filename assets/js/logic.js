var startButton = document.querySelector('#start');
var answerButtons = document.querySelector('#choices');
var currentQuestion = 0;

function startQuiz() {
  document.querySelector('#start-screen').classList.remove('start');
  document.querySelector('#start-screen').classList.add('hide');

  document.querySelector('#questions').classList.remove('hide');
  document.querySelector('#questions').classList.add('start');
  displayQuestion(currentQuestion);
}

function submitAnswer(event) {
  console.log("Answered " + event);
  currentQuestion++;
  changeCurrentQuestion(currentQuestion);
}

function endQuiz() {

}

startButton.addEventListener('click', startQuiz);

answerButtons.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    submitAnswer(event);
  }
});