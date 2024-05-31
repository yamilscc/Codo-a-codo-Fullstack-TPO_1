const timestamp = new Date().getTime();
const url = `https://yamilscc.github.io/Codo-a-codo-Fullstack-TPO_1/src/json/cursos.json?timestamp=${timestamp}`;




let original = document.querySelector("#Plantilla");
let referencia = original.cloneNode(true);

original.remove(); //Removemos el original y nos quedamos con la plantilla en copia

fetch(url) //Hacemos un get (petición http)desde el endpoint para obtener el JSON
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data.cursos_español);

    referencia.querySelector('td:nth-child(1)').textContent = data.cursos_español['Tipo Curso'];
    referencia.querySelector('td:nth-child(2)').textContent =  data.cursos_español['Curso'];
    referencia.querySelector('td:nth-child(3)').textContent =  data.cursos_español['Profesor'];
    referencia.querySelector('td:nth-child(4)').textContent =  data.cursos_español['Nivel'];
    referencia.querySelector('td:nth-child(5)').textContent =  data.cursos_español['Duración'];

    console.log(data.cursos_español[1].Nivel);

    data.cursos_español[1].Tipo
    data.cursos_español[i].Nivel


    })
.catch(error => console.log("Ocurrió un error! " + error));

