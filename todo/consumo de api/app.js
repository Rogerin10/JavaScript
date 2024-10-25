const axios = require('axios');

// URL de la API externa
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Función para obtener datos de la API
async function obtenerPublicaciones() {
    try {
        const respuesta = await axios.get(API_URL);
        console.log('Publicaciones:', respuesta.data);
    } catch (error) {
        console.error('Error al obtener publicaciones:', error.message);
    }
}

// Ejecutar la función
obtenerPublicaciones();
