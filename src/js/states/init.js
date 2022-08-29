export default function(data)  {
    this.game.renderer.renderSession.roundPixels = true;
    this.scorep1 = 0;
    this.hasKey = false;
    this.winning = false;

    var keys = JSON.parse(localStorage.getItem("capManKeys"));
    if(keys === null) {
        keys = {
            playerOne: {
                up: '',
                down: '',
                left: Phaser.KeyCode.A,
                right: Phaser.KeyCode.D,
                green: Phaser.KeyCode.J,
                black: Phaser.KeyCode.U,
                white: '',
                blueBelowWhite: '',
                topRightBlue: '',
                buttomRightBlue: ''
            },
            playerTwo: {
                up: '',
                down: '',
                left: '',
                right: '',
                green: '',
                black: '',
                white: '',
                blueBelowWhite: '',
                topRightBlue: '',
                buttomRightBlue: ''
            },
            pinBallLeft: '',
            pinBallRight: '',
            OnePlayerSelection: '',
            TwoPlayerSelection: ''
        }
    }

    this.keys = this.game.input.keyboard.addKeys({
        left: keys.playerOne.left,
        right: keys.playerOne.right,
        up: keys.playerOne.green,
        fire: keys.playerOne.black
    });
    this.lastLevel = 0;
    this.level = (data.level || 0) % this.LEVEL_COUNT;
}
