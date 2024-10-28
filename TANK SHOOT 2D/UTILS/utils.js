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
}
    

