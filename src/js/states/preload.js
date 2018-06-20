export default function()  {
    this.game.load.image('background', 'assets/img/background.png');
    this.game.load.image('hero', 'assets/img/hero_stopped.png');
    this.game.load.json('level:0', 'assets/levels/level00.json');
    this.game.load.image('ground', 'assets/img/ground.png');
    this.game.load.image('grass:8x1', 'assets/img/grass_8x1.png');
    this.game.load.image('grass:6x1', 'assets/img/grass_6x1.png');
    this.game.load.image('grass:4x1', 'assets/img/grass_4x1.png');
    this.game.load.image('grass:2x1', 'assets/img/grass_2x1.png');
    this.game.load.image('grass:1x1', 'assets/img/grass_1x1.png');
}

