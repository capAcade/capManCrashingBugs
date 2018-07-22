// Phaser is side loaded as global!
//var preload = require('./states/preload');
import preload from './states/preload';
import create from './states/create';
import init from './states/init';
import handleInput from './utils/inputHandler';
import update from './states/update';
import {_loadLevel, _spawnPlatform, _spawnCharacters, _spawnTrap, _spawnDoor} from './utils/levelLoader';
import _colissionDetector from './utils/colisionDetector';


let PlayState = {};
PlayState.LEVEL_COUNT =2;

//#TODO i have to clean this up
PlayState.preload = preload;
PlayState.init = init;
PlayState.create = create;
PlayState.update = update;
PlayState._loadLevel = _loadLevel;
PlayState._spawnPlatform = _spawnPlatform;
PlayState._spawnCharacters = _spawnCharacters;
PlayState._handleInput = handleInput;
PlayState._handleCollisions = _colissionDetector;
PlayState._spawnTrap = _spawnTrap;
PlayState._spawnDoor = _spawnDoor;

window.onload = function () {
    let game = new Phaser.Game(1280, 1024, Phaser.AUTO, 'game');
    game.state.add('play', PlayState);
    game.state.start('play', true, false, {level: 0});
};