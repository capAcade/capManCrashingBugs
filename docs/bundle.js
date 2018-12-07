/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/capmaningamemenu/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/capmaningamemenu/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,\"a\",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p=\"\",o(o.s=0)}([function(e,t,o){\"use strict\";o.r(t),o.d(t,\"default\",function(){return u});let n=0;let i=0,r=30;const s=e=>{n--,e.keys.down.isDown&&n<=0?(e.selectedButton=(e.selectedButton+1)%e._buttons.length,n=20):e.keys.up.isDown&&n<=0?(e.selectedButton=(e.selectedButton-1)%e._buttons.length,n=20,e.selectedButton<0&&(e.selectedButton=e._buttons.length-1)):e.keys.fire.isDown&&e.cb(e.config.buttons[e.selectedButton])};class u{constructor(e,t){this.config=e,this.cb=t,this.selectedButton=0}preload(){\"string\"==typeof this.config.background&&this.game.load.image(\"bg\",this.config.background),\"string\"==typeof this.config.logo&&this.game.load.image(\"logo\",this.config.logo)}init(){this.game.renderer.renderSession.roundPixels=!0,this.keys=this.game.input.keyboard.addKeys({down:Phaser.KeyCode.DOWN,up:Phaser.KeyCode.UP,fire:Phaser.KeyCode.CONTROL})}create(){if(this.game.stage.backgroundColor=\"#000033\",\"string\"==typeof this.config.background){let e=this.game.add.image(0,0,\"bg\");e.height=this.game.height,e.width=this.game.width}if(\"string\"==typeof this.config.logo){this.game.add.image(this.game.world.centerX,this.game.world.centerY-300,\"logo\").anchor.set(.5)}let e={font:\"32px KenVector Future\",fill:\"#ffffff\",align:\"center\"},t=0;this._buttons=this.config.buttons.map(o=>{let n=this.game.add.text(this.game.world.centerX,this.game.world.centerY+t,o.text,e);return n.anchor.set(.5),n.stroke=\"#26D8D7\",n.strokeThickness=6,t+=70,n})}update(){s(this),++i>=r&&(this._buttons[this.selectedButton].visible=!this._buttons[this.selectedButton].visible,i=0),this._buttons.forEach((e,t)=>{t!==this.selectedButton&&(e.visible=!0)})}}}])});\n\n//# sourceURL=webpack:///./node_modules/capmaningamemenu/dist/index.js?");

/***/ }),

/***/ "./src/js/bugs/bugOne.js":
/*!*******************************!*\
  !*** ./src/js/bugs/bugOne.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BugOne; });\nclass BugOne extends Phaser.Sprite {\n    constructor(game, x, y) {\n        super(game, x, y, 'bug');\n        // anchor\n        this.anchor.set(0.5);\n        this.scale.setTo(0.30, 0.30);\n\n\n       // const cropRect = new Phaser.Rectangle(75, 60, 200, 466);\n\n       // this.crop(cropRect);\n\n        // animation\n        this.animations.add('crawl', Phaser.Animation.generateFrameNames('walk-', 1, 2), 8, true);\n        this.animations.add('die', Phaser.Animation.generateFrameNames('die-', 1, 4), 12);\n        this.animations.play('crawl');\n    \n\n\n\n        // physic properties\n        this.game.physics.enable(this);\n        this.body.collideWorldBounds = true;\n        this.SPEED = 100;\n        this.body.velocity.x = this.SPEED;\n\n    }\n    update () {\n        // check against walls and reverse direction if necessary\n        if (this.body.touching.right || this.body.blocked.right) {\n            this.body.velocity.x = -this.SPEED; // turn left\n        }\n        else if (this.body.touching.left || this.body.blocked.left) {\n            this.body.velocity.x = this.SPEED; // turn right\n        }\n\n        if (this.body.velocity.x > 0) {\n            this.scale.x = -0.25;\n        }\n        else if (this.body.velocity.x < 0) {\n            this.scale.x = 0.25;\n        }\n    }\n    die () {\n        this.body.enable = false;\n        this.game._sfx.splat.play();\n        this.animations.play('die').onComplete.addOnce(function () {\n            this.kill();\n        }, this)\n    }\n};\n\n\n//# sourceURL=webpack:///./src/js/bugs/bugOne.js?");

/***/ }),

