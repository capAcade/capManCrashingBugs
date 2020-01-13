export default function()  {
    if (this.game.paused)
    {
        //  Because preRender still runs even if your game pauses!
        return;
    }
    console.log(this.locked)
    if (this.hero.locked)
    {
        console.log('locked')
        this.hero.x += this.hero.lockedTo.deltaX;
        this.hero.y = this.hero.lockedTo.y - 61;

        if (this.hero.body.velocity.x !== 0)
        {
            this.hero.body.velocity.y = 0;
        }
    }
}