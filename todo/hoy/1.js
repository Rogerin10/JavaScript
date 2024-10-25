const readline = require('readline');
const http = require('http');

let usuarios = [];

function solicitarDatosUsuario() {
    rl.question('Ingrese el nombre del usuario: ', (nombre) => {
        rl.question('Ingrese el RUT: ', (rut) => {
            rl.question('Ingrese la fecha de nacimiento (DD/MM/YYYY): ', (fechaNacimiento) => {
                rl.question('Ingrese el correo electrónico: ', (correoElectronico) => {
                    usuarios.push({
                        nombre,
                        rut,
                        fechaNacimiento,
                        correoElectronico
                    });
                    console.log('Usuario registrado con éxito.');
                    mostrarMenu();
                });
            });
        });
    });
}

function mostrarMenu() {
    console.log('\n--- Menú ---');
    console.log('1. Ver usuarios registrados');
    console.log('2. Ingresar un nuevo usuario');
    console.log("Escriba 'salir' para terminar el programa.");

    rl.question('Seleccione una opción: ', (opcion) => {
        if (opcion === '1') {
            if (usuarios.length === 0) {
                console.log('No hay usuarios registrados.');
            } else {
                console.log('\n--- Usuarios registrados ---');
                usuarios.forEach((usuario, index) => {
                    console.log(`Usuario ${index + 1}:`);
                    console.log(`Nombre: ${usuario.nombre}`);
                    console.log(`RUT: ${usuario.rut}`);
                    console.log(`Fecha de Nacimiento: ${usuario.fechaNacimiento}`);
                    console.log(`Correo Electrónico: ${usuario.correoElectronico}\n`);
                });
            }
            mostrarMenu();
        } else if (opcion === '2') {
            solicitarDatosUsuario();
        } else if (opcion.toLowerCase() === 'salir') {
            console.log('Programa terminado.');
            rl.close();
            process.exit();
        } else {
            console.log('Opción no válida. Inténtelo de nuevo.');
            mostrarMenu();
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const server = http.createServer((req, res) => {
    if (req.url === '/usuarios') {
        if (usuarios.length === 0) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('No hay usuarios registrados.');
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(usuarios));
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000...');
    mostrarMenu();
});