function  fetchData(url, method, callback, data = null) {
    const options = {
        method: method, // Es alguna de las 4 acciones de HTTP: POST, PUT, GET o DELETE
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,  // Si hay datos, los convierte a JSON y los incluye en el cuerpo
    };

    fetch(url, options) // "options" constituye el request que el frontend le hace al backend
    .then(response => response.json())
    .then(data => {
        callback(data);
    })
    .catch(error => console.log("Ocurrió un error! " + error));
}