/* BOTONERA PRINCIPAL */
let boton_oferta = document.querySelector("#Boton_oferta");
let boton_inscripciones = document.querySelector("#Boton_inscripciones");

carga_tabla_oferta();

/* Eventos */
boton_oferta.addEventListener("click", function(){
    //Contenedores (Afecto formato)
    let contenedor_oferta = document.querySelector("#Contenedor_oferta");
    let contenedor_inscripciones = document.querySelector("#Contenedor_inscripciones");

    // // Tablas (Datos)
    // let tabla_oferta = document.querySelector("#Contenedor_tabla_oferta");
    // let tabla_inscripciones = document.querySelector("#Contenedor_tabla_inscripciones");

    contenedor_oferta.style.display = 'block';
    contenedor_inscripciones.style.display = 'none';

    boton_oferta.style.backgroundColor = '#023E8A';
    boton_inscripciones.style.backgroundColor = '#52727C';

    carga_tabla_oferta();

}
);

boton_inscripciones.addEventListener("click", function(){
    //Contenedores (Afecto formato)
    let contenedor_oferta = document.querySelector("#Contenedor_oferta");
    let contenedor_inscripciones = document.querySelector("#Contenedor_inscripciones");

    // // Tablas (Datos)
    // let tabla_oferta = document.querySelector("#Contenedor_tabla_oferta");
    // let tabla_inscripciones = document.querySelector("#Contenedor_tabla_inscripciones");

    contenedor_oferta.style.display = 'none';
    contenedor_inscripciones.style.display = 'block';

    boton_oferta.style.backgroundColor = '#52727c';
    boton_inscripciones.style.backgroundColor = '#023E8A';

    carga_tabla_inscripciones();
    
}
);

/* Carga de tablas de OFERTA ACADÉMICA e INSCRIPCIONES */

function carga_tabla_oferta(){
    // Contenedor donde se dibujan las tareas * Aca hago los append *
    let contenedor_tabla_oferta = document.querySelector("#Contenedor_tabla_oferta");

    // Template de una fila en la TABLA OFERTA
    let fila = document.querySelector("#Contenedor_tabla_oferta #Plantilla_oferta");

    /* Copias de la referencia del TEMPLATE para no perderla al remover las plantillas del body de HTML */
    let copiaFila = fila.cloneNode(true);

    // Quito del documento los templates y nos quedamos con la plantilla en copiaFila
    fila.remove();

    fetchData(
        "http://127.0.0.1:5000/api/cursos/oferta/",  /* CAMBIAR RUTA */
        "GET",
        (data) => {
            // Procesamiento de la info que llega de la API

            /* Aca va el callback. Usamos una función lambda/anónima que se va a encargar del MANEJO DEL DOM */
            console.log(data);
            
            let filas = [];

            filas.push(document.querySelector("#Header_oferta")); // Cargo las cabeceras

            // Recorro la lista de TAREAS PENDIENTES
            for (const elementoFila of data) {
                console.log(elementoFila); //Visualizamos las filas en consola

                // 1) Duplicar Plantilla
                let nuevaFila = copiaFila.cloneNode(true);
                
                // 2) Popular la plantilla de TAREAS PENDIENTES con los datos reales
                nuevaFila.querySelector("#Tipo_Curso").innerHTML = elementoFila.tipo_curso; //Recordar enviar desde el backend OBJETOS!!
                nuevaFila.querySelector("#Curso").innerHTML = elementoFila.curso;
                nuevaFila.querySelector("#Nivel").innerHTML = elementoFila.nivel;
                nuevaFila.querySelector("#Profesor").innerHTML = elementoFila.profesor;
                nuevaFila.querySelector("#Duracion").innerHTML = elementoFila.duracion + " meses";
                nuevaFila.querySelector("#Fecha_inicio").innerHTML = elementoFila.fecha_inicio;
                nuevaFila.querySelector("#Fecha_finalizacion").innerHTML = elementoFila.fecha_finalizacion;
                nuevaFila.querySelector("#Dias_cursada").innerHTML = elementoFila.dias_cursada;

                // Agrego la nueva tarea al listado de tareas para ver en viewport
                filas.push(nuevaFila); // Agrego a la lista de tareas el nodo plantilla de tareas pendientes
            }

            // 3) Agregarla al Frontend
            // Acción doble --> replaceChildren() borra todo el contenido y agrega lo que yo le diga
            contenedor_tabla_oferta.replaceChildren(...filas); /* ELLIPSIS O DESEMPAQUETADO EN JS("...tareas") --> replaceChildren() espera recibir parámetros separados por comas, NO una lista. Por lo que, al escribir "...", estamos indicando que se está desempaquetando la lista/array en valores individuales */
        }
    );
}

function carga_tabla_inscripciones(){
    // Contenedor donde se dibujan las tareas * Aca hago los append *
    let contenedor_tabla_inscripciones = document.querySelector("#Contenedor_tabla_inscripciones");

    // Template de una fila en la TABLA OFERTA
    let fila = document.querySelector("#Contenedor_tabla_inscripciones #Plantilla_oferta");

    /* Copias de la referencia del TEMPLATE para no perderla al remover las plantillas del body de HTML */
    let copiaFila = fila.cloneNode(true);

    // Quito del documento los templates y nos quedamos con la plantilla en copiaFila
    fila.remove();

    fetchData(
        "http://127.0.0.1:5000/api/cursos/inscripciones/",  /* CAMBIAR RUTA */
        "GET",
        (data) => {
            // Procesamiento de la info que llega de la API

            /* Aca va el callback. Usamos una función lambda/anónima que se va a encargar del MANEJO DEL DOM */
            console.log(data);
            
            let filas = [];

            filas.push(document.querySelector("#Header_inscripciones")); // Cargo las cabeceras

            // Recorro la lista de TAREAS PENDIENTES
            for (const elementoFila of data) {
                console.log(elementoFila); //Visualizamos las filas en consola

                // 1) Duplicar Plantilla
                let nuevaFila = copiaFila.cloneNode(true);
                
                // 2) Popular la plantilla de TAREAS PENDIENTES con los datos reales
                nuevaFila.querySelector("#Tipo_Curso").innerHTML = elementoFila.tipo_curso; //Recordar enviar desde el backend OBJETOS!!
                nuevaFila.querySelector("#Curso").innerHTML = elementoFila.curso;
                nuevaFila.querySelector("#Nivel").innerHTML = elementoFila.nivel;
                nuevaFila.querySelector("#Profesor").innerHTML = elementoFila.profesor;
                nuevaFila.querySelector("#Duracion").innerHTML = elementoFila.duracion + " meses";
                nuevaFila.querySelector("#Fecha_inicio").innerHTML = elementoFila.fecha_inicio;
                nuevaFila.querySelector("#Fecha_finalizacion").innerHTML = elementoFila.fecha_finalizacion;
                nuevaFila.querySelector("#Dias_cursada").innerHTML = elementoFila.dias_cursada;

                // Agrego la nueva tarea al listado de tareas para ver en viewport
                filas.push(nuevaFila); // Agrego a la lista de tareas el nodo plantilla de tareas pendientes
            }

            // 3) Agregarla al Frontend
            // Acción doble --> replaceChildren() borra todo el contenido y agrega lo que yo le diga
            contenedor_tabla_inscripciones.replaceChildren(...filas); /* ELLIPSIS O DESEMPAQUETADO EN JS("...tareas") --> replaceChildren() espera recibir parámetros separados por comas, NO una lista. Por lo que, al escribir "...", estamos indicando que se está desempaquetando la lista/array en valores individuales */
        }
    );
}



