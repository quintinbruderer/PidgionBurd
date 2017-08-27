'use strict';

var Bird = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bird', frame);

  // initialize your prefab here
  this.anchor.setTo(.5);
  this.animations.add('flap');
  this.animations.play('flap', 12, true);
  this.flapSound = this.game.add.audio('flap');
  this.alive = false;
  this.onGround = false;
  this.hitPipe = false;
  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.bounce.setTo(0,0.4);
  this.body.collideWorldBounds = true;
  this.events.onKilled.add(this.onKilled, this);

  this.birdTweenPipe = this.game.add.tween(this).to({ angle: 175, x: this.x + 25}, 2000, Phaser.Easing.Quadratic.Out);
  this.birdTweenGround = this.game.add.tween(this).to({angle: 135, x: this.x + 125}, 2000, Phaser.Easing.Quadratic.Out);
};

Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {
  switch (this.alive) {
    case true:
        if (this.angle < 90) {
          this.angle += 2.5;
        }
      break;
    case false:
      this.body.velocity.x = 0;
      this.roll = true;
      break;
  }
  switch (this.hitPipe) {
    case true:
      console.log(this.x)
      this.birdTweenPipe.start()
      this.roll = false;
      break;
    case false:
      if (this.onGround) {
        this.birdTweenGround.start()
        this.roll = false;
      }
      break;
  }
};

Bird.prototype.flap = function() {
  if(!!this.alive) {
    this.flapSound.play();
    this.body.velocity.y = -400;
    this.game.add.tween(this).to({angle: -40}, 100).start();
  }
};

Bird.prototype.onKilled = function() {
  this.exists = true;
  this.visible = true;
  this.animations.stop();
  var duration = 90 / this.y * 300;
  this.game.add.tween(this).to({angle: 90}, duration).start();
};


module.exports = Bird;
