/*
Enunciado: Crea un servidor en Node.js que lea una cadena de texto desde el teclado y la devuelva al cliente. 
El servidor debe escuchar en el puerto 3000 y responder con el mismo texto que el usuario ingresó.
*/
const http = require('http');
const readline = require('readline');

// Configuración de lectura desde el teclado
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Crear servidor HTTP
const server = http.createServer((req, res) => {
    rl.question('Ingresa un texto: ', (input) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Texto recibido: ${input}`);
    });
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor de eco escuchando en http://localhost:3000');
});
