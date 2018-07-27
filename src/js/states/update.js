export default function()  {
    this._handleCollisions();
    this._handleInput();
    this.coinFont.text = `x${this.scorep1}`;
}

