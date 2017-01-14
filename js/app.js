// Enemies our player must avoid
var enemyWidth = 80, enemyHeight = 60;
var playerWidth = 80, playerHeight = 60;
var score = 0;

var Enemy = function(a,b,c) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = a;
    this.y = b;
    this.speed = c;
    this.width = 80;
    this.height = 60;
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + dt*this.speed;
    if (this.x >= 600) {
        this.x = -100;
    }

    this.checkCollision();    
};


// this function is to check the collisions of enemy and player
Enemy.prototype.checkCollision = function() {
    if((this.x < player.x + player.width) &&
        (this.x + this.width > player.x) &&
        (this.y< player.y + player.height) &&
        (this.y + this.height > player.y)) {
        player.x = 200;
        player.y = 400;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    this.width = 80;
    this.height = 60;
    this.score = 0;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {
    if(this.y < 62) {
            this.score++;
            this.y = 400;
            this.x = 200;
            ctx.font = "bold 20px Arial";
            ctx.clearRect(0, 0, 100, 50);
            ctx.fillText("SCORE:" + this.score, 0, 30);
        }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if(key == 'left'){
        this.x -= 100;
        if(this.x < 0) {
            this.x += 100;
        }
    }
    else if(key == 'right') {
        this.x += 100;
        if(this.x > 400) {
            this.x -= 100;
        }
    }
    else if(key == 'up') {
        this.y += -82;
        //Checks if the player reached the other side of the road
        // if(this.y < 62) {
        //     this.score++;
        //     this.y = 400;
        //     this.x = 200;
        //     ctx.font = "bold 20px Arial";
        //     ctx.clearRect(0, 0, 100, 50);
        //     ctx.fillText("SCORE:" + this.score, 0, 30);
        // }
    }
    else if(key == 'down') {
        this.y += 82;
        if(this.y > 400 ) {
            this.y -= 82;
        }
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// the parameters passed are x and y coordinates and speed.

var enemy1 = new Enemy(0, 70, 50);
var enemy2 = new Enemy(0, 150, 80);
var enemy3 = new Enemy(0, 230, 100);
var enemy4 = new Enemy(200, 70, 80);
var enemy5 = new Enemy(200, 150, 160);
var enemy6 = new Enemy(200, 230, 120);

var player = new Player();

var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
