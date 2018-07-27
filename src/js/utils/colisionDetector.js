export default function()  {
    this.game.physics.arcade.collide(this.hero, this.platforms);

    this.game.physics.arcade.overlap(this.hero, this.traps,
        this._onHeroVsEnemy, null, this);

    this.game.physics.arcade.overlap(this.hero, this.doors,
        this._onHeroVsDoor, null, this);

    this.game.physics.arcade.overlap(this.hero, this.coins, this._onHeroVsCoin,
        null, this);

    this._onHeroVsEnemy = function (hero, enemy) {
        this.game.state.restart(true, false, {level: this.level});
    };

    this._onHeroVsDoor = function (hero, enemy) {
        this.game.state.restart(true, false, { level: this.level + 1 });
    };

    this._onHeroVsCoin = function (hero, coin) {
        this.sfx.coin.play();
        this.scorep1++;
        coin.kill();
    };
}