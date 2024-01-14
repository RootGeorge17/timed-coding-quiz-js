var startButton = document.querySelector('#start');

function startQuiz() {
  document.querySelector('#start-screen').classList.remove('start');
  document.querySelector('#start-screen').classList.add('hide');

  document.querySelector('#questions').classList.remove('hide');
  document.querySelector('#questions').classList.add('start');
  displayQuestion(1);
}

function submitAnswer() {

}

function endQuiz() {

}

startButton.addEventListener('click', startQuiz);