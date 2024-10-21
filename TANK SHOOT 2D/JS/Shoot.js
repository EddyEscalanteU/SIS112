class Shoot{
    posX;
    posY;
    velocidad;
    direccion;

    constructor(_posX, _posY, _velocidad, _direccion){
        this.posX = _posX;
        this.posY = _posY;
        this.velocidad = _velocidad;
        this.direccion = _direccion;
    }

    actualizarPosicion() {
        switch(this.direccion) {
            case 'up':
                this.posY -= this.velocidad;
                break;
            case 'down':
                this.posY += this.velocidad;
                break;
            case 'left':
                this.posX -= this.velocidad;
                break;
            case 'right':
                this.posX += this.velocidad;
                break;
        }
    }

    verificarColision(objeto) {
        return (
            this.posX < objeto.posX + 50 &&
            this.posX + 5 > objeto.posX &&
            this.posY < objeto.posY + 50 &&
            this.posY + 5 > objeto.posY
        );
    }
}