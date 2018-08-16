// Phaser is side loaded as global!
//var preload = require('./states/preload');
import GameMenu from './states/gameMenu';
import preload from './states/preload';
import create from './states/create';
import init from './states/init';
import handleInput from './utils/inputHandler';
import update from './states/update';
import {_loadLevel, _spawnPlatform, _spawnCharacters, _spawnTrap, _spawnDoor, _spawnCoin, _createHud} from './utils/levelLoader';
import _colissionDetector from './utils/colisionDetector';



/*
Font in het logo onder capman is ' KenVector Future', regular weight, 32px
Het font v.d. press start is hetzelfde font, ook 32px regular, letter-spacing 2px, border-color: #26D8D7
*/

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
PlayState._spawnCoin = _spawnCoin;
PlayState._createHud = _createHud;

window.onload = function () {
    let game = new Phaser.Game(1280, 1024, Phaser.AUTO, 'game');
    let gameMenu = new GameMenu(
        {
            title: 'capman Crashing bugs',
            background: 'assets/img/test/Intro_Screen_background.png',
            logo: 'assets/img/test/CapmanLogo1.svg',
            buttons: [
                {
                    id: 'onePlayer',
                    text: 'play with one player'
                },
                {
                    id: 'twoPlayers',
                    text: 'play with two players'
                }
            ]
        },
        () =>{
            game.state.start('play', true, false, {level: 0}); 
        }
    );

    game.state.add('gameMenu', gameMenu);
    game.state.add('play', PlayState);
    game.state.start('gameMenu', true, false, {level: 0});
};