/***/ "./src/js/heros/hero.js":
/*!******************************!*\
  !*** ./src/js/heros/hero.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hero; });\nclass Hero extends Phaser.Sprite {\n    constructor(game, x, y) {\n        super(game, x, y, 'capManSheet');\n        this.anchor.set(0.5);\n        this.scale.setTo(0.25, 0.25);\n        //const cropRect = new Phaser.Rectangle(1, 60, 500, 404);\n\n        //this.crop(cropRect);\n\n        \n        this.game.physics.enable(this);\n        this.body.collideWorldBounds = true;\n        this.body.setSize(331, 490, 0, 0);\n\n\n        this.animations.add('idle', ['idle']);\n        this.animations.add('run', ['walk-1', 'walk-2'], 8, true); // 8fps looped\n        this.animations.add('jump', ['jump']);\n        this.animations.add('fall', ['land']);\n        this.animations.add('die', ['die-1', 'die-2'], 8, true); // 12fps no loop\n        this.animations.add('defaultAttack', ['stab-1', 'stab-2', 'stab-2', 'stab-2', 'stab-1'], 12);\n        this.attacking = false;\n\n\n\n        // this.animations.add('idle', [1, 2, 3, 4, 5, 6, 7, 8, 9], 9, true);\n        // this.animations.add('run', [21, 22, 23, 24, 25, 26, 27, 28], 10, true);\n        // this.animations.add('jump', [11, 12, 13, 14, 15]);\n        // this.animations.add('fall', [16, 17, 18, 19, 20]);\n    }\n    move(direction) {\n        const SPEED = 200;\n        this.body.velocity.x = direction * SPEED;\n\n        if (this.body.velocity.x < 0) {\n            this.scale.x = -0.25;\n        }\n        else if (this.body.velocity.x > 0) {\n            this.scale.x = 0.25;\n        }\n    }\n    jump() {\n        const JUMP_SPEED = 700;\n        let canJump = this.body.touching.down;\n        if (canJump) {\n            this.game._sfx.jump.play();\n            this.body.velocity.y = -JUMP_SPEED;\n        }\n        return canJump;\n    }\n    defaultAttack() {\n        if(this.alive && !this.attacking){\n            this.game._sfx.woosh.play();\n            this.attacking = true;\n            this.body.setSize(911, 490, 0, 0);\n            this.animations.play('defaultAttack').onComplete.addOnce(function () {\n                this.attacking = false;\n                this.body.setSize(331, 490, 0, 0);\n            }, this);\n        }\n    }\n    getAnimationName() {\n        let name = 'idle'; // default animation\n\n        // jumping\n        if (this.body.velocity.y < 0) {\n            this.jumped = true;\n            name = 'jump';\n        }\n        // falling\n        else if (this.body.velocity.y >= 0 && !this.body.touching.down) {\n            name = 'fall';\n        }\n        else if (this.body.velocity.x !== 0 && this.body.touching.down) {\n            name = 'run';\n        }\n        if(this.body.touching.down && this.jumped){\n            this.game._sfx.land.play();\n            this.jumped = false;\n        }\n        return name;\n    }\n    update() {\n        let animationName = this.getAnimationName();\n        if (this.animations.name !== animationName && this.alive && !this.attacking) {\n           this.animations.play(animationName);\n        }\n    }\n    die() {\n        this.alive = false;\n        this.body.enable = false;\n        this.game._sfx.lose.onStop.addOnce( ()=>{\n            this.kill();\n        });\n        this.game._sfx.lose.play();\n        this.animations.play('die').onComplete.addOnce(function () {\n\n        }, this);\n    };\n};\n\n\n//# sourceURL=webpack:///./src/js/heros/hero.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var capmaningamemenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! capmaningamemenu */ \"./node_modules/capmaningamemenu/dist/index.js\");\n/* harmony import */ var capmaningamemenu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(capmaningamemenu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _states_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/preload */ \"./src/js/states/preload.js\");\n/* harmony import */ var _states_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/create */ \"./src/js/states/create.js\");\n/* harmony import */ var _states_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/init */ \"./src/js/states/init.js\");\n/* harmony import */ var _utils_inputHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/inputHandler */ \"./src/js/utils/inputHandler.js\");\n/* harmony import */ var _states_update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states/update */ \"./src/js/states/update.js\");\n/* harmony import */ var _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/levelLoader */ \"./src/js/utils/levelLoader.js\");\n/* harmony import */ var _utils_colisionDetector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/colisionDetector */ \"./src/js/utils/colisionDetector.js\");\n// Phaser is side loaded as global!\n//var preload = require('./states/preload');\n\n//import GameMenu from './states/gameMenu';\n\n\n\n\n\n\n\n\nvar keys = {};\nfunction keyHandle(event) {\n  const keyName = event.type;\n  \n  keys[event.key] = event.type === 'keydown';\n  if(keys['1'] && keys['2']){\n  var url = \"http://\"+window.location.hostname+\":\"+window.location.port+'/index.html';\n  \twindow.location = url;\n  }\n};\n\ndocument.addEventListener('keydown',keyHandle);\ndocument.addEventListener('keyup',keyHandle);\n\n\nlet PlayState = {};\nPlayState.LEVEL_COUNT =2;\n\n//#TODO i have to clean this up\nPlayState.preload = _states_preload__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nPlayState.init = _states_init__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nPlayState.create = _states_create__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nPlayState.update = _states_update__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nPlayState._loadLevel = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_loadLevel\"];\nPlayState._spawnPlatform = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnPlatform\"];\nPlayState._spawnCharacters = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnCharacters\"];\nPlayState._handleInput = _utils_inputHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nPlayState._handleCollisions = _utils_colisionDetector__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\nPlayState._spawnTrap = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnTrap\"];\nPlayState._spawnDoor = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnDoor\"];\nPlayState._spawnCoin = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnCoin\"];\nPlayState._createHud = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_createHud\"];\nPlayState._spawnBug = _utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnBug\"];\nPlayState._spawnEnemyWall =_utils_levelLoader__WEBPACK_IMPORTED_MODULE_6__[\"_spawnEnemyWall\"];\n\n// PlayState.render = function(){\n// nice for debugging\n//     PlayState.game.debug.body(PlayState.hero);\n\n// }\n\nwindow.onload = function () {\n    let game = new Phaser.Game(1280, 1024, Phaser.AUTO, 'game');\n    let gameMenu = new capmaningamemenu__WEBPACK_IMPORTED_MODULE_0___default.a(\n        {\n            title: 'capman Crashing bugs',\n            background: 'assets/img/utilities/Game-Menu.png',\n            buttons: [\n                {\n                    id: 'onePlayer',\n                    text: '- start one player -'\n                },\n                {\n                    id: 'home',\n                    text: '- Back to Home -'\n                }\n            ]\n        },\n        (button) =>{\n            game.state.start('play', true, false, {level: 0}); \n        }\n    );\n\n    game.state.add('gameMenu', gameMenu);\n    game.state.add('play', PlayState);\n    game.state.start('gameMenu', true, false, {level: 0});\n};\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/states/create.js":
