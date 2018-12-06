import Hero from '../heros/hero';
import BugOne from '../bugs/bugOne';

export function _loadLevel(data) {
    this.platforms = this.game.add.group();
    this.traps = this.game.add.group();
    this.doors = this.game.add.group();
    this.coins = this.game.add.group();
    this.bugs = this.game.add.group();
    this.hiddenWalls = this.game.add.group();
    this.hiddenWalls.visible = false;
    data.platforms.forEach(this._spawnPlatform, this);
    data.doors.forEach(this._spawnDoor, this);
    data.traps.forEach(this._spawnTrap, this);
    data.coins.forEach(this._spawnCoin, this);
    data.bugs.forEach(this._spawnBug, this);

    this._spawnCharacters({hero: data.hero});

    const GRAVITY = 1200;
    this.game.physics.arcade.gravity.y = GRAVITY;
} 

export function _spawnPlatform (platform) {

    let sprite = this.platforms.create(
        platform.x, platform.y, platform.image);
    //sprite.scale.setTo(0.3, 0.3);



    this.game.physics.enable(sprite);
    sprite.body.allowGravity = false;
    sprite.body.immovable = true;


    if(platform.enemyWall){
        //console.log(this.game.cache.getImage(platform.image).width)
        this._spawnEnemyWall(platform.x, platform.y-40);
        this._spawnEnemyWall(platform.x + this.game.cache.getImage(platform.image).width -15, platform.y-40);
    }

 

}

export function _spawnEnemyWall (x, y) {
    let sprite = this.hiddenWalls.create(x, y, 'hiddenWall');
    // anchor and y displacement
   // sprite.anchor.set(side === 'left' ? 1 : 0, 1);
    // physic properties
    this.game.physics.enable(sprite);
    sprite.body.immovable = true;
    sprite.body.allowGravity = false;
};



export function _spawnTrap (trap) {

    let sprite = this.traps.create(
        trap.x, trap.y, trap.image);
    sprite.scale.setTo(0.3, 0.3);

    const cropRect = new Phaser.Rectangle(0, 100, 256, 256);
    sprite.crop(cropRect);

    this.game.physics.enable(sprite);
    sprite.body.allowGravity = false;
    sprite.body.immovable = true;

}
export function _spawnBug (bug) {
    let sprite = new BugOne(this.game, bug.x, bug.y);
    this.bugs.add(sprite);
}

export function _spawnCharacters (data) {
    // spawn hero
    this.hero = new Hero(this.game, data.hero.x, data.hero.y);
    this.game.add.existing(this.hero);
};

export function _spawnDoor (door) {

    let sprite = this.doors.create(
        door.x, door.y, door.image);
    sprite.scale.setTo(0.3, 0.3);

    this.game.physics.enable(sprite);
    sprite.body.allowGravity = false;
    sprite.body.immovable = true;
    sprite.body.setSize(100,100)

}

export function _spawnCoin (coin) {
    let sprite = this.coins.create(coin.x, coin.y, 'coin');
    sprite.scale.setTo(2, 2);
    sprite.anchor.set(0.5, 0.5);
    sprite.animations.add('rotate', [0, 1, 2, 3, 4, 5, 6, 7], 9, true); // 6fps, looped
    sprite.animations.play('rotate');
    this.game.physics.enable(sprite);
    sprite.body.allowGravity = false;;
}

export function _createHud () {
    this.keyIcon = this.game.make.image(0, 19, 'icon:key');
    this.keyIcon.anchor.set(0, 0.5);
    let coinIcon = this.game.make.image(this.keyIcon.width + 7, 0, 'icon:coin');
    const NUMBERS_STR = '0123456789X ';
    this.coinFont = this.game.add.retroFont('font:numbers', 20, 26,
        NUMBERS_STR, 6);

    let coinScoreImg = this.game.make.image(coinIcon.x + coinIcon.width,
        coinIcon.height / 2, this.coinFont);
    coinScoreImg.anchor.set(0, 0.5);

    this.hud = this.game.add.group();
    this.hud.add(coinIcon);
    this.hud.position.set(10, 10);
    this.hud.add(coinScoreImg);
    this.hud.add(this.keyIcon);
    this.hud.fixedToCamera = true;
};
