
'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background');
    this.buildings = this.game.add.tileSprite(0, 234, 360, 92, 'buildings');
    this.trees = this.game.add.tileSprite(0,310, 336, 90, 'trees');
    this.ground = this.game.add.tileSprite(0, 400, 480, 165, 'ground');
    //x and y placement, then the "view box" of the sprite, in this case is the size of the sprite itself of 480 and 165. The sprite is called from the preload ground
    this.ground.autoScroll(-200, 0);
    this.trees.autoScroll(-100, 0);
    this.buildings.autoScroll(-40,0);

    this.titleGroup = this.game.add.group();
    this.title = this.game.add.sprite(0,0,'title');
    this.title.anchor.setTo(0.5);

    this.bird = this.game.add.sprite(0, 30, 'bird')
    this.bird.anchor.x = 0.5;
    // this.bird = this.game.add.sprite(-20, 50, 'bird')
    // this.bird.anchor.x = 1;
    this.bird.animations.add('flap');
    this.bird.animations.play('flap', 12, true);
    //animations keyname, framerate, loop

    this.titleGroup.addMultiple([this.title, this.bird]);

    this.titleGroup.x = this.game.width/2;
    this.titleGroup.y = this.game.width/2;
    this.game.add.tween(this.titleGroup).to({y:150}, 350, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
    //I do not understand this line too well.
    this.startButton = this.game.add.button(this.game.width/2, this.game.height/1.75, 'startButton', this.startPress, this);
    this.startButton.anchor.setTo(0.5);
  },
  startPress: function() {
    this.game.state.start('play');
  },

  update: function() {

  }
};

module.exports = Menu;

/* due to learning curve...I'm going to keep this in here to reference

create: function() {
  var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
  this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'yeoman');
  this.sprite.anchor.setTo(0.5, 0.5);

  this.titleText = this.game.add.text(this.game.world.centerX, 300, '\'Allo, \'Allo!', style);
  this.titleText.anchor.setTo(0.5, 0.5);

  this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play "Click The Yeoman Logo"', { font: '16px Arial', fill: '#ffffff', align: 'center'});
  this.instructionsText.anchor.setTo(0.5, 0.5);

  this.sprite.angle = -20;
  this.game.add.tween(this.sprite).to({angle: 20}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
},
update: function() {
  if(this.game.input.activePointer.justPressed()) {
    this.game.state.start('play');
  }
}
};

*/
