export default function()  {
    this.game.stage.backgroundColor = '#000033';
    //this.game.add.image(0, 0, 'background');
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this._loadLevel(this.game.cache.getJSON(`level:${this.level}`));
}
