const readline = require('readline');
const moment = require('moment');

// Crear la interfaz de entrada/salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menú de la cafetería
const menu = [
    { item: 'Café', precio: 20 },
    { item: 'Sandwich', precio: 50 },
    { item: 'Jugo', precio: 25 },
    { item: 'Ensalada', precio: 35 }
];

// Variables para guardar la información
let totalDia = 0; // Lo recaudado en el día
const fechaApertura = moment().format('YYYY-MM-DD HH:mm:ss'); // Fecha de apertura de caja

// Mostrar el menú
function mostrarMenu() {
    console.log('--- Menú de la Cafetería ---');
    menu.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.item} - $${producto.precio}`);
    });
    console.log('5. Finalizar compra');
}

// Pedir la orden del cliente
function pedirOrden() {
    mostrarMenu();
    let totalCompra = 0;

    const pedirProducto = () => {
        rl.question('Seleccione el número del producto que desea o 5 para finalizar: ', (input) => {
            const opcion = parseInt(input);

            if (opcion === 5) {
                console.log(`Total a pagar: $${totalCompra}`);
                totalDia += totalCompra;
                console.log('Gracias por su compra.');
                console.log('-----------------------------------');
                rl.question('¿Desea realizar otra compra? (s/n): ', (respuesta) => {
                    if (respuesta.toLowerCase() === 's') {
                        pedirOrden();
                    } else {
                        console.log(`Total recaudado hoy: $${totalDia}`);
                        console.log(`Fecha de apertura de caja: ${fechaApertura}`);
                        rl.close();
                    }
                });
            } else if (opcion >= 1 && opcion <= 4) {
                const productoSeleccionado = menu[opcion - 1];
                totalCompra += productoSeleccionado.precio;
                console.log(`Agregaste ${productoSeleccionado.item} por $${productoSeleccionado.precio}. Total: $${totalCompra}`);
                pedirProducto();
            } else {
                console.log('Opción no válida. Intente de nuevo.');
                pedirProducto();
            }
        });
    };

    pedirProducto();
}

// Iniciar la aplicación
console.log('Bienvenido a la Cafetería de la Universidad');
console.log(`Caja abierta el ${fechaApertura}`);
pedirOrden();
