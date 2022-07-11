// Phaser is side loaded as global!
//var preload = require('./states/preload');
import GameMenu from 'capmaningamemenu';
//import GameMenu from './states/gameMenu';
import preload from './states/preload';
import create from './states/create';
import init from './states/init';
import handleInput from './utils/inputHandler';
import update from './states/update';
import {_loadLevel, _spawnPlatform, _spawnCharacters, _spawnDeco, _spawnTrap, _spawnDoor, _spawnCoin, _createHud, _spawnBug, _spawnEnemyWall, _spawnKey} from './utils/levelLoader';
import _colissionDetector from './utils/colisionDetector';

var keys = {};
function keyHandle(event) {
  const keyName = event.type;
  
  keys[event.key] = event.type === 'keydown';
  if(keys['1'] && keys['2']){
  var url = "http://"+window.location.hostname+":"+window.location.port+'/index.html';
  	window.location = url;
  }
};

document.addEventListener('keydown',keyHandle);
document.addEventListener('keyup',keyHandle);


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
PlayState._spawnBug = _spawnBug;
PlayState._spawnEnemyWall =_spawnEnemyWall;
PlayState._spawnKey = _spawnKey;
PlayState._spawnDeco = _spawnDeco;

// PlayState.render = function(){
// // nice for debugging
//     PlayState.game.debug.body(PlayState.hero);

// }

window.onload = function () {
    let game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game');
    let gameMenu = new GameMenu(
        {
            title: 'capman Crashing bugs',
            background: 'assets/img/utilities/Game-Menu.png',
            buttons: [
                {
                    id: 'onePlayer',
                    text: '- start one player -'
                },
                {
                    id: 'home',
                    text: '- Back to Home -'
                }
            ]
        },
        (button) =>{
            if(button.id === 'home'){
                var url = "http://"+window.location.hostname+":"+window.location.port+'/index.html';
                window.location = url;
            } else {
                game.state.start('play', true, false, {level: 0}); 
            }
        }
    );


    let thanks = new GameMenu(
        {
            title: 'capman Crashing bugs',
            background: 'assets/img/utilities/thanksScreen.png',
            buttons: [
                {
                    id: 'thanks',
                    text: 'The number you are looking for is 6'
                }
            ]
        },
        (button) =>{
            var url = "http://"+window.location.hostname+":"+window.location.port+'/index.html';
            window.location = url;
        }
    );

    game.state.add('gameMenu', gameMenu);
    game.state.add('thanks', thanks);
    game.state.add('play', PlayState);
    game.state.start('gameMenu', true, false, {level: 0});
};
