export default function()  {
    this.sfx = {
        coin: this.game.add.audio('sfx:coin'),
        lose: this.game.add.audio('sfx:lose'),
        win: this.game.add.audio('sfx:win'),
        woosh: this.game.add.audio('sfx:woosh'),
        land: this.game.add.audio('sfx:land'),
        door: this.game.add.audio('sfx:door'),
        jump: this.game.add.audio('sfx:jump'),
        splat: this.game.add.audio('sfx:splat'),
        theme: this.game.add.audio('sfx:theme'),
        themeIntro: this.game.add.audio('sfx:themeIntro'),
        sequence: this.game.add.audio('sequence'),
        rivalry: this.game.add.audio('rivalry'),
    };
    this.game._levelConfig = this.game.cache.getJSON(`level:${this.level}`);
    this.game._sfx = this.sfx;
    this.game.stage.backgroundColor = '#33ccff';
    this.game.add.sprite(0, 0, this.game._levelConfig.bg);
    this.game.world.setBounds(0, 0, 4000, 1024);
    this.game._sfx[this.game._levelConfig.music].play();

    //tileSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');

    this.game._sfx.woosh.volume = 0.3;
    this.game._sfx.land.volume = 0.4;
    this.game._sfx.jump.volume = 0.4;
    this.game._sfx.splat.volume = 0.7;
    this.game._sfx.coin.volume = 0.6;
    this.game._sfx.door.volume = 0.9;
    this.game._sfx.lose.volume = 0.7;

    this.emitter = this.game.add.emitter(0, 0, 100);

    this.emitter.makeParticles('icon:coin');
  

    
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this._loadLevel(this.game._levelConfig);
    this._createHud();
}