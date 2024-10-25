/**
Servidor de Conversion de Temperatura
 */
const http = require('http');
const readline = require('readline');

// Configuracion de lectura desde el teclado
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Crear servidor HTTP
const server = http.createServer((req, res) => {
    rl.question('Ingresa una temperatura en grados Celsius: ', (celsius) => {
        let tempC = parseFloat(celsius);
        let fahrenheit = (tempC * 9/5) + 32;
        let kelvin = tempC + 273.15;

        let resultado = `Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}\nTemperatura en Kelvin: ${kelvin.toFixed(2)}`;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(resultado);
    });
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor de conversión de temperatura escuchando en http://localhost:3000');
});
