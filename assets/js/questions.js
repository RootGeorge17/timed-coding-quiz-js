// associative array of questions - answers
var quizData = [
  {
    question: 'Commonly used data types DO Not Include:',
    choices: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
    correctAnswer: 'Alerts',
  },
  {
    question: 'The condition in an if / else statement is enclosed with ___.',
    choices: ['Quotes', 'Curly Brackets', 'Parentheses', 'Square Brackets'],
    correctAnswer: 'Parentheses',
  },
  {
    question: 'Arrays in JavaScript can be used to store ___.',
    choices: ['Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the Above'],
    correctAnswer: 'All of the Above',
  },
  {
    question: 'String values must be enclosed within ___ when being assigned to variables',
    choices: ['Commas', 'Curly Brackets', 'Quotes', 'Parentheses'],
    correctAnswer: 'Quotes',
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'Terminal/Bash', 'For Loops', 'Console.log'],
    correctAnswer: 'Console.log',
  },
];


function displayQuestion(questionNo) {
  document.querySelector('#question-title').textContent = quizData[questionNo].question;

  var choicesElement = document.querySelector('#choices');
  var choices = quizData[questionNo].choices;

  for (var i = 0; i < choices.length; i++) {
    var choiceElement = document.createElement('button');
    choiceElement.textContent = choices[i];
    choicesElement.appendChild(choiceElement);
  }
}

function changeCurrentQuestion(currentQuestion) {
  displayQuestion(currentQuestion);
}