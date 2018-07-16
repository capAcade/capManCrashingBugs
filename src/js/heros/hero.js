export default class Hero extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'hero');
        this.anchor.set(0.5, 0.5);
        this.scale.setTo(0.25, 0.25);

        const cropRect = new Phaser.Rectangle(75, 60, 385, 466);

        this.crop(cropRect);

        this.game.physics.enable(this);
        this.body.collideWorldBounds = true;
        this.body.setSize(280,455)
        this.animations.add('idle', [1, 2, 3, 4, 5, 6, 7, 8, 9], 9, true);
        this.animations.add('run', [21, 22, 23, 24, 25, 26, 27, 28], 10, true);
        this.animations.add('jump', [11, 12, 13, 14, 15]);
        this.animations.add('fall', [16, 17, 18, 19, 20]);
    }
    move(direction) {
        const SPEED = 200;
        this.body.velocity.x = direction * SPEED;

        if (this.body.velocity.x < 0) {
            this.scale.x = -0.25;
        }
        else if (this.body.velocity.x > 0) {
            this.scale.x = 0.25;
        }
    }
    jump() {
        const JUMP_SPEED = 600;
        let canJump = this.body.touching.down;
    
        if (canJump) {
            this.body.velocity.y = -JUMP_SPEED;
        }
    
        return canJump;
    }
    getAnimationName() {
        let name = 'idle'; // default animation

        // jumping
        if (this.body.velocity.y < 0) {
            name = 'jump';
        }
        // falling
        else if (this.body.velocity.y >= 0 && !this.body.touching.down) {
            name = 'fall';
        }
        else if (this.body.velocity.x !== 0 && this.body.touching.down) {
            name = 'run';
        }
    
        return name;
    }
    update() {
        let animationName = this.getAnimationName();
        if (this.animations.name !== animationName) {
            this.animations.play(animationName);
        }
    }
};
