'use strict';
const Bird = require('../prefabs/bird');
const Ground = require('../prefabs/ground');
const PipeGroup = require('../prefabs/pipeGroup');

function Play() {}
Play.prototype = {
  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.physics.arcade.gravity.y = 1200;
    //tweak this.

    this.background = this.game.add.sprite(0, 0, 'background');
    this.bird = new Bird(this.game, 100, this.game.height/2);
    this.game.add.existing(this.bird);
    // var birdGroup = this.game.add.group();
    //   for (var i = 0; i < 10; i++) {
    //     var bird = new Bird(this.game, this.game.world.randomX, this.game.world.randomY);
    //     birdGroup.add(bird);
    //   }
    this.pipes = this.game.add.group();

    this.ground = new Ground(this.game, 0, 400, 335, 112);
    this.game.add.existing(this.ground);


    const flapSpace = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    flapSpace.onDown.add(this.bird.flap, this.bird);
    // add mouse/touch controls
    //this.input.onDown.add(this.bird.flap, this.bird);
    this.input.onTap.add(this.bird.flap, this.bird)

    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    //game.time.events.loop(delay, callback, callbackContext, arguments)

    this.pipeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generatePipes, this);
    this.pipeGenerator.timer.start()
  },
  update: function() {
    this.game.physics.arcade.collide(this.bird,this.ground, this.deathHandler, null, this);
    this.pipes.forEach(function(pipeGroup) {
      this.game.physics.arcade.collide(this.bird, pipeGroup, this.deathHandler, null, this);
    }, this);
  },

  generatePipes: function() {
    console.log("This is cool...but damn Phaser is complex");
    var pipeY = this.game.rnd.integerInRange(-100, 100);
    var pipeGroup = this.pipes.getFirstExists(false);
    if(!pipeGroup) {
      pipeGroup = new PipeGroup(this.game, this.pipes);
    }
    pipeGroup.reset(this.game.width + pipeGroup.width/2, pipeY);
  },
  deathHandler: function() {
    this.game.state.start('gameover');
  },
  shutdown: function() {
    this.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
    this.bird.destroy();
    this.pipes.destroy();
  }

};

module.exports = Play;
