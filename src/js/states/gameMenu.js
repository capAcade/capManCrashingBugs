
const setFocusButton = (context, indexLast, indexNew) =>{
    console.log(indexLast, indexNew);
    context._buttons[indexNew].addColor('#ffff00', 0);
    context._buttons[indexLast].addColor('#ffffff', 0);
}

const handleInput = (context) => {
    let lastButton = context.selectedButton;
    let timer;
    context.selectedButton = (context.selectedButton || 0) % context._buttons.length;
    if (context.keys.down.isDown) {
        context.selectedButton = (context.selectedButton + 1) % context._buttons.length;
        setFocusButton(context, lastButton, context.selectedButton)
        console.log('key down')
    }
    else if (context.keys.up.isDown) {
        context.selectedButton = (context.selectedButton - 1) % context._buttons.length;

        if(context.selectedButton < 0){
            context.selectedButton = 0
        };

        setFocusButton(context, lastButton, context.selectedButton)
        console.log('keyisup')
    } 
    else {
        //console.log('keypressisstoped')
    }
 };

export default class GameMenu {
    constructor(config, cb) {
        this.config = config;
        this.cb = cb;
    }
    preload() {
        this.game.load.image('bg', this.config.background);
        this.game.load.image('logo', this.config.logo);

    }
    init() {
        this.game.renderer.renderSession.roundPixels = true;
        this.keys = this.game.input.keyboard.addKeys({
            down: Phaser.KeyCode.DOWN,
            up: Phaser.KeyCode.UP
        });
    }
    create() {
        this.game.stage.backgroundColor = '#000033';
        var bg = this.game.add.image(0, 0, 'bg');
        var logo = this.game.add.image(this.game.world.centerX, this.game.world.centerY -300, 'logo');
        logo.anchor.set(0.5);
        bg.height = this.game.height;
        bg.width = this.game.width;
        var style = { font: "65px Arial", fill: "#ffffff", align: "center" };
        let offSet = 0;

        this._buttons = this.config.buttons.map((button)=>{
            let out = this.game.add.text(this.game.world.centerX, this.game.world.centerY + offSet, button.text, style);
            out.anchor.set(0.5);
            offSet = offSet + 90;
            return out
        });
        this._buttons[0].addColor('#ffff00', 0);
    }
    update () {
        handleInput(this);

    }
}