/*!*********************************!*\
  !*** ./src/js/states/create.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function()  {\n    this.sfx = {\n        coin: this.game.add.audio('sfx:coin'),\n        lose: this.game.add.audio('sfx:lose'),\n        win: this.game.add.audio('sfx:win'),\n        woosh: this.game.add.audio('sfx:woosh'),\n        land: this.game.add.audio('sfx:land'),\n        door: this.game.add.audio('sfx:door'),\n        jump: this.game.add.audio('sfx:jump'),\n        splat: this.game.add.audio('sfx:splat')\n    };\n    this.game._sfx = this.sfx;\n    this.game.stage.backgroundColor = '#33ccff';\n    this.game.add.sprite(0, 0, 'bg');\n    this.game.world.setBounds(0, 0, 4000, 2000);\n\n    //tileSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');\n\n    this.emitter = this.game.add.emitter(0, 0, 100);\n\n    this.emitter.makeParticles('icon:coin');\n  \n\n    \n    this.game.physics.startSystem(Phaser.Physics.P2JS);\n    this._loadLevel(this.game.cache.getJSON(`level:${this.level}`));\n    this._createHud();\n});\n\n//# sourceURL=webpack:///./src/js/states/create.js?");

/***/ }),

/***/ "./src/js/states/init.js":
/*!*******************************!*\
  !*** ./src/js/states/init.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(data)  {\n    this.game.renderer.renderSession.roundPixels = true;\n    this.scorep1 = 0;\n    this.keys = this.game.input.keyboard.addKeys({\n        left: Phaser.KeyCode.LEFT,\n        right: Phaser.KeyCode.RIGHT,\n        up: Phaser.KeyCode.ALT,\n        fire: Phaser.KeyCode.CONTROL\n    });\n    this.level = (data.level || 0) % this.LEVEL_COUNT;\n});\n\n\n//# sourceURL=webpack:///./src/js/states/init.js?");

/***/ }),

