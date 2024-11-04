class Wall{
    posX;
    posY;
    nombre;
    tipo;
    imagen = new Image();

    constructor(_posX, _posY, _nombre, _tipo, _imagen){
        this.posX = _posX;
        this.posY = _posY;
        this.nombre = _nombre;
        this.tipo = _tipo;
        this.imagen = _imagen;
    }
}