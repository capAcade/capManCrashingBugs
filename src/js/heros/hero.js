export default class Hero extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'capManSheet');
        this.anchor.set(0.5);
        this.scale.setTo(0.25, 0.25);
        //const cropRect = new Phaser.Rectangle(1, 60, 500, 404);

        //this.crop(cropRect);

        
        this.game.physics.enable(this);
        this.body.collideWorldBounds = true;
        this.body.setSize(331, 490, 0, 0);


        this.animations.add('idle', ['idle']);
        this.animations.add('run', ['walk-1', 'walk-2'], 8, true); // 8fps looped
        this.animations.add('jump', ['jump']);
        this.animations.add('fall', ['land']);
        this.animations.add('die', ['die-1', 'die-2'], 8, true); // 12fps no loop
        this.animations.add('defaultAttack', ['stab-1', 'stab-2', 'stab-2', 'stab-2', 'stab-1'], 12);
        this.attacking = false;



        // this.animations.add('idle', [1, 2, 3, 4, 5, 6, 7, 8, 9], 9, true);
        // this.animations.add('run', [21, 22, 23, 24, 25, 26, 27, 28], 10, true);
        // this.animations.add('jump', [11, 12, 13, 14, 15]);
        // this.animations.add('fall', [16, 17, 18, 19, 20]);
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
        this.game._sfx.jump.play();
        const JUMP_SPEED = 700;
        let canJump = this.body.touching.down;
        if (canJump) {
            this.body.velocity.y = -JUMP_SPEED;
        }
        return canJump;
    }
    defaultAttack() {
        if(this.alive && !this.attacking){
            this.game._sfx.woosh.play();
            this.attacking = true;
            this.body.setSize(911, 490, 0, 0);
            this.animations.play('defaultAttack').onComplete.addOnce(function () {
                this.attacking = false;
                this.body.setSize(331, 490, 0, 0);
            }, this);
        }
    }
    getAnimationName() {
        let name = 'idle'; // default animation

        // jumping
        if (this.body.velocity.y < 0) {
            this.jumped = true;
            name = 'jump';
        }
        // falling
        else if (this.body.velocity.y >= 0 && !this.body.touching.down) {
            name = 'fall';
        }
        else if (this.body.velocity.x !== 0 && this.body.touching.down) {
            name = 'run';
        }
        if(this.body.touching.down && this.jumped){
            this.game._sfx.land.play();
            this.jumped = false;
        }
        return name;
    }
    update() {
        let animationName = this.getAnimationName();
        if (this.animations.name !== animationName && this.alive && !this.attacking) {
           this.animations.play(animationName);
        }
    }
    die() {
        this.alive = false;
        this.body.enable = false;
        this.game._sfx.lose.onStop.addOnce( ()=>{
            this.kill();
        });
        this.game._sfx.lose.play();
        this.animations.play('die').onComplete.addOnce(function () {

        }, this);
    };
};
