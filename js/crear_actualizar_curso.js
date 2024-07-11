let submitButton = document.querySelector("#Form_curso #Boton_crear");

submitButton.addEventListener("click", ()=>{
    event.preventDefault(); 

    let curso_nuevo = {
        'tipo_curso': document.querySelector("#Form_curso #Tipo_curso").value,
        'curso': document.querySelector("#Form_curso #Curso").value,
        'nivel': document.querySelector("#Form_curso #Nivel").value,
        'profesor': document.querySelector("#Form_curso #Profesor").value,
        'duracion': document.querySelector("#Form_curso #Duracion").value,
        'fecha_inicio': document.querySelector("#Form_curso #Fecha_inicio").value,
        'fecha_finalizacion': document.querySelector("#Form_curso #Fecha_finalizacion").value,
        'dias_cursada': document.querySelector("#Form_curso #Dias_cursada").value
    }
    
    fetchData(
        "http://localhost:5000/api/cursos/crear/",
        "POST",
        (data) => {
            document.querySelector("#Form_curso").reset(); //Reseteo el form
            window.location.replace("../gestionar_cursos.html#Contenedor_total"); //Vuelvo a la página de cursos
        },
        curso_nuevo
    );
    }

);
