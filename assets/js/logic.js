var startButton = document.querySelector('#start');
var answerButtons = document.querySelector('#choices');
var timer = document.querySelector('#time');

var currentQuestion = 0;
var timeVal = 75;
var timerCountdown;
var finalScore = 0;

function startQuiz() {
  document.querySelector('#start-screen').classList.remove('start');
  document.querySelector('#start-screen').classList.add('hide');

  startTimer();
  document.querySelector('#questions').classList.remove('hide');
  document.querySelector('#questions').classList.add('start');
  displayQuestion(currentQuestion);
}

function submitAnswer(event) {
  if (event.target.id === quizData[currentQuestion].correctAnswer) {
  } else {
    timeVal = timeVal - 10;
  }

  if (currentQuestion < 4) {
    currentQuestion++;
    changeCurrentQuestion(currentQuestion);
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerCountdown);
  document.querySelector('#questions').classList.remove('start');
  document.querySelector('#questions').classList.add('hide');

  document.querySelector('#end-screen').classList.remove('hide');
  document.querySelector('#end-screen').classList.add('start');

  finalScore = timeVal;
  document.querySelector('#final-score').textContent = finalScore;
}

function startTimer() {
  timer.textContent = timeVal;
  timerCountdown = setInterval(function () {
    timeVal--;
    timer.textContent = timeVal;
    if (timeVal <= 0) {
      clearInterval(timerCountdown);
      endQuiz();
    }
  }, 1000);
}

startButton.addEventListener('click', startQuiz);

answerButtons.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    submitAnswer(event);
  }
});