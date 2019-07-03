export default function(data)  {
    this.game.renderer.renderSession.roundPixels = true;
    this.scorep1 = 0;
    this.hasKey = false;
    this.winning = false;




        var inputOne = {
            "down": this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN).isDown,
            "white": this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown,
            "blue1": this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT).isDown,
            "blue2": this.game.input.keyboard.addKey(Phaser.Keyboard.P).isDown,
            "blue3": this.game.input.keyboard.addKey(Phaser.Keyboard.Z).isDown,
        };
        var inputTwo = {
            "up": this.game.input.keyboard.addKey(Phaser.Keyboard.R).isDown,
            "down": this.game.input.keyboard.addKey(Phaser.Keyboard.F).isDown,
            "white": this.game.input.keyboard.addKey(Phaser.Keyboard.Q).isDown,
            "black": this.game.input.keyboard.addKey(Phaser.Keyboard.S).isDown,
            "blue1": this.game.input.keyboard.addKey(Phaser.Keyboard.W).isDown,
            "blue2": this.game.input.keyboard.addKey(Phaser.Keyboard.K).isDown,
            "blue3": this.game.input.keyboard.addKey(Phaser.Keyboard.I).isDown
        };





    this.keys = this.game.input.keyboard.addKeys({
        left: Phaser.KeyCode.A,
        right: Phaser.KeyCode.D,
        up: Phaser.KeyCode.J,
        fire: Phaser.KeyCode.U
    });
    this.lastLevel = 1;
    this.level = (data.level || 0) % this.LEVEL_COUNT;
}
