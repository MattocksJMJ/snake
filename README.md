# snake

A clone of the classic game snake written in p5.js.
I have added a couple rudimentary features such as:

##Features

-When food is eaten the new tail will be a randomised shade of green.

```Javascript
randRed = Math.floor((Math.random()*100)+1);
randBlue = Math.floor((Math.random()*100)+1);
randGreen = Math.floor((Math.random()*100)+100)+Math.floor((Math.random()*100/2));
```

-Using local storage of the browser a highscore will be saved.

```Javascript
// Get the topHighScore from local storage and store it as topHighScore
var topHighScore = localStorage.getItem("topHighScore");

// If the current score is less than topHighScore then display the topHighScore and score respectively.
if (score < topHighScore){
  document.getElementById('highScore').value = "High Score: "+ topHighScore;
  document.getElementById('score').value = "Score: "+ score;
}
// If score is more than topHighScore then display the high score as score and save score as a number to local storage.
else if (score > topHighScore) {
    document.getElementById('highScore').value = "High Score: "+ score;
    document.getElementById('score').value = "Score: "+ score;
    localStorage.setItem("topHighScore", Number(score));
}
// If score is equal to topHighScore display high score as score but won't update local storage.
else if (score == topHighScore) {
  document.getElementById('highScore').value = "High Score: "+ score;
  document.getElementById('score').value = "Score: "+ score;
}
```

-Can use either wasd or the arrow keys

```Javascript
function keyPressed() {
  if (keyCode === RIGHT_ARROW){
    s.dir(1,0);}
  else if (keyCode === 68) {
    s.dir(1,0);}
  else if (keyCode === LEFT_ARROW) {
    s.dir(-1,0);}
  else if (keyCode === 65) {
    s.dir(-1,0);}
  else if (keyCode === UP_ARROW) {
    s.dir(0,-1);}
  else if (keyCode === 87) {
    s.dir(0,-1);}
  else if (keyCode === DOWN_ARROW) {
    s.dir(0,1);}
  else if (keyCode === 83) {
    s.dir(0,1);}
}
```
