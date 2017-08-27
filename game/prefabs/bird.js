'use strict';

var Bird = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bird', frame);

  // initialize your prefab here
  this.anchor.setTo(.5);
  this.animations.add('flap');
  this.animations.play('flap', 12, true);
  this.game.physics.arcade.enableBody(this);
  this.body.bounce.setTo(0,.75)
};

Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {

  // write your prefab's specific update code here

};

module.exports = Bird;
