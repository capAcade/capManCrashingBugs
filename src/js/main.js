// Phaser is side loaded as global!
var preload = require('./states/preload');
var create = require('./states/create');
let PlayState = {};


PlayState.preload = preload;
PlayState.create = create;

window.onload = function () {
    let game = new Phaser.Game(1280, 1024, Phaser.AUTO, 'game');
    game.state.add('play', PlayState);
    game.state.start('play');
};