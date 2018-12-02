export default function()  {
    this.sfx = {
        coin: this.game.add.audio('sfx:coin')
    };
    this.game.stage.backgroundColor = '#33ccff';
    //this.game.add.image(0, 0, 'background');

    //tileSprite = this.game.add.tileSprite(0, 0, 800, 600, 'background');
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this._loadLevel(this.game.cache.getJSON(`level:${this.level}`));
    this._createHud();
}