export default function()  {
    this.game.physics.arcade.collide(this.hero, this.platforms);

    this.game.physics.arcade.overlap(this.hero, this.traps,
        this._onHeroVsEnemy, null, this);

    this.game.physics.arcade.overlap(this.hero, this.doors,
        this._onHeroVsDoor, null, this);

    this._onHeroVsEnemy = function (hero, enemy) {
        this.game.state.restart();
    };

    this._onHeroVsDoor = function (hero, enemy) {
        this.game.state.restart();
    };
}