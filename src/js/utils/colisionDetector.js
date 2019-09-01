export default function()  {
    this.game.physics.arcade.collide(this.hero, this.platforms);
    this.game.physics.arcade.collide(this.bugs, this.platforms);
    this.game.physics.arcade.collide(this.bugs, this.hiddenWalls);

    this.game.physics.arcade.overlap(this.hero, this.traps,
        this._onHeroVsEnemy, null, this);

    this.game.physics.arcade.overlap(this.hero, this.bugs,
        this._onHeroVsEnemy, null, this);

    this.game.physics.arcade.overlap(this.hero, this.coins, this._onHeroVsCoin,
        null, this);

    this.game.physics.arcade.overlap(this.hero, this.key, this._onHeroVsKey,
        null, this);

    this.game.physics.arcade.overlap(this.hero, this.door, this._onHeroVsDoor,
        // ignore if there is no key or the player is on air
        function (hero, door) {
            console.log(this.hasKey && hero.body.touching.down)
            return this.hasKey && hero.body.touching.down;
        }, this);

    this._onHeroVsEnemy = function (hero, enemy) {
        
        if(hero.attacking){
            enemy.die()
        }else{
                    
            hero.die();
  

        }
        
    };

    this._onHeroVsDoor = function (hero, enemy) {
        this.game._sfx.win.onStop.addOnce( ()=>{
            if(this.lastLevel === this.level){
                this.game._sfx.themeIntro.play();
                this.game.state.start('thanks', true, false, {level: 0});
            } else {
                this.game.state.restart(true, false, { level: this.level + 1 });
            }
            
        });
        if(!this.winning) {
            this.game._sfx[this.game._levelConfig.music].stop();
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

    this._onHeroVsKey = function (hero, key) {
        this.sfx.door.play();
        key.kill();
        this.hasKey = true;
    };
}