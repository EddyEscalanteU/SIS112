class ListaEnteros {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // Orden ascendente
    }
}

let miLista = new ListaEnteros();
miLista.agregar(5);
miLista.agregar(2);
console.log(miLista.lista); // Imprime: [5, 2]


miLista.eliminar(2); // Elimina el valor 2
console.log(miLista.lista); // Imprime: [5]


let indice = miLista.buscar(5);
console.log(indice); // Imprime: 0 (si 5 está en el índice 0)