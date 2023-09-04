document.getElementById('registroForm').addEventListener('submit', e => {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('happy_birthday').value;

    // Crear un objeto con los datos del formulario
    const formData = {
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
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});