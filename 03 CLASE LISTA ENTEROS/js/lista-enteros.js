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

    mostrarLista() {
        const listaResultado = document.getElementById('listaResultado');
        listaResultado.innerHTML = '';
        this.lista.forEach(valor => {
            const li = document.createElement('li');
            li.textContent = valor;
            listaResultado.appendChild(li);
        });
        this.mostrarMensaje('Lista actualizada.');
    }

    mostrarMensaje(mensaje) {
        const divMensaje = document.getElementById('mensaje');
        divMensaje.textContent = mensaje;
        setTimeout(() => {
            divMensaje.textContent = '';
        }, 3000);
    }
}

const listaEnteros = new ListaEnteros();
listaEnteros.agregar(21);
listaEnteros.agregar(12);
listaEnteros.agregar(15);
listaEnteros.agregar(30);
console.log(listaEnteros.lista); // Imprime: [21, 12, 15, 30]

var a = listaEnteros.lista[0];
console.log(a);

var b = listaEnteros.lista[1];
console.log(b);

var c = listaEnteros.lista[2];
console.log(c);

var d = listaEnteros.lista[3];
console.log(d);

//RETORNAR EL ELEMENTO MENOR DE LA LISTA, dado  que la lista solo almacena valores positivos
/*
var datoMenor = -1;
//------------------------------------------------
var a = listaEnteros.lista[0];
if(a > datoMenor){
    datoMenor = a;
}
console.log("Dato Menor: " + datoMenor);
//------------------------------------------------
var b = listaEnteros.lista[1];
if(a > b){
    datoMenor = b;
}
console.log("Dato Menor: " + datoMenor);
//------------------------------------------------
var c = listaEnteros.lista[2];
if(b > c){
    datoMenor = c;
}
console.log("Dato Menor: " + datoMenor);
//------------------------------------------------
var d = listaEnteros.lista[3];
if(c > d){
    datoMenor = d;
}
console.log("Dato Menor: " + datoMenor);
//------------------------------------------------
*/

var datoMenor=listaEnteros.lista[0];
for (let index = 1; index < listaEnteros.lista.length; index++) {
    if(listaEnteros.lista[index]< datoMenor){
        datoMenor=listaEnteros.lista[index]
    }
    console.log("Dato Menor: " + datoMenor);
}


const lista = listaEnteros.lista; // Acceder a la lista una sola vez

if (lista.length === 0) {
    console.log("La lista está vacía.");
} else {
    let datoMayor = lista[0]; // Inicializar el dato mayor

    for (const num of lista) { // Usar un bucle for-of para mayor claridad
        if (num > datoMayor) {
            datoMayor = num; // Actualizar el dato mayor
        }
    }

    console.log("Dato Mayor:", datoMayor);
}










document.getElementById('btnAgregar').addEventListener('click', () => {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        listaEnteros.agregar(valor);
        document.getElementById('inputValor').value = '';
    } else {
        listaEnteros.mostrarMensaje('Por favor, ingrese un número válido.');
    }
});

document.getElementById('btnEliminar').addEventListener('click', () => {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        listaEnteros.eliminar(valor);
        document.getElementById('inputValor').value = '';
    } else {
        listaEnteros.mostrarMensaje('Por favor, ingrese un número válido.');
    }
});

document.getElementById('btnBuscar').addEventListener('click', () => {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        const index = listaEnteros.buscar(valor);
        if (index !== -1) {
            listaEnteros.mostrarMensaje(`El número ${valor} se encuentra en la lista.`);
        } else {
            listaEnteros.mostrarMensaje(`El número ${valor} no se encuentra en la lista.`);
        }
        document.getElementById('inputValor').value = '';
    } else {
        listaEnteros.mostrarMensaje('Por favor, ingrese un número válido.');
    }
});

document.getElementById('btnOrdenar').addEventListener('click', () => {
    listaEnteros.ordenar();
});