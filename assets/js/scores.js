var scores = [];
var highscoresElement = document.querySelector('#highscores');
var clearScores = document.querySelector('#clear');

function showScores() {
  highscoresElement.innerHTML = '';

  var scores = Object.keys(localStorage).map(function (initials) {
    return { initials: initials, score: localStorage.getItem(initials) };
  });

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

function clearHighscores() {
  localStorage.clear();
  showScores();
}

clearScores.addEventListener('click', clearHighscores);
showScores();
