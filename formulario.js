var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Me diste un click');

    var nombre = formulario.querySelector('input[name="nombre"]').value;
    var apellido = formulario.querySelector('input[name="apellido"]').value;
    var fecha = formulario.querySelector('input[name="fecha"]').value;

    var userData = {
        nombre: nombre,
        apellido: apellido,
        fecha: fecha
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});