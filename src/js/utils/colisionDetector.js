export default function()  {
    this.game.physics.arcade.collide(this.hero, this.platforms);
    this.game.physics.arcade.collide(this.bugs, this.platforms);
    this.game.physics.arcade.collide(this.bugs, this.hiddenWalls);

    this.game.physics.arcade.overlap(this.hero, this.traps,
        this._onHeroVsEnemy, null, this);

    this.game.physics.arcade.overlap(this.hero, this.bugs,
        this._onHeroVsEnemy, null, this);

    this.game.physics.arcade.overlap(this.hero, this.doors,
        this._onHeroVsDoor, null, this);

    this.game.physics.arcade.overlap(this.hero, this.coins, this._onHeroVsCoin,
        null, this);

    this._onHeroVsEnemy = function (hero, enemy) {
        
        if(hero.attacking){
            enemy.die()
        }else{
                    
            hero.die();
            //this.sfx.stomp.play();
            hero.events.onKilled.addOnce(function () {
                this.game.state.restart(true, false, {level: this.level});
            }, this);

        }


        // NOTE: bug in phaser in which it modifies 'touching' when
        // checking for overlaps. This undoes that change so spiders don't
        // 'bounce' agains the hero
        //enemy.body.touching = enemy.body.wasTouching;

        
    };

    this._onHeroVsDoor = function (hero, enemy) {
        this.game._sfx.win.onStop.addOnce( ()=>{
            this.game.state.restart(true, false, { level: this.level + 1 });
        });
        if(!this.winning) {
            this.winning = true;
            this.emitter.x = hero.x;
            this.emitter.y = hero.y - 800;
            this.emitter.start(true, 4000, null, 30);
            this.game._sfx.win.play();
        }

        
    };

    this._onHeroVsCoin = function (hero, coin) {
        this.sfx.coin.play();
        this.scorep1++;
        coin.kill();
    };
}