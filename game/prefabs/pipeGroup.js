'use strict';
const Pipe = require('./pipe');

var PipeGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);
  this.topPipe = new Pipe(this.game, 0, 0, 0);
  this.bottomPipe = new Pipe(this.game, 0, 440, 1);
  this.addMultiple([this.topPipe, this.bottomPipe]);

  this.hasScored = false;

  this.setAll('body.velocity.x', -200);

  // initialize your prefab here

};

PipeGroup.prototype = Object.create(Phaser.Group.prototype);
PipeGroup.prototype.constructor = PipeGroup;

PipeGroup.prototype.update = function() {
  this.checkWorldBounds();
  // write your prefab's specific update code here
};
PipeGroup.prototype.stop = function() {
  this.setAll('body.velocity.x', 0);
};

PipeGroup.prototype.reset = function (x, y) {
  this.topPipe.reset(0,0);
  this.bottomPipe.reset(0,440);

  this.x = x;
  this.y = y;
  this.setAll('body.velocity.x', -200);
  this.hasScored = false;
  this.exists = true;
};

PipeGroup.prototype.checkWorldBounds = function () {
  if(!this.topPipe.inWorld) {
    this.exists.false;
  }
};

module.exports = PipeGroup;
