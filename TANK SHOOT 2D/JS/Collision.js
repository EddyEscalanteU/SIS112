class Collision{
    posX;
    posY;
    duracion;
    frames;
    
    constructor(_posX, _posY, _duracion) {
        this.posX = _posX;
        this.posY = _posY;
        this.duracion = _duracion;
        this.frames = 0;
    }

    playAnimation(ctx) {
        if (this.frames < this.duracion) {
            ctx.fillStyle = 'orange';
            ctx.beginPath();
            ctx.arc(this.posX, this.posY, 20 + this.frames, 0, Math.PI * 2);
            ctx.fill();
            this.frames++;
        }
    }
}