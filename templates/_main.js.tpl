'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(<%= gameWidth %>, <%= gameHeight %>, Phaser.AUTO, '<%= _.slugify(projectName) %>', {preload: preload, create: create});

  // Game States
  function preload () {
    <% _.forEach(gameStates, function(gameState) {  %>game.state.add('<%= gameState.shortName %>', require('./states/<%= gameState.shortName %>'));
  <% }); %>
  }

  function create() {
    console.log(game.scale)
    game.state.start('boot');
  }
};
