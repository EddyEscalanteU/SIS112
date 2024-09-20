class Cadena {
    constructor(cadena) {
      this.cadena = cadena;
    }
  
    getCadena() {
      return this.cadena;
    }
  
    // Manipulación de cadenas
    concatenar(otraCadena) {
      this.cadena += otraCadena;
    }
  
    invertir() {
        let cadenaInvertida = '';
        for (let i = this.cadena.length - 1; i >= 0; i--) {
          cadenaInvertida += this.cadena[i];
        }
        this.cadena = cadenaInvertida;
      }
  
    // Comparaciones
    esVacia() {
      return this.cadena.length === 0;
    }
  
    contiene(subcadena) {
      return this.cadena.includes(subcadena);
    }
  
    comienzaCon(prefijo) {
      return this.cadena.startsWith(prefijo);
    }
  
    terminaCon(sufijo) {
      return this.cadena.endsWith(sufijo);
    }
  
    // Otras operaciones
    longitud() {
      return this.cadena.length;
    }
  
    aMayusculas() {
      return this.cadena.toUpperCase();
    }
  
    aMinusculas() {
      return this.cadena.toLowerCase();
    }
  }


const miCadena = new Cadena("Hola, mundo!");
miCadena.concatenar(" ¿Cómo estás?");
console.log(miCadena.getCadena()); // Imprime: Hola, mundo! ¿Cómo estás?