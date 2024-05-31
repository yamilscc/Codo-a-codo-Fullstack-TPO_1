

// fetch("https://yamilscc.github.io/Codo-a-codo-Fullstack-TPO_1/cursos.json")
// .then(response => response.json())
// .then(data => {
//     // Procesamiento de la info que llega de la API
//     console.log(data + "HOLA");
//     })
// .catch(error => console.log("Ocurrió un error! " + error));

fetch("https://randomuser.me/api") //Hacemos un get (petición http)desde el endpoint para obtener el JSON

//PROMESAS (then's) EN JS. Es un concepto complejo de JS que esta asociado con ASINCRONIA / EVENTOS ASINCRONICOS
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);
    })
.catch(error => console.log("Ocurrió un error! " + error));