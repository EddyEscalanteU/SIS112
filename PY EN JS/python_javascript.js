// Cargar Pyodide desde un CDN
async function runPythonCode() {
    // Cargar Pyodide
    let pyodide = await loadPyodide();
  
    // Ejecutar código Python en el navegador
    let result = await pyodide.runPythonAsync(`
      def my_algorithm(x):
          return x * 2
      my_algorithm(7)
    `);
  
    // Mostrar el resultado en el div con id 'output'
    document.getElementById('output').innerText = 'Resultado: ' + result;
  }
  