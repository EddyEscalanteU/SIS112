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
listaCadenas.agregar('Hola');//4 - 0
listaCadenas.agregar('Mundo');//5 - 1
listaCadenas.agregar('UCB SCZ INDUSTRIAL');//3 - 2

//Retornar la cadena con mayor caracteres
/*
//var = let
//------------------------------------Hola
var a = listaCadenas.lista[0]
console.log(a);
var aCant = a.length;
console.log(aCant);//4
//------------------------------------Mundo
var b = listaCadenas.lista[1]
console.log(b);
var bCant = b.length
console.log(bCant);//5
//------------------------------------UCB
var c = listaCadenas.lista[2]
console.log(c);
var cCant = c.length
console.log(cCant);//3
///------------------------------Buscar el mayor
var mayor = 0;
var posicion = -1;
if (aCant > mayor) {
    mayor = aCant;
    posicion = 0;
}
//---
if (bCant > mayor) {
    mayor = bCant;
    posicion = 1;
}
//---
if (cCant > mayor) {
    mayor = cCant
    posicion = 2;
}
//---
console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + listaCadenas.lista[posicion]);
*/


//REALIZAR EL MISMO EJERCICIO UTILIZANDO UN FOR
// Variables para almacenar la cadena más larga y su longitud
let mayor = 0;
let posicion = -1;

// Usar un bucle for para iterar sobre la lista de cadenas
for (let i = 0; i < listaCadenas.lista.length; i++) {
    const cadena = listaCadenas.lista[i];
    const longitud = cadena.length;

    if (longitud > mayor) {
        mayor = longitud;
        posicion = i;
    }
}

// Mostrar los resultados
console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + listaCadenas.lista[posicion]);

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


