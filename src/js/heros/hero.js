export default class Hero extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'hero');
        this.anchor.set(0.5, 0.5);
    }
    move(direction) {
        this.x += direction * 2.5;
    }
};
