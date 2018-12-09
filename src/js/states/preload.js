export default function()  {
    this.game.load.json('level:0', 'assets/levels/level00.json');
    this.game.load.json('level:1', 'assets/levels/level01.json');
    this.game.load.json('level:2', 'assets/levels/level02.json');
        

    //assets for capman
    this.game.load.atlasJSONHash('capManSheet', 'assets/img/Capman/capMan.png', 'assets/img/Capman/capMan.json');
    this.game.load.atlasJSONHash('bug', 'assets/img/Bug/bug.png', 'assets/img/Bug/sprites.json');
    this.game.load.image('hiddenWall', 'assets/img/utilities/invisible_wall.png');
    this.game.load.image('key', 'assets/img/extra/key.png')
    this.game.load.spritesheet('icon:key', 'assets/img/extra/key_icon.png', 34, 30)
    this.game.load.spritesheet('door', 'assets/img/extra/door.png', 42, 66)
    this.game.load.spritesheet('door-var', 'assets/img/extra/door-var.png', 42, 66)
    this.game.load.spritesheet('decor', 'assets/img/extra/decor.png', 42, 42)

    //platforms
    this.game.load.image('ground', 'assets/img/extra/ground.png')
    this.game.load.image('grass1x1', 'assets/img/extra/grass_1x1.png')
    this.game.load.image('grass2x1', 'assets/img/extra/grass_2x1.png')
    this.game.load.image('grass4x1', 'assets/img/extra/grass_4x1.png')
    this.game.load.image('grass6x1', 'assets/img/extra/grass_6x1.png')
    this.game.load.image('grass8x1', 'assets/img/extra/grass_8x1.png')

    //extra
    this.game.load.image('bg', 'assets/img/extra/background.png')
    this.game.load.image('bg-hint', 'assets/img/extra/bg-with-hint.png')
    this.game.load.image('bg-gray', 'assets/img/extra/bg-gray.png')
    this.game.load.image('font:numbers', 'assets/img/extra/numbers.png');

    //all audio 
    //SFX
    this.game.load.audio('sfx:coin', 'assets/audio/coin.wav');
    this.game.load.audio('sfx:lose', 'assets/audio/hero-lose.wav');
    this.game.load.audio('sfx:win', 'assets/audio/hero-win.wav');
    this.game.load.audio('sfx:woosh', 'assets/audio/woosh.mp3');
    this.game.load.audio('sfx:jump', 'assets/audio/jump.wav');
    this.game.load.audio('sfx:land', 'assets/audio/land.wav');
    this.game.load.audio('sfx:door', 'assets/audio/door.wav');
    this.game.load.audio('sfx:splat', 'assets/audio/splat.wav');


    //Songs
    this.game.load.audio('sfx:theme', 'assets/audio/themeSong.ogg');
    this.game.load.audio('sfx:themeIntro', 'assets/audio/themeintro.wav');
    this.game.load.audio('sequence', 'assets/audio/Sequence.wav');
    this.game.load.audio('rivalry', 'assets/audio/Rivalry.wav');


    




    this.game.load.spritesheet('coin', 'assets/img/test/fullCoins.png', 16, 16);

    this.game.load.image('icon:coin', 'assets/img/test/coin_icon.png');

}
