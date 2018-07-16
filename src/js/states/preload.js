export default function()  {
    this.game.load.image('background', 'assets/img/background.png');
    //this.game.load.image('hero', 'assets/img/hero_stopped.png');
    this.game.load.json('level:0', 'assets/levels/level00.json');
    this.game.load.image('ground', 'assets/img/ground.png');

    this.game.load.spritesheet('hero', 'assets/img/test/hero-idle.png', 567, 517);
    this.game.load.image('groundStart', 'assets/img/test/Tiles/groundStart.png');
    this.game.load.image('groundMid', 'assets/img/test/Tiles/groundMid.png');
    this.game.load.image('groundEnd', 'assets/img/test/Tiles/groundEnd.png');
    this.game.load.image('platformFull', 'assets/img/test/Tiles/platformFull.png');
    this.game.load.image('halfTile', 'assets/img/test/Tiles/halfTile.png');
    this.game.load.image('spikes', 'assets/img/test/Tiles/Spike.png');
    this.game.load.image('doorOpen', 'assets/img/test/Objects/DoorOpen.png');
}

