
fetch("https://yamilscc.github.io/Codo-a-codo-Fullstack-TPO_1/src/json/cursos.json") //Hacemos un get (petición http)desde el endpoint para obtener el JSON
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);
    })
.catch(error => console.log("Ocurrió un error! " + error));