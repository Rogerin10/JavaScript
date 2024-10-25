const readline = require('readline');
const http = require('http');

let listaDeUsuarios = []; // Initialize an empty array to store registered users

// Función para leer datos de usuario
function leerDatosUsuario() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

rl.question('Nombre: ', (nombre) => {
    rl.question('RUT: ', (rut) => {
        rl.question('Fecha de nacimiento (DD/MM/YYYY): ', (fechaNacimiento) => {
            rl.question('Correo electrónico: ', (correoElectronico) => {
                rl.question('Teléfono: ', (telefono) => {
                    const usuario = {
                        nombre,
                        rut,
                        fechaNacimiento,
                        correoElectronico,
                        telefono
                    };
                    listaDeUsuarios.push(usuario); // Add the new user to the listaDeUsuarios array
                    rl.close();
                });
            });
        });
    });
});
}

// Función para mostrar menú de opciones
function mostrarMenu() {
    console.log('Menú de opciones:');
    console.log('1. Ver usuarios registrados');
    console.log('2. Ingresar nuevo usuario');
    console.log('3. Salir');
}

// Función para mostrar usuarios registrados
function mostrarUsuarios() {
    console.log('Usuarios registrados:');
    listaDeUsuarios.forEach((usuario, index) => {
    console.log(`#${index + 1} - ${usuario.nombre} (${usuario.rut})`);
});
}

// Crear servidor HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Servidor Node.js en ejecución\n');
});

// Iniciar servidor en puerto 3000
server.listen(3000, () => {
    console.log('Servidor iniciado en puerto 3000');
  mostrarMenuYProcesarInput(); // Call the function to start the menu display and input process
});

function mostrarMenuYProcesarInput() {
    mostrarMenu();
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Opción: ', (opcion) => {
    switch (opcion) {
    case '1':
        mostrarUsuarios();
        break;
    case '2':
        leerDatosUsuario();
        break;
    case '3':
        console.log('Saliendo...');
        process.exit(0);
        break;
    default:
        console.log('Opción inválida');
    }
    rl.close();
    setTimeout(mostrarMenuYProcesarInput, 0); // Call the function again to repeat the process
});
}