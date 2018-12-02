export default function()  {
    this.keys.up.onDown.add(function () {
        this.hero.jump();
    }, this);

    this.keys.fire.onDown.add(function () {
        this.hero.defaultAttack();
    }, this);
    if (this.keys.left.isDown) { // move hero left
        this.hero.move(-1);
    }
    else if (this.keys.right.isDown) { // move hero right
        this.hero.move(1);
    } 
    else { // stop
        this.hero.move(0);
    }
}