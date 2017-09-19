
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
    this.asset.anchor.setTo(0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    // this.load.image(key,url);
    this.time = new Date().getHours();
    //seems switch statements would be slow
    if (this.time >= 7 && this.time < 19) {
      //load daytime
      //console.log("It is daytime", this.time);
      this.load.image('background', 'assets/Images/background-d.png');
      this.load.image('buildings', 'assets/Images/buildings-d.png');
      this.load.image('trees', 'assets/Images/trees-d.png');
      this.load.image('ground', 'assets/Images/ground-d.png');
    } else {
      //load nighttime
      //console.log ("It is nighttime", this.time);
      this.load.image('background', 'assets/Images/background-n.png');
      this.load.image('buildings', 'assets/Images/buildings-n.png')
      this.load.image('trees', 'assets/Images/trees-n.png')
      this.load.image('ground', 'assets/Images/ground-n.png')
    }

    this.load.image('title', 'assets/title.png');
    this.load.image('startButton', 'assets/Images/start-button.png');
    this.load.image('instructions', 'assets/Images/instructions.png');
    this.load.image('getReady', 'assets/Images/get-ready.png');
    this.load.image('scoreboard', 'assets/Images/scoreboard.png');
    this.load.image('gameover', 'assets/Images/gameover.png');
    this.load.image('particle', 'assets/Images/particle.png');
    //this.load.spritesheet(key, url, frameWidth, frameHeight, numberOfFrames);
    if (Math.floor(Math.random() * 50) === 16) {
      //16 just for the fact it is Pidgey's dex number
      this.load.spritesheet('bird', 'assets/Images/burd-gold.png', 32, 30, 3)
    }
    else {
      this.load.spritesheet('bird', 'assets/Images/burd.png', 32, 30, 3)
    }
    //this.load.spritesheet('bird', 'assets/bird.png', 34, 24, 3);
    this.load.spritesheet('pipe', 'assets/pipes.png', 54, 320, 2);
    this.load.spritesheet('medals', 'assets/Images/medals.png', 44, 46, 4);

    this.load.audio('score', 'assets/score.wav');
    this.load.audio('flap', 'assets/flap.wav');
    this.load.audio('pipeHit', 'assets/pipe-hit.wav');
    this.load.audio('groundHit', 'assets/ground-hit.wav');

    this.load.bitmapFont('flappyfont', 'assets/fonts/flappyfont/flappyfont.png', 'assets/fonts/flappyfont/flappyfont.fnt');
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      // this.game.state.start('play');
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;
