/*
Enunciado: Desarrolla un servidor en Node.js que lea dos números desde el teclado, los sume, multiplique, reste, divida y devuelva el resultado al cliente. 
El servidor debe escuchar en el puerto 3000 y responder con el resultado de las operaciones.
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
    rl.question('Ingresa el primer número: ', (num1) => {
        rl.question('Ingresa el segundo número: ', (num2) => {
            let a = parseFloat(num1);
            let b = parseFloat(num2);

            let suma = a + b;
            let resta = a - b;
            let multiplicacion = a * b;
            let division = b !== 0 ? (a / b).toFixed(2) : 'Infinito (no se puede dividir entre cero)';

            let resultado = `Suma: ${suma}\nResta: ${resta}\nMultiplicacion: ${multiplicacion}\nDivision: ${division}`;

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(resultado);
        });
    });
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor de calculadora escuchando en http://localhost:3000');
});
