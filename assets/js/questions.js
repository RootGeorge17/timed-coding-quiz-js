// Array of objects with properties question, choices and correct answer
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

// Function to display a question and choices
function displayQuestion(questionNo) {
  // Selecting question title and choices containers
  var questionTitleElement = document.querySelector('#question-title');
  var choicesElement = document.querySelector('#choices');

  // Clear existing question and choices
  questionTitleElement.textContent = '';
  choicesElement.innerHTML = '';

  // Populate with new question and choices
  questionTitleElement.textContent = quizData[questionNo].question;
  var choices = quizData[questionNo].choices;

  // Create buttons for each choice
  for (var i = 0; i < choices.length; i++) {
    var choiceElement = document.createElement('button');
    choiceElement.setAttribute('id', choices[i])
    choiceElement.textContent = i + 1 + ". " + choices[i];
    choicesElement.appendChild(choiceElement);
  }
}

// Function to change the current question
function changeCurrentQuestion(currentQuestion) {
  displayQuestion(currentQuestion);
}