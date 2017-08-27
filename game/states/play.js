'use strict';
const Bird = require('../prefabs/bird');
const Ground = require('../prefabs/ground');

function Play() {}
Play.prototype = {
  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.physics.arcade.gravity.y = 500;

    this.background = this.game.add.sprite(0, 0, 'background');
    this.bird = new Bird(this.game, 100, this.game.height/2);
    this.game.add.existing(this.bird);
    // var birdGroup = this.game.add.group();
    //   for (var i = 0; i < 10; i++) {
    //     var bird = new Bird(this.game, this.game.world.randomX, this.game.world.randomY);
    //     birdGroup.add(bird);
    //   }
    this.ground = new Ground(this.game, 0, 400, 335, 112);
    this.game.add.existing(this.ground);
  },
  update: function() {
    this.game.physics.arcade.collide(this.bird,this.ground);
  },

};

module.exports = Play;
