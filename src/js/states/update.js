export default function()  {
    this._handleCollisions();
    this._handleInput();
    this.coinFont.text = `x${this.scorep1}`;
    this.game.camera.focusOnXY(this.hero.x, this.hero.y - 400)
    this.keyIcon.frame = this.hasKey ? 1 : 0;
    this.door.frame = this.hasKey ? 1 : 0;
    //this.game.camera.x = this.hero.x -40;
}