/***/ "./src/js/states/preload.js":
/*!**********************************!*\
  !*** ./src/js/states/preload.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function()  {\n    this.game.load.json('level:0', 'assets/levels/level00.json');\n    this.game.load.json('level:1', 'assets/levels/level01.json');\n        \n\n    //assets for capman\n    this.game.load.atlasJSONHash('capManSheet', 'assets/img/Capman/capMan.png', 'assets/img/Capman/capMan.json');\n    this.game.load.atlasJSONHash('bug', 'assets/img/Bug/bug.png', 'assets/img/Bug/sprites.json');\n    this.game.load.image('hiddenWall', 'assets/img/utilities/invisible_wall.png');\n\n    this.game.load.image('ground', 'assets/img/extra/ground.png')\n    this.game.load.image('grass1x1', 'assets/img/extra/grass_1x1.png')\n    this.game.load.image('grass2x1', 'assets/img/extra/grass_2x1.png')\n    this.game.load.image('grass4x1', 'assets/img/extra/grass_4x1.png')\n    this.game.load.image('grass6x1', 'assets/img/extra/grass_6x1.png')\n    this.game.load.image('grass8x1', 'assets/img/extra/grass_8x1.png')\n\n    this.game.load.image('bg', 'assets/img/extra/background.png')\n    this.game.load.image('font:numbers', 'assets/img/extra/numbers.png');\n\n    this.game.load.audio('sfx:coin', 'assets/audio/coin.wav');\n    this.game.load.audio('sfx:lose', 'assets/audio/hero-lose.wav');\n    this.game.load.audio('sfx:win', 'assets/audio/hero-win.wav');\n    this.game.load.audio('sfx:woosh', 'assets/audio/woosh.mp3');\n    this.game.load.audio('sfx:jump', 'assets/audio/jump.wav');\n    this.game.load.audio('sfx:land', 'assets/audio/land.wav');\n    this.game.load.audio('sfx:door', 'assets/audio/door.wav');\n    this.game.load.audio('sfx:splat', 'assets/audio/splat.wav');\n\n\n    \n\n\n\n\n    this.game.load.spritesheet('coin', 'assets/img/test/fullCoins.png', 16, 16);\n\n    this.game.load.image('icon:coin', 'assets/img/test/coin_icon.png');\n\n\n    this.game.load.image('groundStart', 'assets/img/test/Tiles/groundStart.png');\n    this.game.load.image('groundMid', 'assets/img/test/Tiles/groundMid.png');\n    this.game.load.image('groundEnd', 'assets/img/test/Tiles/groundEnd.png');\n    this.game.load.image('platformFull', 'assets/img/test/Tiles/platformFull.png');\n    this.game.load.image('halfTile', 'assets/img/test/Tiles/halfTile.png');\n    this.game.load.image('spikes', 'assets/img/test/Tiles/Spike.png');\n    this.game.load.image('doorOpen', 'assets/img/test/Objects/DoorOpen.png');\n});\n\n\n//# sourceURL=webpack:///./src/js/states/preload.js?");

/***/ }),

/***/ "./src/js/states/update.js":
/*!*********************************!*\
  !*** ./src/js/states/update.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function()  {\n    this._handleCollisions();\n    this._handleInput();\n    this.coinFont.text = `x${this.scorep1}`;\n    this.game.camera.focusOnXY(this.hero.x, this.hero.y - 400)\n    //this.game.camera.x = this.hero.x -40;\n});\n\n\n\n//# sourceURL=webpack:///./src/js/states/update.js?");

/***/ }),

