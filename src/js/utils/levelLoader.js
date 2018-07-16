import Hero from '../heros/hero';

export function _loadLevel(data) {
    this.platforms = this.game.add.group();
    this.traps = this.game.add.group();
    this.doors = this.game.add.group();
    data.platforms.forEach(this._spawnPlatform, this);
    data.doors.forEach(this._spawnDoor, this);
    data.traps.forEach(this._spawnTrap, this);
    this._spawnCharacters({hero: data.hero});

    const GRAVITY = 1200;
    this.game.physics.arcade.gravity.y = GRAVITY;
} 

export function _spawnPlatform (platform) {

    let sprite = this.platforms.create(
        platform.x, platform.y, platform.image);
    sprite.scale.setTo(0.3, 0.3);

    if(platform.image === "platformFull" || platform.image ==="halfTile" ){
        const cropRect = new Phaser.Rectangle(0, 0, 256, 128);
        sprite.crop(cropRect);
    }

    this.game.physics.enable(sprite);
    sprite.body.allowGravity = false;
    sprite.body.immovable = true;

}


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

}
