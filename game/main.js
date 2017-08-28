'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(288, 505, Phaser.AUTO, 'pidgeys-adventures', {preload: preload, create: create});

  // Game States
  function preload () {
    game.state.add('boot', require('./states/boot'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  
  }

  function create() {
    console.log(game.scale)
    game.state.start('boot');
  }
};
