export default function()  {
    this.game.physics.arcade.collide(this.hero, this.platforms);

    this.game.physics.arcade.overlap(this.hero, this.traps,
        this._onHeroVsEnemy, null, this);

        this._onHeroVsEnemy = function (hero, enemy) {
            //debugger;
            this.game.state.restart();
        };
}