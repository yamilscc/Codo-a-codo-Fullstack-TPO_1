const timestamp = new Date().getTime();
const url = `https://yamilscc.github.io/Codo-a-codo-Fullstack-TPO_1/src/json/cursos.json?timestamp=${timestamp}`;




let tabla = document.querySelector("#Plantilla");
let contenedor = document.querySelector("#Contenedor");

let copiaTabla = tabla.cloneNode(true);

console.log(copiaTabla);

tabla.remove(); //Removemos el original y nos quedamos con la plantilla en copia

fetch(url) //Hacemos un get (petición http)desde el endpoint para obtener el JSON
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data.cursos_español);

    // referencia.querySelector('td:nth-child(1)').textContent = data.cursos_español['Tipo Curso'];
    // referencia.querySelector('td:nth-child(2)').textContent =  data.cursos_español['Curso'];
    // referencia.querySelector('td:nth-child(3)').textContent =  data.cursos_español['Profesor'];
    // referencia.querySelector('td:nth-child(4)').textContent =  data.cursos_español['Nivel'];
    // referencia.querySelector('td:nth-child(5)').textContent =  data.cursos_español['Duración'];

    console.log(data.cursos_español[1].Tipo_Curso);

        for (let i = 0; i < data.cursos_español.length ; i++) {
            copiaTabla.querySelector("#Tipo_Curso").textContent = data.cursos_español[i].Tipo_Curso;
            copiaTabla.querySelector("#Curso").textContent = data.cursos_español[i].Curso;
            copiaTabla.querySelector("#Profesor").textContent = data.cursos_español[i].Profesor;
            copiaTabla.querySelector("#Nivel").textContent = data.cursos_español[i].Nivel;
            copiaTabla.querySelector("#Duración").textContent = data.cursos_español[i].Duración;

            contenedor.appendChild(copiaTabla);
        }



    // }

    // referencia.insertRow();

    // referencia.innerHTML = "<td>"+ data.cursos_español[1].Curso +"</td>"

    // document.querySelector("#Plantilla").

    // for (let i = 0; i < 8 ; i++) {
        // console.log(data.cursos_español[i].Curso);
        // console.log(data.cursos_español[i].Tipo_Curso);
        // console.log(data.cursos_español[i].Profesor);
    //     console.log(data.cursos_español[i].Nivel);
    //     // console.log(data.cursos_español[i].Duración);

    //     referencia.querySelector('td:nth-child(i+1)').textContent = data.cursos_español[i].Curso;

    //     referencia.querySelector('td:nth-child(i+2)').textContent = data.cursos_español[i].Tipo_Curso;

    //     referencia.querySelector('td:nth-child(i+3)').textContent = data.cursos_español[i].Profesor;

    //     referencia.querySelector('td:nth-child(i+4)').textContent = data.cursos_español[i].Nivel;

    //     referencia.querySelector('td:nth-child(i+5)').textContent = data.cursos_español[i].Duración;

    //     document.querySelector("table").appendChild(referencia);
    // }

    
    // // data.cursos_español[i].Nivel


    })
.catch(error => console.log("Ocurrió un error! " + error));

