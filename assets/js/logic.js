// Selecting DOM elements using IDs
var startButton = document.querySelector('#start');
var answerButtons = document.querySelector('#choices');
var feedback = document.querySelector('#feedback');
var timer = document.querySelector('#time');
var submitScore = document.querySelector('#submit');

// Variables to keep track of quiz state and time
var currentQuestion = 0;
var timeVal = 75;
var timerCountdown;
var feedbackTimeout;

// Function to start the quiz
function startQuiz() {
  // Hide the start screen
  document.querySelector('#start-screen').classList.remove('start');
  document.querySelector('#start-screen').classList.add('hide');

  // Set initial timer value and start the timer
  timer.textContent = timeVal;
  startTimer();

  // Show the questions screen and display the first question
  document.querySelector('#questions').classList.remove('hide');
  document.querySelector('#questions').classList.add('start');
  displayQuestion(currentQuestion);
}

// Function to handle submitting an answer
function submitAnswer(event) {
  // Check if the selected answer is incorrect and apply a penalty
  if (event.target.id !== quizData[currentQuestion].correctAnswer) {
    timeVal = timeVal - 10; // Penalty for getting the answer wrong
    timer.textContent = timeVal; // Updating the timer element after penalty
    showFeedback("Incorrect Answer");
  } else {
    showFeedback("Correct Answer");
  }

  // Move to the next question if there are more questions
  if (currentQuestion < 4) {
    currentQuestion++;
    changeCurrentQuestion(currentQuestion);
  } else {
    // End quiz if all questions are finished
    endQuiz();
  }
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerCountdown); // Stop the timer

  // Hide the questions screen
  document.querySelector('#questions').classList.remove('start');
  document.querySelector('#questions').classList.add('hide');

  // Show the end screen
  document.querySelector('#end-screen').classList.remove('hide');
  document.querySelector('#end-screen').classList.add('start');

  // Display the final score
  document.querySelector('#final-score').textContent = timeVal;
}

// Function to start the timer
function startTimer() {
  timerCountdown = setInterval(function () {
    // Decrement the time value and update the timer display
    timeVal--;
    timer.textContent = timeVal;
    // End the quiz if time runs out
    if (timeVal <= 0) {
      clearInterval(timerCountdown);
      endQuiz();
    }
  }, 1000); // Timer updates every 1000 milliseconds (1 second)
}

function showFeedback(feedbackVal) {
  feedback.classList.remove("hide"); // Show feedback
  feedback.textContent = feedbackVal;

  // Clear existing timeout (if any)
  clearTimeout(feedbackTimeout);

  feedbackTimeout = setTimeout(function () {
    feedback.classList.add("hide"); // Hide feedback
  }, 1800);
}

// Event listener for starting the quiz button
startButton.addEventListener('click', startQuiz);

// Event listener submitting initials and score
submitScore.addEventListener('click', function (event) {
  var initials = document.getElementById('initials').value;
  localStorage.setItem(initials, timeVal);
});

// Event listener for submitting answers
answerButtons.addEventListener('click', function (event) {
  // Check if the clicked element is a button before submitting the answer
  if (event.target.tagName === 'BUTTON') {
    submitAnswer(event);
  }
});