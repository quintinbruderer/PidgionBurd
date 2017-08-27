
'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
  console.log("preload.js line 7, remember due to game.js, each console log should have info of where it is at, or else it could be a bitch to find")
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.game.width/2,this.game.height/2, 'preloader');
    //have some fun here...maybe rolling pokeballs
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    // this.load.image(key,url);
    this.load.image('background', 'assets/background.png');
    this.load.image('ground', 'assets/ground.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('startButton', 'assets/start-button.png')
    //this.load.spritesheet(key, url, frameWidth, frameHeight, numberOfFrames);
    this.load.spritesheet('bird', 'assets/bird.png', 34, 24, 3);
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('play');
      // this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;
