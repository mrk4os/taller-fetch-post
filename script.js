document.getElementById('registroForm').addEventListener('submit', e => {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('happy_birthday').value;

    // Crear un objeto con los datos del formulario
    const user = {
        nombre,
        apellido,
        fecha_nacimiento: fechaNacimiento
    };

    // Realizar la solicitud POST con Fetch
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            infoDisplay.innerHTML = `
            <h1> Respuesta del servidor: </h3>
            <p><strong>Nombre:</strong> ${user.nombre}</p>
            <p><strong>Apellido:</strong> ${user.apellido}</p>
            <p><strong>Fecha de nacimiento:</strong> ${user.fecha_nacimiento}</p>
            <button type="button" name="Limpiar" onclick="cleanResults()">Limpiar</button>`

        })
        .catch(error => {
            console.error('Error:', error);
        });

    cleanForm();
});

function cleanForm() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('happy_birthday').value = '';
}

function cleanResults() {
    infoDisplay.innerHTML = '';
}


