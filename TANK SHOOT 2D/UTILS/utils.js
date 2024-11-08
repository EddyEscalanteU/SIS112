class Utils{

    Redondear(valor){
        return Math.round(valor);
    }

    //ANTES
    //canvas.height = Math.round(canvas.height/50) * 50;

    //AHORA
    //canvas.height = Utils.RoundTablero(canvas.height);

    //Redondea el parametro otorgado a un valor multiplo de 50
    RoundTablero(lado){
        return Math.round(lado/50) * 50;
    }

    GetRandomDirection() {
        // Definimos las direcciones posibles
        const directions = ['left', 'right', 'up', 'down']; // Posibles direcciones
        
        // Generar un número aleatorio entre 0 y 1
        const randomNumber = Math.random();
        
        // Multiplicar por el tamaño del array `directions` para escalar el número
        const scaledNumber = randomNumber * directions.length;
        
        // Redondear hacia abajo para obtener un índice válido en el array `directions`
        const randomIndex = Math.floor(scaledNumber);
        
        // Seleccionar y devolver la dirección aleatoria
        return directions[randomIndex];
    }
}
    

