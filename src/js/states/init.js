export default function(data)  {
    this.game.renderer.renderSession.roundPixels = true;
    this.scorep1 = 0;
    this.hasKey = false;
    this.keys = this.game.input.keyboard.addKeys({
        left: Phaser.KeyCode.LEFT,
        right: Phaser.KeyCode.RIGHT,
        up: Phaser.KeyCode.ALT,
        fire: Phaser.KeyCode.CONTROL
    });
    this.level = (data.level || 0) % this.LEVEL_COUNT;
}
