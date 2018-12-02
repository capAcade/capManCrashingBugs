export default function()  {
    this.game.physics.arcade.collide(this.hero, this.platforms);
    this.game.physics.arcade.collide(this.bugs, this.platforms);

    this.game.physics.arcade.overlap(this.hero, this.traps,
        this._onHeroVsEnemy, null, this);

    this.game.physics.arcade.overlap(this.hero, this.doors,
        this._onHeroVsDoor, null, this);

    this.game.physics.arcade.overlap(this.hero, this.coins, this._onHeroVsCoin,
        null, this);

    this._onHeroVsEnemy = function (hero, enemy) {
        console.log('kom ik hier?');

        hero.die();
        //this.sfx.stomp.play();
        hero.events.onKilled.addOnce(function () {
            this.game.state.restart(true, false, {level: this.level});
        }, this);

        // NOTE: bug in phaser in which it modifies 'touching' when
        // checking for overlaps. This undoes that change so spiders don't
        // 'bounce' agains the hero
        //enemy.body.touching = enemy.body.wasTouching;

        
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