/***/ "./src/js/utils/colisionDetector.js":
/*!******************************************!*\
  !*** ./src/js/utils/colisionDetector.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function()  {\n    this.game.physics.arcade.collide(this.hero, this.platforms);\n    this.game.physics.arcade.collide(this.bugs, this.platforms);\n    this.game.physics.arcade.collide(this.bugs, this.hiddenWalls);\n\n    this.game.physics.arcade.overlap(this.hero, this.traps,\n        this._onHeroVsEnemy, null, this);\n\n    this.game.physics.arcade.overlap(this.hero, this.bugs,\n        this._onHeroVsEnemy, null, this);\n\n    this.game.physics.arcade.overlap(this.hero, this.doors,\n        this._onHeroVsDoor, null, this);\n\n    this.game.physics.arcade.overlap(this.hero, this.coins, this._onHeroVsCoin,\n        null, this);\n\n    this._onHeroVsEnemy = function (hero, enemy) {\n        \n        if(hero.attacking){\n            enemy.die()\n        }else{\n                    \n            hero.die();\n            //this.sfx.stomp.play();\n            hero.events.onKilled.addOnce(function () {\n                this.game.state.restart(true, false, {level: this.level});\n            }, this);\n\n        }\n\n\n        // NOTE: bug in phaser in which it modifies 'touching' when\n        // checking for overlaps. This undoes that change so spiders don't\n        // 'bounce' agains the hero\n        //enemy.body.touching = enemy.body.wasTouching;\n\n        \n    };\n\n    this._onHeroVsDoor = function (hero, enemy) {\n        this.game._sfx.win.onStop.addOnce( ()=>{\n            this.game.state.restart(true, false, { level: this.level + 1 });\n        });\n        if(!this.winning) {\n            this.winning = true;\n            this.emitter.x = hero.x;\n            this.emitter.y = hero.y - 800;\n            this.emitter.start(true, 4000, null, 30);\n            this.game._sfx.win.play();\n        }\n\n        \n    };\n\n    this._onHeroVsCoin = function (hero, coin) {\n        this.sfx.coin.play();\n        this.scorep1++;\n        coin.kill();\n    };\n});\n\n//# sourceURL=webpack:///./src/js/utils/colisionDetector.js?");

/***/ }),

/***/ "./src/js/utils/inputHandler.js":
/*!**************************************!*\
  !*** ./src/js/utils/inputHandler.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function()  {\n    this.keys.up.onDown.add(function () {\n        this.hero.jump();\n    }, this);\n\n    this.keys.fire.onDown.add(function () {\n        this.hero.defaultAttack();\n    }, this);\n    if (this.keys.left.isDown) { // move hero left\n        this.hero.move(-1);\n    }\n    else if (this.keys.right.isDown) { // move hero right\n        this.hero.move(1);\n    } \n    else { // stop\n        this.hero.move(0);\n    }\n});\n\n//# sourceURL=webpack:///./src/js/utils/inputHandler.js?");

/***/ }),

/***/ "./src/js/utils/levelLoader.js":
/*!*************************************!*\
  !*** ./src/js/utils/levelLoader.js ***!
  \*************************************/
