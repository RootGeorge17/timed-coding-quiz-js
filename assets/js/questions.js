// associative array of questions - answers
var questions = [
  'Commonly used data types DO Not Include:',
  'The condition in an if / else statement is enclosed with ___.',
  'Arrays in JavaScript can be used to store ___.',
  'String values must be enclosed within ___ when being assigned to variables',
  'A very useful tool used during development and debugging for printing content to the debugger is:'
]

var choices = [

]

function displayQuestion(questionNo) {
  var question = document.querySelector('#question-title');
  question.textContent = questions[questionNo];

  var choices = document.querySelector('#choices');
  choices.textContent = chocies[questionNo];
}

function changeCurrentQuestion() {

}