/*
Enunciado: Implementa un servidor en Node.js que permita registrar usuarios. El servidor debe leer el nombre y la edad de un usuario desde el teclado y devolver un mensaje de confirmación al cliente.
 El servidor debe escuchar en el puerto 3000.
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
     rl.question('Ingresa tu nombre: ', (nombre) => {
         rl.question('Ingresa tu edad: ', (edad) => {
             let mensaje = `Usuario registrado: ${nombre}, Edad: ${edad}`;
             
             res.writeHead(200, { 'Content-Type': 'text/plain' });
             res.end(mensaje);
         });
     });
 });
 
 // El servidor escucha en el puerto 3000
 server.listen(3000, () => {
     console.log('Servidor de registro de usuarios escuchando en http://localhost:3000');
 });
 