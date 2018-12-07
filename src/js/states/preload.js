export default function()  {
    this.game.load.json('level:0', 'assets/levels/level00.json');
    this.game.load.json('level:1', 'assets/levels/level01.json');
        

    //assets for capman
    this.game.load.atlasJSONHash('capManSheet', 'assets/img/Capman/capMan.png', 'assets/img/Capman/capMan.json');
    this.game.load.atlasJSONHash('bug', 'assets/img/Bug/bug.png', 'assets/img/Bug/sprites.json');
    this.game.load.image('hiddenWall', 'assets/img/utilities/invisible_wall.png');

    this.game.load.image('ground', 'assets/img/extra/ground.png')
    this.game.load.image('grass1x1', 'assets/img/extra/grass_1x1.png')
    this.game.load.image('grass2x1', 'assets/img/extra/grass_2x1.png')
    this.game.load.image('grass4x1', 'assets/img/extra/grass_4x1.png')
    this.game.load.image('grass6x1', 'assets/img/extra/grass_6x1.png')
    this.game.load.image('grass8x1', 'assets/img/extra/grass_8x1.png')

    this.game.load.image('bg', 'assets/img/extra/background.png')
    this.game.load.image('font:numbers', 'assets/img/extra/numbers.png');

    this.game.load.audio('sfx:coin', 'assets/audio/coin.wav');
    this.game.load.audio('sfx:lose', 'assets/audio/hero-lose.wav');
    this.game.load.audio('sfx:win', 'assets/audio/hero-win.wav');
    this.game.load.audio('sfx:woosh', 'assets/audio/woosh.mp3');
    this.game.load.audio('sfx:jump', 'assets/audio/jump.wav');
    this.game.load.audio('sfx:land', 'assets/audio/land.wav');
    this.game.load.audio('sfx:door', 'assets/audio/door.wav');


    




    this.game.load.spritesheet('coin', 'assets/img/test/fullCoins.png', 16, 16);

    this.game.load.image('icon:coin', 'assets/img/test/coin_icon.png');


    this.game.load.image('groundStart', 'assets/img/test/Tiles/groundStart.png');
    this.game.load.image('groundMid', 'assets/img/test/Tiles/groundMid.png');
    this.game.load.image('groundEnd', 'assets/img/test/Tiles/groundEnd.png');
    this.game.load.image('platformFull', 'assets/img/test/Tiles/platformFull.png');
    this.game.load.image('halfTile', 'assets/img/test/Tiles/halfTile.png');
    this.game.load.image('spikes', 'assets/img/test/Tiles/Spike.png');
    this.game.load.image('doorOpen', 'assets/img/test/Objects/DoorOpen.png');
}
