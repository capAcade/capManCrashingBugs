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
        theme: this.game.add.audio('sfx:theme')
    };
    this.game._sfx = this.sfx;
    this.game.stage.backgroundColor = '#33ccff';
    this.game.add.sprite(0, 0, 'bg');
    this.game.world.setBounds(0, 0, 4000, 2000);
    //this.game._sfx.theme.play();

    //tileSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');

    //this.game._sfx.theme.volume = 0.5;

    this.emitter = this.game.add.emitter(0, 0, 100);

    this.emitter.makeParticles('icon:coin');
  

    
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this._loadLevel(this.game.cache.getJSON(`level:${this.level}`));
    this._createHud();
}