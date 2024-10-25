/**
  Lectura de datos de usuario: 
 soliciitar los siguientes datos de cada usuario.
 nombre - rut - Fecha de nacimiento - correo electronico.

 * el programa debe repetirse hasta que el usuario escriba 'salir'.
 el programa debe mostrar un menu dond eel usuario pueda escoger entre:
 - ver los usuarios registrados.
 - Ingresar un nuevo Usuario.
* el programa debe ser ejecutable a traves de node.js.
- mostrar datos por pantalla
- estar escuchando en el puerto 3000
 */

const express = require('express'); // aqui se uso express jijiji :) ;-; xddd 
const readline = require('readline');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

app.get('/usuarios', (req, res) => {
    if (usuarios.length === 0) {
        res.status(200).send('No hay usuarios registrados.');
    } else {
        res.status(200).json(usuarios);
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000...');
    mostrarMenu();
});
