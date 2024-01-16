var scores = [];
var highscoresElement = document.querySelector('#highscores');
var clearScores = document.querySelector('#clear');

function showScores() {
  highscoresElement.innerHTML = '';

  if (scores.length > 0) {
    scores.forEach(function (entry) {
      var scoreElement = document.createElement('li');
      scoreElement.textContent = entry.initials + ': ' + entry.score;
      highscoresElement.appendChild(scoreElement);
    });
  } else {
    var highscores = document.querySelector("h1");
    highscores.textContent = "No Highscores";
  }
}

function addScore(initials, score) {
  scores.push({ initials: initials, score: score });
  showScores();
}

function clearHighscores() {
  scores = [];
  showScores();
}

clearScores.addEventListener('click', clearHighscores);
showScores();
