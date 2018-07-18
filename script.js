
$(document).keypress(function(e) {
  if (e.which == 32) {
    document.getElementById('start').style.visibility = 'hidden';
    started = true;
  }
  else{}
});

$(document).click(function(){
  document.getElementById('start').style.visibility = 'hidden';
  started = true;
});


function start()  {
  if (started == true){
    s.update();
    s.show();
  }
}


function createFood() {
  //random number between 0-1 *5 = 0-5
  var num1 = Math.random()*5;
  var num2 = Math.random()*5;
  //0-5 * 10 = 0-50, round the float down to integer, 0-50*10 = 0-500
  num1 = floor(num1 * 10) * 10;
  num2 = floor(num2 * 10) * 10;
  // console.log("Food at: "+num1+" "+num2);
  //Where food shall appear on canvas
  food = createVector(num1,num2);
}
function stop() {
  noLoop();
  var end = document.getElementsByClassName('end');
  for (i = 0; i < end.length; i++) {
    end[i].style.visibility = "visible";
  }
}


function displayHighScore(score) {
  var topHighScore = localStorage.getItem("topHighScore");

  // var highScores = [];
  // highScores = document.getElementById('highScoreList').innerHTML;
  // highScores = highScores.split(/,/);
  // highScores = highScores.sort();
  // var z = Number(highScores.length-1);
  // var topHighScore = highScores[z];

  if (score < topHighScore){
    document.getElementById('highScore').value = "High Score: "+ topHighScore;
    document.getElementById('score').value = "Score: "+ score;
    // document.getElementById('highScoreList').innerHTML = score;
    // TODO: Save new high score somehow. ^This line works in theory but not in practice because not ran on server. local data storage?
  }
  else if (score > topHighScore) {
      document.getElementById('highScore').value = "High Score: "+ score;
      document.getElementById('score').value = "Score: "+ score;
      localStorage.setItem("topHighScore", Number(score));
  }
  else if (score = topHighScore) {
    document.getElementById('highScore').value = "High Score: "+ score;
    document.getElementById('score').value = "Score: "+ score;
  }
}

function grabCurrentHighScore(){
  topHighScore = localStorage.getItem("topHighScore");
  console.log("Current High Score: "+topHighScore);
}
