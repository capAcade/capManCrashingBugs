export default function()  {
    this.keys.up.onDown.add(function () {
        this.hero.jump();
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