export default class BugOne extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'capManBug1');
        // anchor
        this.anchor.set(0.5);
        this.scale.setTo(0.25, 0.25);


        const cropRect = new Phaser.Rectangle(75, 60, 200, 466);

        this.crop(cropRect);

        // animation
        this.animations.add('crawl', [0, 1], 8, true);
        this.animations.add('die', [0, 4, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3], 12);
        this.animations.play('crawl');
    



        // physic properties
        this.game.physics.enable(this);
        this.body.collideWorldBounds = true;
        this.SPEED = 100;
        this.body.velocity.x = this.SPEED;

    }
    update () {
        // check against walls and reverse direction if necessary
        if (this.body.touching.right || this.body.blocked.right) {
            this.body.velocity.x = -this.SPEED; // turn left
        }
        else if (this.body.touching.left || this.body.blocked.left) {
            this.body.velocity.x = this.SPEED; // turn right
        }
    }
    die () {
        this.body.enable = false;
    
        this.animations.play('die').onComplete.addOnce(function () {
            this.kill();
        }, this)
    }
};
