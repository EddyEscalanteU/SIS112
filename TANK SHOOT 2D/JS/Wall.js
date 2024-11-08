class Wall{
    posX;
    posY;
    nombre;
    nroMapa;
    imagen = new Image();

    constructor(_posX, _posY, _ancho, _alto){
        this.posX = _posX;
        this.posY = _posY;
        this.nombre = 'Pared';
        this.nroMapa = 1;
        this.imagen.src = "./ASSETS/pared.webp";
    }
}