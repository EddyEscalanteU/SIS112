class GameManager{
    puntuacion;
    nivelActual;

    constructor(_puntuacion, _nivelActual) {
        this.puntuacion = _puntuacion;
        this.nivelActual = _nivelActual;
    }

    reiniciarNivel() {
        this.puntuacion = 0;
        this.nivelActual = 1;
    }

    actualizarPuntuacion(puntos) {
        this.puntuacion += puntos;
    }

    siguienteNivel() {
        this.nivelActual++;
    }
}