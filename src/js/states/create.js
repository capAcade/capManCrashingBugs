export default function()  {
    this.game.stage.backgroundColor = '#ccebff';
    //this.game.add.image(0, 0, 'background');
    this._loadLevel(this.game.cache.getJSON('level:0'));
}
