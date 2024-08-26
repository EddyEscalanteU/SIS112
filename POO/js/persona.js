class Persona {
  constructor(nombre, edad, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
  }

  saludar() {
    return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
  }

  cumpleanios() {
    return '¡Felicidades! tienes ' + this.edad + ' años.';
  }

  estudiar() {
    return 'Estoy estudiando ' + this.carrera;
  }
}

// Crear una instancia de la clase Persona
const persona = new Persona('Juan', 25, 'Ingeniería');

// Inicializar los elementos HTML
const saludar = document.getElementById('saludar');
const edad = document.getElementById('edad');
const carrera = document.getElementById('carrera');

// Función para saludar
function botonSaludar() {
  saludar.textContent = persona.saludar();
}

// Función para cumpleaños
function botonCumpleanios() {
  edad.textContent = persona.cumpleanios();
}

// Función para estudiar
function botonEstudiar() {
  carrera.textContent = persona.estudiar();
}