var s;
var scl = 10;
var started = false;
var food;
var fr;

function setup()  {
  createCanvas(500, 500);
  s  = new Snake();
  fr = frameRate(10);
  createFood();
  grabCurrentHighScore();
}


function draw() {

  background(0);

    if (started == true){
      s.death();
      s.update();
      s.show();
      if (s.eat(food))  {
        createFood();
      }

      fill(255,0,0);
      rect(food.x, food.y,scl,scl);
    }
}


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

// // Test if tail works
// $(document).click(function(){
//   s.total++;
// });


function Snake()  {
  this.x      = 0;
  this.y      = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d<1)  {
      this.total++;
      return true;
    }else {return false;}
  }

  this.dir    = function(x,y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++){
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1 ) {
        //Resets tail when you die
        // this.total = 0;
        // this.tail = [];
        //Stops the game when you die
        stop();
        displayHighScore(this.tail.length);
        // console.log('died');
      }
    }
  }

  this.update = function()  {
    if (this.total === this.tail.length)  {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);


    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0,width-scl);
    this.y = constrain(this.y, 0,height-scl);

  }

  this.show = function()  {
    for (var i = 0; i < this.tail.length; i++) {
      randRed = Math.floor((Math.random()*100)+1);
      randBlue = Math.floor((Math.random()*100)+1);
      randGreen = Math.floor((Math.random()*100)+100)+Math.floor((Math.random()*100/2));
      fill(randRed, randGreen, randBlue);
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
      // console.log(randRed+" "+randGreen+" "+randBlue);
    }
    fill(2,163,0);
    rect(this.x, this.y, scl, scl);
  }
}
