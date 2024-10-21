class Game{
    ancho;
    alto;
    estadoJuego;

    constructor(_ancho, _alto, _estadoJuego){
        this.ancho = _ancho;
        this.alto = _alto;
        this.estadoJuego = _estadoJuego;
    }

    start() {
        this.estadoJuego = "playing";
        // Iniciar otros elementos como tanques, puntuación, etc.
    }

    reset() {
        this.estadoJuego = "reset";
        // Reiniciar las posiciones de los tanques, puntuaciones, etc.
    }
}