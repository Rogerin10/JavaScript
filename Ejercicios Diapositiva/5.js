/**
 Servidor de Contador de Palabras
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
    rl.question('Ingresa una cadena de texto: ', (texto) => {
        let numPalabras = texto.trim().split(/\s+/).length;

        let mensaje = `La cadena ingresada contiene ${numPalabras} palabra(s).`;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(mensaje);
    });
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor de contador de palabras escuchando en http://localhost:3000');
});
