class ListaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
        this.mostrarLista();
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
        this.mostrarLista();
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // Orden ascendente
        this.mostrarLista();
    }

    mostrarLista() {
        const listaElement = document.getElementById('listaCadenas');
        listaElement.innerHTML = '';
        this.lista.forEach(cadena => {
            const li = document.createElement('li');
            li.textContent = cadena;
            listaElement.appendChild(li);
        });
    }
}

const listaCadenas = new ListaCadenas();
listaCadenas.agregar('Hola');
listaCadenas.agregar('Mundo');
listaCadenas.agregar('UCB');

//Retornar la cadena con mayor caracteres

//var = let
//------------------------------------Hola
var a = listaCadenas.lista[0]
console.log(a);
var aCant = a.length;
console.log(aCant);
//------------------------------------Mundo
var b = listaCadenas.lista[1]
console.log(b);
var bCant = b.length
console.log(bCant);
//------------------------------------UCB
var c = listaCadenas.lista[2]
console.log(c);
var cCant = c.length
console.log(cCant);


console.log(listaCadenas.lista); // Imprime: ['Hola', 'Mundo', 'UCB']










document.getElementById('btnAgregar').onclick = () => {
    const valor = document.getElementById('inputValor').value.trim();
    if (valor) {
        listaCadenas.agregar(valor);
        document.getElementById('inputValor').value = '';
    }
};

document.getElementById('btnEliminar').onclick = () => {
    const valor = document.getElementById('inputEliminar').value.trim();
    if (valor) {
        listaCadenas.eliminar(valor);
        document.getElementById('inputEliminar').value = '';
    }
};

document.getElementById('btnBuscar').onclick = () => {
    const valor = document.getElementById('inputBuscar').value.trim();
    const index = listaCadenas.buscar(valor);
    if (index !== -1) {
        alert(`Cadena encontrada en el índice: ${index}`);
    } else {
        alert('Cadena no encontrada.');
    }
};

document.getElementById('btnOrdenar').onclick = () => {
    listaCadenas.ordenar();
};


