'use strict';

var Ground = function(game, x, y, width, height, frame) {
  Phaser.TileSprite.call(this, game, x, y, width, height, 'ground', frame);

  this.autoScroll(-200,0);

  // initialize your prefab here
  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;  
};

Ground.prototype = Object.create(Phaser.TileSprite.prototype);
Ground.prototype.constructor = Ground;

Ground.prototype.update = function() {

  // write your prefab's specific update code here

};

module.exports = Ground;