/*! exports provided: _loadLevel, _spawnPlatform, _spawnEnemyWall, _spawnTrap, _spawnBug, _spawnCharacters, _spawnDoor, _spawnCoin, _createHud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_loadLevel\", function() { return _loadLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnPlatform\", function() { return _spawnPlatform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnEnemyWall\", function() { return _spawnEnemyWall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnTrap\", function() { return _spawnTrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnBug\", function() { return _spawnBug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnCharacters\", function() { return _spawnCharacters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnDoor\", function() { return _spawnDoor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_spawnCoin\", function() { return _spawnCoin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_createHud\", function() { return _createHud; });\n/* harmony import */ var _heros_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../heros/hero */ \"./src/js/heros/hero.js\");\n/* harmony import */ var _bugs_bugOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bugs/bugOne */ \"./src/js/bugs/bugOne.js\");\n\n\n\nfunction _loadLevel(data) {\n    this.platforms = this.game.add.group();\n    this.traps = this.game.add.group();\n    this.doors = this.game.add.group();\n    this.coins = this.game.add.group();\n    this.bugs = this.game.add.group();\n    this.hiddenWalls = this.game.add.group();\n    this.hiddenWalls.visible = false;\n    data.platforms.forEach(this._spawnPlatform, this);\n    data.doors.forEach(this._spawnDoor, this);\n    data.traps.forEach(this._spawnTrap, this);\n    data.coins.forEach(this._spawnCoin, this);\n    data.bugs.forEach(this._spawnBug, this);\n\n    this._spawnCharacters({hero: data.hero});\n\n    const GRAVITY = 1200;\n    this.game.physics.arcade.gravity.y = GRAVITY;\n} \n\nfunction _spawnPlatform (platform) {\n\n    let sprite = this.platforms.create(\n        platform.x, platform.y, platform.image);\n    //sprite.scale.setTo(0.3, 0.3);\n\n\n\n    this.game.physics.enable(sprite);\n    sprite.body.allowGravity = false;\n    sprite.body.immovable = true;\n\n\n    if(platform.enemyWall){\n        //console.log(this.game.cache.getImage(platform.image).width)\n        this._spawnEnemyWall(platform.x, platform.y-40);\n        this._spawnEnemyWall(platform.x + this.game.cache.getImage(platform.image).width -15, platform.y-40);\n    }\n\n \n\n}\n\nfunction _spawnEnemyWall (x, y) {\n    let sprite = this.hiddenWalls.create(x, y, 'hiddenWall');\n    // anchor and y displacement\n   // sprite.anchor.set(side === 'left' ? 1 : 0, 1);\n    // physic properties\n    this.game.physics.enable(sprite);\n    sprite.body.immovable = true;\n    sprite.body.allowGravity = false;\n};\n\n\n\nfunction _spawnTrap (trap) {\n\n    let sprite = this.traps.create(\n        trap.x, trap.y, trap.image);\n    sprite.scale.setTo(0.3, 0.3);\n\n    const cropRect = new Phaser.Rectangle(0, 100, 256, 256);\n    sprite.crop(cropRect);\n\n    this.game.physics.enable(sprite);\n    sprite.body.allowGravity = false;\n    sprite.body.immovable = true;\n\n}\nfunction _spawnBug (bug) {\n    let sprite = new _bugs_bugOne__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.game, bug.x, bug.y);\n    this.bugs.add(sprite);\n}\n\nfunction _spawnCharacters (data) {\n    // spawn hero\n    this.hero = new _heros_hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.game, data.hero.x, data.hero.y);\n    this.game.add.existing(this.hero);\n};\n\nfunction _spawnDoor (door) {\n\n    let sprite = this.doors.create(\n        door.x, door.y, door.image);\n    sprite.scale.setTo(0.3, 0.3);\n\n    this.game.physics.enable(sprite);\n    sprite.body.allowGravity = false;\n    sprite.body.immovable = true;\n    sprite.body.setSize(100,100)\n\n}\n\nfunction _spawnCoin (coin) {\n    let sprite = this.coins.create(coin.x, coin.y, 'coin');\n    sprite.scale.setTo(2, 2);\n    sprite.anchor.set(0.5, 0.5);\n    sprite.animations.add('rotate', [0, 1, 2, 3, 4, 5, 6, 7], 9, true); // 6fps, looped\n    sprite.animations.play('rotate');\n    this.game.physics.enable(sprite);\n    sprite.body.allowGravity = false;;\n}\n\nfunction _createHud () {\n    this.keyIcon = this.game.make.image(0, 19, 'icon:key');\n    this.keyIcon.anchor.set(0, 0.5);\n    let coinIcon = this.game.make.image(this.keyIcon.width + 7, 0, 'icon:coin');\n    const NUMBERS_STR = '0123456789X ';\n    this.coinFont = this.game.add.retroFont('font:numbers', 20, 26,\n        NUMBERS_STR, 6);\n\n    let coinScoreImg = this.game.make.image(coinIcon.x + coinIcon.width,\n        coinIcon.height / 2, this.coinFont);\n    coinScoreImg.anchor.set(0, 0.5);\n\n    this.hud = this.game.add.group();\n    this.hud.add(coinIcon);\n    this.hud.position.set(10, 10);\n    this.hud.add(coinScoreImg);\n    this.hud.add(this.keyIcon);\n    this.hud.fixedToCamera = true;\n};\n\n\n//# sourceURL=webpack:///./src/js/utils/levelLoader.js?");

/***/ })

/******/ });