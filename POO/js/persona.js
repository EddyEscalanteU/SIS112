class Persona {
    constructor(nombre, edad, carrera) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
    }
  
    saludar() {
      console.log('Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad +' años.');//print
    }
  
    cumpleaños() {
      this.edad = this.edad + 1;
      console.log('¡Feliz cumpleaños! Ahora tengo ' + this.edad + ' años.');
    }
  
    estudiar() {
      console.log('Estoy estudiando ' + this.carrera);
    }
  }

  function SaludoPersona1(){
    // Crear una instancia de la clase Persona
    //declara la variable usando: var / const / let    
    const persona1 = new Persona("Ana", 22, "Ingeniería Informática"); 
    // Llamar a los métodos
    persona1.saludar();
  }
  