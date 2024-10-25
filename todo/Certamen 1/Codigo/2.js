/*
 -Permitir que un usuario ingrese tres numeros
 - crear menu estilo calculadora: suma, resta, multiplicacion, division y modulo.
 - solicitar las operaciones al usuario
 - luego mostrar resultado por pantalla
 - el servidor debe estar escuchando en el pueto 4025
 */
 const readline = require('readline');
 const http = require('http');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 rl.question('Ingrese el primer número: ', (num1) => {
     rl.question('Ingrese el segundo número: ', (num2) => {
         rl.question('Ingrese el tercer número: ', (num3) => {
             rl.question('Ingrese la operación (+, -, *, /, %): ', (operacion) => {
                 let resultado;
                 switch (operacion) {
                     case '+':
                         resultado = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
                         break;
                     case '-':
                         resultado = parseFloat(num1) - parseFloat(num2) - parseFloat(num3);
                         break;
                     case '*':
                         resultado = parseFloat(num1) * parseFloat(num2) * parseFloat(num3);
                         break;
                     case '/':
                         resultado = parseFloat(num1) / parseFloat(num2) / parseFloat(num3);
                         break;
                     case '%':
                         resultado = parseFloat(num1) % parseFloat(num2) % parseFloat(num3);
                         break;
                     default:
                         console.log('Operación no válida');
                         rl.close();
                         return;
                 }
                 console.log(`El resultado de ${num1} ${operacion} ${num2} ${operacion} ${num3} es: ${resultado}`);
                 rl.close();
 
                 const server = http.createServer((req, res) => {
                     res.writeHead(200, {'Content-Type': 'text/plain'});
                     res.end(`El resultado de ${num1} ${operacion} ${num2} ${operacion} ${num3} es: ${resultado}`);
                 });
 
                 server.listen(4025, () => {
                     console.log('Servidor escuchando en el puerto 4025');
                 });
             });
         });
     });
 });
 