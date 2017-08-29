'use strict';

//global variables
window.onload = function () {

  var game = new Phaser.Game(288 , 505 , Phaser.AUTO, 'pidgeys-adventures', {preload: preload, create: create});

  // Game States
  function preload () {
    game.state.add('boot', require('./states/boot'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  
  }

  function create() {

    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    var gameRatio = window.innerHeight / game.height; //math.ceil
    console.log(window.innerHeight);
    game.scale.setUserScale(gameRatio, gameRatio);


    //The target canvas size is computed by:
    // canvas.width = (game.width * hScale) - hTrim
    // canvas.height = (game.height * vScale) - vTrim
    //console.log("in the create function of main", game.scale, game.height)


    // console.log(window.innerHeight, game.width, game.width * gameRatio)
    // game.scale.setGameSize(game.width * gameRatio, window.innerHeight)
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    //game.scale.forcePortrait = true;
    //game.stage.smoothed = false;
    //console.log("in the create function of main", game.scale.pageAlignVertically, game.scale.scaleMode)
    console.log("scale works somewhat. CSS styling removed")
    game.state.start('boot');
  }
};
