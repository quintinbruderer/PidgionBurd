'use strict';

//global variables
window.onload = function () {

  var game = new Phaser.Game(<%= gameWidth %> , <%= gameHeight %> , Phaser.AUTO, '<%= _.slugify(projectName) %>', {preload: preload, create: create});

  // Game States
  function preload () {
    <% _.forEach(gameStates, function(gameState) {  %>game.state.add('<%= gameState.shortName %>', require('./states/<%= gameState.shortName %>'));
  <% }); %>
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
    game.stage.smoothed = false;
    //console.log("in the create function of main", game.scale.pageAlignVertically, game.scale.scaleMode)
    console.log("scale works somewhat. CSS styling removed")
    game.state.start('boot');
  }
};
