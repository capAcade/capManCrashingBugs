import Hero from '../heros/hero';

export function _loadLevel(data) {
    data.platforms.forEach(this._spawnPlatform, this);
    this._spawnCharacters({hero: data.hero});
} 

export function _spawnPlatform (platform) {

    this.game.add.sprite(platform.x, platform.y, platform.image);
}

export function _spawnCharacters (data) {
    // spawn hero
    this.hero = new Hero(this.game, data.hero.x, data.hero.y);
    this.game.add.existing(this.hero);
};

