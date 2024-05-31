/* Estas 2 líneas son útiles porque, ante una actualización de la data presente el archivo JSON, la info presente en el sitio se actualiza apropiadamente */
const timestamp = new Date().getTime();
const url = `https://yamilscc.github.io/Codo-a-codo-Fullstack-TPO_1/src/json/cursos.json?timestamp=${timestamp}`;

//Consumo una API Propia y muestro dinámicamente contenido en HTML mediante manejo del DOM

let tabla = document.querySelector("#Plantilla");
let contenedor = document.querySelector("#Contenedor");

let copiaTabla = tabla.cloneNode(true);

tabla.remove(); //Removemos el original y nos quedamos con la plantilla en copia

fetch(url) //Hacemos un get (petición http)desde el endpoint para obtener el JSON
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data.cursos_portugues);

    for (let i = 0; i < data.cursos_portugues.length ; i++) {
        
        let elementoFila = copiaTabla.cloneNode(true);

        elementoFila.querySelector("#Tipo_Curso").textContent = data.cursos_portugues[i].Tipo_Curso;
        elementoFila.querySelector("#Curso").textContent = data.cursos_portugues[i].Curso;
        elementoFila.querySelector("#Profesor").textContent = data.cursos_portugues[i].Profesor;
        elementoFila.querySelector("#Nivel").textContent = data.cursos_portugues[i].Nivel;
        elementoFila.querySelector("#Duracion").textContent = data.cursos_portugues[i].Duracion + " meses";
        
        contenedor.appendChild(elementoFila);
    }

    })
.catch(error => console.log("Ocurrió un error! " + error));
