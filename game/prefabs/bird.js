'use strict';

var Bird = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bird', frame);

  // initialize your prefab here
  this.anchor.setTo(.5);
  this.animations.add('flap');
  this.animations.play('flap', 12, true);
  this.game.physics.arcade.enableBody(this);
  this.body.bounce.setTo(0,.8);

  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;
};

Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {

  // write your prefab's specific update code here
  if(this.angle < 90) {
    this.angle += 2.5;
  }
};
Bird.prototype.flap = function(pointer, doubleTap) {
  this.body.velocity.y = -425;
  this.game.add.tween(this).to({angle: -55}, 200).start();
  console.log(pointer, doubleTap)
}

module.exports = Bird;
